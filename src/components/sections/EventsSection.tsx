import { useEffect, useRef, useState } from "react";
import Container from "../Container";
import axios from "axios";
import EventCard from "../EventCard";
import shuffle from "../../utils/shuffle";
import Button from "../Button";

interface Event {
  id: number;
  name: string;
  description: string;
  start: {
    date: string;
    formatted: string;
  };
  end: {
    date: string;
    formatted: string;
  };
  images: {
    header: string;
    thumbnail: string;
  };
  url: string;
  venue: {
    country: string;
    name: string;
    postal_code: string;
  };
}

interface EventsResponse {
  data: Event[];
}

const EVENTS_CACHE_KEY = "cachedAllEvents";

const FEATURED_SPEAKERS = [
  "Lyse Doucet",
  "Sarah Hall",
  "Rory Stewart",
  "Matt Frei & ?",
  "Sebastian Faulks",
  "Zeinab Badawi",
];

const FEATURED_COUNT = 3;

const readCachedEvents = (): Event[] | null => {
  try {
    const cached = sessionStorage.getItem(EVENTS_CACHE_KEY);
    return cached ? (JSON.parse(cached) as Event[]) : null;
  } catch {
    return null;
  }
};

const writeCachedEvents = (events: Event[]) => {
  try {
    sessionStorage.setItem(EVENTS_CACHE_KEY, JSON.stringify(events));
  } catch {
    // ignore (e.g. storage disabled)
  }
};

const isParking = (event: Event) => event.name.toLowerCase().includes("parking");

const isFeatured = (event: Event) => {
  const name = event.name.toLowerCase();
  return FEATURED_SPEAKERS.some((speaker) =>
    name.includes(speaker.toLowerCase()),
  );
};

// Cache holds every non-parking event. A fresh random subset of the featured
// ones is picked per mount; everything else is revealed by "See all past events".
// Re-filtering here guarantees only matching events are featured, even from a stale cache.
const splitEvents = (allEvents: Event[]) => {
  const events = allEvents.filter((event) => !isParking(event));
  const featured = shuffle(events.filter(isFeatured)).slice(0, FEATURED_COUNT);
  const featuredIds = new Set(featured.map((event) => event.id));
  const rest = events.filter((event) => !featuredIds.has(event.id));
  return { featured, rest };
};

const EventsSection = () => {
  const [{ featured, rest }, setSplit] = useState(() =>
    splitEvents(readCachedEvents() ?? []),
  );
  const [showAll, setShowAll] = useState(false);
  const restRef = useRef<HTMLDivElement>(null);

  // The button unmounts on click; move focus to the revealed events so
  // keyboard and screen-reader users aren't dropped back to the page top.
  useEffect(() => {
    if (showAll) restRef.current?.focus();
  }, [showAll]);

  useEffect(() => {
    if (readCachedEvents()) return;

    const getEvents = async () => {
      try {
        const response = await axios.get<EventsResponse>(
          `${import.meta.env.VITE_BACKEND_URL}api/events`,
        );
        console.log({response})
        const allEvents = response.data.data.filter((event) => !isParking(event));
        writeCachedEvents(allEvents);
        setSplit(splitEvents(allEvents));
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };

    getEvents();
  }, []);

  return (
    <Container
      className="relative z-10 flex flex-col items-center pt-[80px] pb-[120px] bg-dark-grey text-night"
      id="events"
    >
      <div className="flex flex-col items-center gap-4 mb-16 text-center text-silver">
        {/* <p className="font-thin text-lg">A sample from the</p> */}
        <p className="font-thin text-lg">2026</p>
        <h2 className="font-medium text-6xl">Past Events</h2>
        <hr className="w-1/2 mx-auto" />
      </div>
      <div className="flex justify-center flex-wrap gap-4 w-full">
        {featured.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>
      {showAll ? (
        <div
          ref={restRef}
          tabIndex={-1}
          aria-label="All past events"
          className="flex justify-center flex-wrap gap-4 w-full mt-4 outline-none"
        >
          {rest.map((event) => (
            <EventCard event={event} key={event.id} />
          ))}
        </div>
      ) : (
        rest.length > 0 && (
          <Button
            onClick={() => setShowAll(true)}
            className="mt-20 w-fit bg-silver text-black-olive hover:bg-dark-grey hover:ring-black-olive hover:text-black-olive min-w-[180px] self-center sm:self-auto"
            ariaLabel="See all past events"
            initialWord="See more"
            hoverWord="2026 past events"
          />
        )
      )}
    </Container>
  );
};

export default EventsSection;

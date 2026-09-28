import { useEffect, useState } from "react";
import Container from "../Container";
import axios from "axios";
import EventCard from "../EventCard";
// import shuffle from "../../utils/shuffle";
// import Button from "../Button";

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

const EVENTS_CACHE_KEY = "cachedEvents";

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

const EventsSection = () => {
  const [events, setEvents] = useState<Event[]>(() => readCachedEvents() ?? []);

  useEffect(() => {
    if (readCachedEvents()) return;

    const getEvents = async () => {
      try {
        const response = await axios.get<EventsResponse>(
          `${import.meta.env.VITE_BACKEND_URL}api/events`,
        );
        // setEvents(shuffle(response.data.data).slice(0, 3));
        const withoutParkingEvents = response.data.data.filter((event) => !event.name.toLowerCase().includes("parking"))
        setEvents(withoutParkingEvents);
        writeCachedEvents(withoutParkingEvents);
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
        {events.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>
      {/* <Button
        href="https://events.lakedistrictbookfestival.co.uk/"
        target="_blank"
        initialWord="See all events"
        hoverWord="Click here"
        // className="mt-7 w-fit bg-jonquil text-night hover:bg-jonquil hover:text-night min-w-[180px] self-center sm:self-auto"
        className="mt-20 w-fit bg-silver text-black-olive hover:bg-dark-grey hover:ring-black-olive hover:text-black-olive min-w-[180px] self-center sm:self-auto"
      /> */}
    </Container>
  );
};

export default EventsSection;

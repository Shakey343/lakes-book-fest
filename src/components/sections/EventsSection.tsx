import { useEffect, useState } from "react";
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

const EventsSection = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const response = await axios.get<EventsResponse>(
          `${import.meta.env.VITE_BACKEND_URL}api/events`,
        );
        setEvents(shuffle(response.data.data).slice(0, 3));
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };

    getEvents();
  }, []);

  return (
    <Container
      className="flex flex-col items-center pt-[80px] pb-[120px] bg-dark-grey text-night"
      id="events"
    >
      <div className="flex flex-col items-center gap-4 mb-16 text-center text-silver">
        {/* <p className="font-thin text-lg">A sample from the</p> */}
        <p className="font-thin text-lg">Sample the</p>
        <h2 className="font-medium text-6xl">Festival Programme</h2>
        <hr className="w-1/2 mx-auto" />
      </div>
      <div className="flex justify-center flex-wrap gap-4">
        {events.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>
      <Button
        href="https://events.lakedistrictbookfestival.co.uk/"
        target="_blank"
        initialWord="See all events"
        hoverWord="Click here"
        // className="mt-7 w-fit bg-jonquil text-night hover:bg-jonquil hover:text-night min-w-[180px] self-center sm:self-auto"
        className="mt-20 w-fit bg-silver text-black-olive hover:bg-dark-grey hover:ring-black-olive hover:text-black-olive min-w-[180px] self-center sm:self-auto"
      />
    </Container>
  );
};

export default EventsSection;

type Event = {
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
};

const EventCard = ({ event }: { event: Event }) => {
  return (
    <a
      key={event.id}
      className="flex items-center flex-col gap-[30px] w-[360px] min-h-[400px] group bg-night shadow-lg"
      href={event.url}
      target="_blank"
    >
      {/* <div className="w-full px-8">
      </div> */}
      <img
        className="w-full h-[300px] object-cover border-2 border-jonquil group-hover:border-8 transition-all"
        src={event.images.header}
        alt={event.name}
      />
      <div className="w-full px-8 pb-8">
        <p className="text-silver text-[14px] font-bold">{event.start.formatted}</p>
        <p className="text-silver text-[14px] font-light">{event.venue.name}</p>
        <h4 className="text-silver text-[22px] font-adelphi mt-4">{event.name}</h4>
      </div>
    </a>
  );
};

export default EventCard;

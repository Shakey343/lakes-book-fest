import { useEffect, useState } from "react";
import axios from "axios";
import parseCSV from "../../utils/csv/parseCSV";
import type { CSVRow } from "../../types/CSVtypes";

const PlacesList = ({ title, places }: { title: string; places: CSVRow[] }) => (
  <div className="card">
    <h3 className="font-adelphi text-2xl lg:text-3xl text-night">{title}</h3>
    <div className="mt-3 mb-4 h-[2px] w-16 bg-jonquil" />
    <ul className="divide-y divide-dark-grey/40">
      {places.map((place) => (
        <li key={place.name}>
          <a
            href={place.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block py-3 text-lg text-night focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jonquil"
          >
            <span className="underline decoration-jonquil decoration-2 underline-offset-4 transition-colors group-hover:bg-jonquil/30 group-focus-visible:bg-jonquil/30">
              {place.name}
            </span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// Rendered inside FestivalGuideSection (anchor: #around).
const PlacesSection = () => {
  const [stayPlaces, setStayPlaces] = useState<CSVRow[]>([]);
  const [eatPlaces, setEatPlaces] = useState<CSVRow[]>([]);
  const [visitPlaces, setVisitPlaces] = useState<CSVRow[]>([]);

  useEffect(() => {
    const getStayPlaces = async () => {
      const response = await axios.get(import.meta.env.VITE_GSHEET_STAY_PLACES);
      setStayPlaces(parseCSV(response.data));
    };
    getStayPlaces();

    const getEatPlaces = async () => {
      const response = await axios.get(import.meta.env.VITE_GSHEET_EAT_PLACES);
      setEatPlaces(parseCSV(response.data));
    };
    getEatPlaces();

    const getVisitPlaces = async () => {
      const response = await axios.get(
        import.meta.env.VITE_GSHEET_VISIT_PLACES,
      );
      setVisitPlaces(parseCSV(response.data));
    };
    getVisitPlaces();
  }, []);

  return (
    <section id="around" className="scroll-mt-24 mb-20">
      <h2 className="mb-10 text-center text-[44px] font-light leading-none sm:text-left">
        Around Cartmel
      </h2>

      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
        <PlacesList title="Places to Stay" places={stayPlaces} />
        <PlacesList title="Places to Eat" places={eatPlaces} />
        <PlacesList title="Places to Visit" places={visitPlaces} />
      </div>
    </section>
  );
};

export default PlacesSection;

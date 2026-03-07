import { useEffect, useState } from "react";
import Container from "../Container";
import axios from "axios";
import cn from "../../utils/cn";
import parseCSV from "../../utils/csv/parseCSV";
import type { CSVRow } from "../../types/CSVtypes";

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
    <Container className="flex flex-wrap gap-20 justify-between py-[100px] sm:pt-20 pb-32 h-fit bg-silver relative text-xl">
      <div className="w-full sm:w-1/4">
        <h2 className="text-3xl mb-4">Places to Stay</h2>
        {stayPlaces.map((place, i) => (
          <a href={place.url} key={place.name} className="mr-4">
            <span
              className={cn(
                "hover:text-fire-red",
                i % 2 === 0 ? "text-jonquil" : "text-night",
              )}
            >
              {place.name}
            </span>
          </a>
        ))}
      </div>
      <div className="w-full sm:w-1/4">
        <h2 className="text-3xl mb-4">Places to Eat</h2>
        {eatPlaces.map((place, i) => (
          <a href={place.url} key={place.name} className="mr-4">
            <span
              className={cn(
                "hover:text-fire-red",
                i % 2 === 0 ? "text-jonquil" : "text-night",
              )}
            >
              {place.name}
            </span>
          </a>
        ))}
      </div>
      <div className="w-full sm:w-1/4">
        <h2 className="text-3xl mb-4">Places to Visit</h2>
        {visitPlaces.map((place, i) => (
          <a href={place.url} key={place.name} className="mr-4">
            <span
              className={cn(
                "hover:text-fire-red",
                i % 2 === 0 ? "text-jonquil" : "text-night",
              )}
            >
              {place.name}
            </span>
          </a>
        ))}
      </div>
    </Container>
  );
};

export default PlacesSection;

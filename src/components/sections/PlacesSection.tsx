import { useEffect, useState } from "react";
import Container from "../Container";
import axios from "axios";
import cn from "../../utils/cn";

type CSVRow = Record<string, string>;

const parseCSV = (csvText: string): CSVRow[] => {
  const rows = csvText.trim().split(/\r?\n/);

  if (rows.length === 0) return [];

  const headers = rows[0].split(",").map((h) => h.trim());
  const data: CSVRow[] = [];

  for (let i = 1; i < rows.length; i++) {
    if (!rows[i]) continue;

    const rowData = rows[i].split(",");
    const rowObject: CSVRow = {};

    for (let j = 0; j < headers.length; j++) {
      rowObject[headers[j]] = rowData[j]?.trim() ?? "";
    }

    data.push(rowObject);
  }

  return data.sort((a, b) => {
    const dateA = new Date(a["DATE"]);
    const dateB = new Date(b["DATE"]);
    return dateA.getTime() - dateB.getTime();
  });
};

const PlacesSection = () => {
  const [stayPlaces, setStayPlaces] = useState<CSVRow[]>([]);
  const [eatPlaces, setEatPlaces] = useState<CSVRow[]>([]);
  const [visitPlaces, setVisitPlaces] = useState<CSVRow[]>([]);

  useEffect(() => {
    const getStayPlaces = async () => {
      const response = await axios.get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTd9onysTjVHPWhbwQ2fWISkmXzkddcjUsEgMSEP9FesYF7Q5PtUT43bj-bhCBT_xulPytHRO2gppgS/pub?gid=0&single=true&output=csv",
      );
      setStayPlaces(parseCSV(response.data));
    };
    getStayPlaces();

    const getEatPlaces = async () => {
      const response = await axios.get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTd9onysTjVHPWhbwQ2fWISkmXzkddcjUsEgMSEP9FesYF7Q5PtUT43bj-bhCBT_xulPytHRO2gppgS/pub?gid=699150140&single=true&output=csv",
      );
      setEatPlaces(parseCSV(response.data));
    };
    getEatPlaces();

    const getVisitPlaces = async () => {
      const response = await axios.get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTd9onysTjVHPWhbwQ2fWISkmXzkddcjUsEgMSEP9FesYF7Q5PtUT43bj-bhCBT_xulPytHRO2gppgS/pub?gid=2066680233&single=true&output=csv",
      );
      setVisitPlaces(parseCSV(response.data));
    };
    getVisitPlaces();
  }, []);

  return (
    <Container className="flex flex-wrap justify-between py-[100px] sm:pt-20 pb-32 h-fit bg-silver relative text-xl">
      <div className="w-1/4">
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
      <div className="w-1/4">
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
      <div className="w-1/4">
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

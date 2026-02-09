import { useEffect, useState } from "react";
import Container from "../Container";
import axios from "axios";

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
  const [stayPlaces, setStayPlaces] = useState<CSVRow[]>([])
  // const [eatPlaces, setEatPlaces] = useState<CSVRow[]>([])
  // const [toDoPlaces, setToDoPlaces] = useState<CSVRow[]>([])

  useEffect(() => {
    const getPlacesToStay = async () => {
      const response = await axios.get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTd9onysTjVHPWhbwQ2fWISkmXzkddcjUsEgMSEP9FesYF7Q5PtUT43bj-bhCBT_xulPytHRO2gppgS/pub?output=csv",
      );
      setStayPlaces(parseCSV(response.data));
    };
    getPlacesToStay();
  }, []);

  return (
    <Container className="py-[100px] sm:py-[40px] min-h-[800px] bg-silver relative">
      <h2>Places to Stay</h2>
      {stayPlaces.map(place => (
        <div key={place.name}>{place.name}</div>
      ))}
    </Container>
  );
};

export default PlacesSection;

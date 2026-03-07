import { useEffect, useState } from "react";
import Container from "../Container";
import axios from "axios";
import parseCSV from "../../utils/csv/parseCSV";
import type { CSVRow } from "../../types/CSVtypes";

const PatronSection = () => {
  const [patrons, setPatrons] = useState<CSVRow[]>([]);

  useEffect(() => {
    const getPatrons = async () => {
      const response = await axios.get(import.meta.env.VITE_GSHEET_PATRONS);
      setPatrons(parseCSV(response.data));
    };
    getPatrons();
  }, []);

  return (
    <Container className="pt-[80px] pb-[120px] bg-map-grey">
      <h2 className="text-[44px] font-light text-center sm:text-left pb-10">
        Festival Patrons
      </h2>
      <div className="flex flex-wrap justify-evenly gap-[40px]">
        <p className="flex flex-wrap gap-2">
          {patrons.map((patron, i) => (
            <span className="text-night">
              {patron.name}
              {i !== patrons.length - 1 && ","}
            </span>
          ))}
          <span>and others who wish to remain anonymous</span>
        </p>
      </div>
    </Container>
  );
};

export default PatronSection;

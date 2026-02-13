import { useEffect, useState } from "react";
import Container from "../Container";
import axios from "axios";
import VendorCard from "../VendorCard";

interface Vendor {
  id: number;
  name: string;
  description: string;
  image: string;
}

const FoodVendorSection = () => {
  const [vendors, setVendors] = useState<Vendor[]>([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}api/food_vendors`,
        );
        console.log(response.data);
        setVendors(response.data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };

    getEvents();
  }, []);

  return (
    <Container className="pt-[80px] pb-[120px] bg-map-grey text-night">
      <div className="flex flex-col items-center gap-4 mb-16 text-center">
        <p className="font-thin text-lg">Sample the</p>
        <h2 className="font-medium text-6xl mb-4">Festival Food</h2>
        <hr className="w-1/6 mx-auto" />
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        {vendors.map((vendor) => (
          <VendorCard vendor={vendor} />
        ))}
      </div>
    </Container>
  );
};

export default FoodVendorSection;

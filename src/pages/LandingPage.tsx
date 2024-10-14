import { useEffect, useState } from "react";
import { PoliceCar } from "../types/PoliceCarsTypes";
import Card from "../components/Card";
import Header from "../components/Header";
import CarFilter from "../components/CarFilter";

const LandingPage = () => {
  const [policeCars, setPoliceCars] = useState<PoliceCar[]>([]);
  const [filteredPoliceCars, setFilteredPoliceCars] = useState<PoliceCar[]>([]);

  // Fetch police cars from the URL
  useEffect(() => {
    const fetchPoliceCars = async () => {
      const url = "https://politibiler-case.bks-dev.politiet.no/";
      try {
        const response = await fetch(url); //contains response status code and headers
        const data: PoliceCar[] = await response.json(); // gets body in json format

        // Sort police cars by ID in ascending order
        data.sort((a, b) => parseInt(a.id) - parseInt(b.id));
        setPoliceCars(data);
        console.log(data);
      } catch (error) {
        console.error("Error while fetching police cars", error);
      }
    };

    fetchPoliceCars();
  }, []);

  return (
    <div className="w-full bg-neutral-100 pb-10">
      <Header />
      <CarFilter
        policeCars={policeCars}
        setFilteredPoliceCars={setFilteredPoliceCars}
      />
      <Card filteredPoliceCars={filteredPoliceCars} />
    </div>
  );
};

export default LandingPage;

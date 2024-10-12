import { useEffect, useState } from "react";
import { PoliceCar } from "../types/PoliceCarsTypes";
import Card from "../components/Card";
import Header from "../components/Header";

const LandingPage = () => {
  const [policeCars, setPoliceCars] = useState<PoliceCar[]>([]);

  // Fetch police cars from the URL
  useEffect(() => {
    const fetchPoliceCars = async () => {
      const url = "https://politibiler-case.bks-dev.politiet.no/";
      try {
        const response = await fetch(url);
        const data: PoliceCar[] = await response.json();

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
    <div className="w-full bg-neutral-100">
      <Header />
      <Card policeCars={policeCars} />
    </div>
  );
};

export default LandingPage;

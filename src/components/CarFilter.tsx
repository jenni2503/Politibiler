import { useEffect, useState } from "react";
import { PoliceCar } from "../types/PoliceCarsTypes";

type Props = {
  policeCars: PoliceCar[];
  setFilteredPoliceCars: (cars: PoliceCar[]) => void;
};

const CarFilter = ({ policeCars, setFilteredPoliceCars }: Props) => {
  const [selectedBrand, setSelectedBrand] = useState<string>("All Brand");
  const [selectedStatus, setSelectedStatus] = useState<string>("All Status");

  console.log("Re-render CarFilter");

  // to show all unique brands and status in drop downs
  const allBrands = [...new Set(policeCars.map((car) => car.merke))];
  const allStatus = [...new Set(policeCars.map((car) => car.status))];

  useEffect(() => {
    console.log(`Runs the useEffect when value is ${selectedBrand}`);
    const filteredCars = policeCars.filter((car) => {
      return (
        (selectedBrand === "All Brand" || car.merke === selectedBrand) &&
        (selectedStatus === "All Status" || car.status === selectedStatus)
      );
    });
    setFilteredPoliceCars(filteredCars);
  }, [selectedBrand, selectedStatus, policeCars]);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col sm:items-center sm:flex-row w-5/6 mb-4">
        <label className="font-semibold">Bilmerke:</label>
        <select
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
          className="px-2 py-1 border border-gray-300"
        >
          <option value="All Brand">Alle merker</option>
          {allBrands.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
        <label className="sm:pl-4 font-semibold">Status:</label>
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="px-2 py-1 border border-gray-300"
        >
          <option value="All Status">Alle status</option>
          {allStatus.map((status, index) => (
            <option key={index} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CarFilter;

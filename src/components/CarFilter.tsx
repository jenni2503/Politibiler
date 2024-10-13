import { useEffect, useState } from "react";
import { PoliceCar } from "../types/PoliceCarsTypes";

type Props = {
  policeCars: PoliceCar[];
  setFilteredPoliceCars: (cars: PoliceCar[]) => void;
};

const CarFilter = ({ policeCars, setFilteredPoliceCars }: Props) => {
  const [selectedBrand, setSelectedBrand] = useState<string>("allBrand");
  const [selectedStatus, setSelectedStatus] = useState<string>("allStatus");

  const allBrands = [...new Set(policeCars.map((car) => car.merke))];
  const allStatus = [...new Set(policeCars.map((car) => car.status))];

  useEffect(() => {
    const filteredCars = policeCars.filter((car) => {
      return (
        (selectedBrand === "allBrand" || car.merke === selectedBrand) &&
        (selectedStatus === "allStatus" || car.status === selectedStatus)
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
          <option value="allBrand">Alle merker</option>
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
          <option value="allStatus">Alle status</option>
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

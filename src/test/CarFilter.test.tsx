import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CarFilter from "../components/CarFilter";
import { PoliceCar } from "../types/PoliceCarsTypes";

// Mock data with duplicate car brands
const policeCars: PoliceCar[] = [
  {
    id: "10",
    merke: "Ford",
    modell: "Mondeo",
    årsmodell: 2020,
    regNr: "DK 35318",
    status: "I oppdrag",
    oppdrag: "Aktiv biljakt",
  },
  {
    id: "11",
    merke: "Toyota",
    modell: "Mondeo",
    årsmodell: 2020,
    regNr: "DK 35318",
    status: "I oppdrag",
    oppdrag: "Aktiv biljakt",
  },
  {
    id: "1",
    merke: "Ford",
    modell: "Mondeo",
    årsmodell: 2020,
    regNr: "DK 35318",
    status: "I oppdrag",
    oppdrag: "Aktiv biljakt",
  },
  {
    id: "7",
    merke: "Kia",
    modell: "Mondeo",
    årsmodell: 2020,
    regNr: "DK 35318",
    status: "I oppdrag",
    oppdrag: "Aktiv biljakt",
  },
  {
    id: "6",
    merke: "Mercedes-Benz",
    modell: "Mondeo",
    årsmodell: 2020,
    regNr: "DK 35318",
    status: "I oppdrag",
    oppdrag: "Aktiv biljakt",
  },
  {
    id: "15",
    merke: "Volvo",
    modell: "Mondeo",
    årsmodell: 2020,
    regNr: "DK 35318",
    status: "I oppdrag",
    oppdrag: "Aktiv biljakt",
  },
  {
    id: "3",
    merke: "Audi",
    modell: "Mondeo",
    årsmodell: 2020,
    regNr: "DK 35318",
    status: "I oppdrag",
    oppdrag: "Aktiv biljakt",
  },
  {
    id: "9",
    merke: "Toyota",
    modell: "Mondeo",
    årsmodell: 2020,
    regNr: "DK 35318",
    status: "I oppdrag",
    oppdrag: "Aktiv biljakt",
  },
];

// Test to make sure the drop down is uniuqe
describe("Carfilter", () => {
  it("should render unqiue brands in the dropdown", () => {
    const uniqueBrands = [
      "Ford",
      "Toyota",
      "Mercedes-Benz",
      "Volvo",
      "Audi",
      "Kia",
    ];
    render(
      <CarFilter policeCars={policeCars} setFilteredPoliceCars={() => {}} />
    );

    // Check that each unique brand is in the drop down only once
    uniqueBrands.forEach((brand) => {
      const options = screen.getAllByRole("option", { name: brand });
      expect(options).toHaveLength(1); // Ensure no duplicates
      expect(options[0]).toBeInTheDocument();
      // "Ford"
      // "Toyota"
    });
  });
});

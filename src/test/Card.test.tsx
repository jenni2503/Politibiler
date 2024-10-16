import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from "../components/Card";
import { PoliceCar } from "../types/PoliceCarsTypes";

describe("Card", () => {
  // Test to check if Card component recevies no police cars
  it("should render no cars when filteredPoliceCars array is empty", () => {
    render(<Card filteredPoliceCars={[]} />);
    expect(screen.getByText("No cars found")).toBeInTheDocument();
  });

  // Test to ensure the Card component renders a list of police cars
  it("should render list of cars", () => {
    // Mock data
    const policeCars: PoliceCar[] = [
      {
        id: "5",
        merke: "Volvo",
        modell: "XC70",
        årsmodell: 2022,
        regNr: "DU 24434",
        status: "I oppdrag",
        oppdrag: "Trafikkulykke",
      },
      {
        id: "2",
        merke: "Toyota",
        modell: "Hiace",
        årsmodell: 2016,
        regNr: "DY 33852",
        status: "Tilgjengelig",
        oppdrag: "Patruljerer",
      },
      {
        id: "10",
        merke: "Ford",
        modell: "Mondeo",
        årsmodell: 2020,
        regNr: "DK 35318",
        status: "I oppdrag",
        oppdrag: "Aktiv biljakt",
      },
    ];
    render(<Card filteredPoliceCars={policeCars} />);
    // Checks if car's brand is rendered as heading
    policeCars.forEach((car) => {
      expect(
        screen.getByRole("heading", { name: car.merke })
      ).toBeInTheDocument();
    });
  });
});

import { PoliceCar } from "../types/PoliceCarsTypes";
import UpdateStatus from "./UpdateStatus";

type CardProps = {
  filteredPoliceCars: PoliceCar[];
};

// Gets data and displaying police cars
const Card = ({ filteredPoliceCars }: CardProps) => {
  console.log("Re-render Card");
  return (
    <div className="flex justify-center">
      <div className="w-5/6">
        <div
          className="grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-3 gap-4"
        >
          {filteredPoliceCars.length > 0 ? (
            filteredPoliceCars.map((policeCar) => (
              <div
                key={policeCar.id}
                className="border rounded-lg shadow-lg p-6
               bg-white font-medium"
              >
                <h1 className="mb-2 text-lg lg:text-xl font-bold">
                  {policeCar.merke}
                </h1>
                <p>Modell: {policeCar.modell}</p>
                <p>Årsmodell: {policeCar.årsmodell}</p>
                <p>RegistreringsNR: {policeCar.regNr}</p>
                <UpdateStatus policeCar={policeCar} />
                {/* <p>ID: {policeCar.id}</p> */}
              </div>
            ))
          ) : (
            <h1>No cars found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

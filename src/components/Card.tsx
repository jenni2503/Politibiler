import { PoliceCar } from "../types/PoliceCarsTypes";

type CardProps = {
  policeCars: PoliceCar[];
};

const Card = ({ policeCars }: CardProps) => {
  return (
    <div className="flex justify-center">
      <div className="w-5/6">
        <div
          className="grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-3 gap-4"
        >
          {policeCars.map((policeCar) => (
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
              <p>Registreringsnummer: {policeCar.regNr}</p>
              <p>Status: {policeCar.status}</p>
              {/* <p>ID: {policeCar.id}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
import { useState } from "react";
import { PoliceCar } from "../types/PoliceCarsTypes";

type Props = {
  policeCar: PoliceCar;
};
const UpdateStatus = ({ policeCar }: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [status, setStatus] = useState<string>(policeCar.status);

  // fictional call to backend
  const updateStatus = async (id: string, status: string) => {
    // try {
    //   const response = await fetch(`url/politibiler/${id}`, {
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       status: status,
    //     }),
    //   });
    //   const data = await response.json();
    //   return data;
    // } catch (error) {
    //   console.log("Error while updating status", error);
    // }
    console.log("Status is updated");
  };

  const handleEditClick = () => {
    if (isEditing) {
      // If we are done editing, call updateStatus
      updateStatus(policeCar.id, status);
    }
    // Set to true
    setIsEditing(!isEditing);
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="pl-1 border border-black rounded-sm"
        />
      ) : (
        <p className="inline">Status: {status}</p>
      )}
      <button
        className="ml-2 px-1 border border-slate-950 rounded-sm text-sm font-bold hover:bg-sky-300"
        onClick={handleEditClick}
      >
        {isEditing ? "Ferdig" : "Endre"}
      </button>
    </div>
  );
};

export default UpdateStatus;

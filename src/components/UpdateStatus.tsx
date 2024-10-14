import { useState } from "react";
import { PoliceCar } from "../types/PoliceCarsTypes";

type Props = {
  policeCar: PoliceCar;
};

const UpdateStatus = ({ policeCar }: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newStatus, setNewStatus] = useState<string>(policeCar.status);

  // fictional call to backend
  const updateStatus = async (id: string, newStatus: string) => {
    // try {
    //   const response = await fetch(`url/politibiler/${id}`, {
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       status: newStatus,
    //     }),
    //   });
    //   const data = await response.json();
    //   return data;
    // } catch (error) {
    //   console.log("Error while updating status", error);
    // }
    console.log(
      `Updated the police car with id:${id} with status:${newStatus}`
    );
  };

  const handleEditClick = () => {
    if (isEditing) {
      updateStatus(policeCar.id, newStatus);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={newStatus}
          onChange={(e) => setNewStatus(e.target.value)}
          className="pl-1 border border-black rounded-sm"
        />
      ) : (
        <p className="inline">Status: {newStatus}</p>
      )}
      <button
        className={`ml-2 px-1 border border-slate-950 rounded-sm text-sm font-bold ${
          isEditing ? "hover:bg-green-300" : "hover:bg-sky-300"
        }`}
        onClick={handleEditClick}
      >
        {isEditing ? "Ferdig" : "Endre"}
      </button>
    </div>
  );
};

export default UpdateStatus;

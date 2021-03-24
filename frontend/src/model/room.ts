import React from "react";
import { Resident } from "./types/resident";
import { Room } from "./types/room";

export const useRooms = () => {
  const [roomsIsLoading, setIsLoading] = React.useState<boolean>(false);
  const [rooms, setResidents] = React.useState<Room[]>();

  React.useEffect(() => {
    setResidents([
      {
        room: 3009,
        residents: [{ name: "Katie Koontz", username: "katiejk" }],
      },
      {
        room: 3059,
        residents: [
          { name: "Lonnie Gerol", username: "lontronix" },
          { name: "Kenny Kim", username: "hitchhacker" },
        ],
      },
    ]);
    setIsLoading(false);
  }, []);
  return { roomsIsLoading, rooms };
};

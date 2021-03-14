import React from "react";
import { Member } from "./types/member";

export const useMembers = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [members, setMembers] = React.useState<Member[]>();

  React.useEffect(() => {
    setMembers([
      { name: "Lonnie Gerol", username: "lontronix", points: 3 },
      { name: "Kenny Kim", username: "hitchhacker", points: 5 },
      { name: "Max Meinhold", username: "mom", points: 2 },
      { name: "Harmon Herring", username: "harmon", points: 12 },
    ]);
    setIsLoading(false);
  }, []);
  return { isLoading, members };
};

import React from "react";
import { Timer } from "../Timer/Timer";

export const TimersWall = () => {
  return (
    <div className="timerwall">
      <Timer value="00:00:00" />
      <Timer value="00:10:00" />
      <Timer value="00:20:00" />
      <Timer value="00:30:00" />
      <Timer value="00:40:00" />
      <Timer value="00:50:00" />
    </div>
  );
};

import React, { useState } from "react";
import { Timer, TimerDef } from "../Timer/Timer";
import * as dayjs from "dayjs";
import "./style.css";



export const TimersWall = () => {
  const [timers, setTimers] = useState<TimerDef[]>([]);

  const handleAddTimer = () => {
    setTimers((currentTimers) => [...currentTimers, { addTime: dayjs() }]);
  };

  return (
    <div className="timersWall">
      <div className="timersWallButton">
        <button onClick={handleAddTimer}>Add</button>
      </div>
      <div className="timersWallContainer">
        {timers.map((timer) => {
          return <Timer value={timer} />;
        })}
      </div>
    </div>
  );
};
// 1:43:30
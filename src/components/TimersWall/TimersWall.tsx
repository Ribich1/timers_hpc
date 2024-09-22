import { useState } from "react";
import { TimerCard } from "../Timer/Timer";
import dayjs from "dayjs";
import * as css from "./style.css";
import { generateKey } from "../../utility/generateKey";
import { ITimer } from "../../types";

export const TimersWall = () => {
  const [timers, setTimers] = useState<ITimer[]>([]);

  const handleAddTimer = () => {
    setTimers((currentTimers) => [
      ...currentTimers,
      { addTime: dayjs(), id: generateKey() },
    ]);
  };

  const handlePlay = (timer: ITimer) => {
    console.log(`play ${timer.id}`);
  };

  const handlePause = (timer: ITimer) => {
    console.log(`pause ${timer.id}`);
  };

  const handleDelete = (timer: ITimer) => {
    console.log(`delete ${timer.id}`);
  };

  return (
    <div className={css.timersWall}>
      <div className="timersWallButton">
        <button onClick={handleAddTimer}>Add</button>
      </div>
      <div className={css.timersWallContainer}>
        {timers.map((timer) => {
          return (
            <TimerCard
              key={timer.id}
              value={timer}
              onPlay={() => handlePlay(timer)}
              onPause={() => handlePause(timer)}
              onDelete={() => handleDelete(timer)}
            />
          );
        })}
      </div>
    </div>
  );
};

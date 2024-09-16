import React, { useEffect, useState } from "react";
import "./style.css";
import dayjs from "dayjs";

export interface TimerDef {
  addTime: dayjs.Dayjs;
}

interface TimerProps {
  value: TimerDef;
}

export const Timer = (props: TimerProps) => {
  const { addTime } = props.value;

  const [duration, setDuration] = useState(dayjs.duration(0));

  useEffect(() => {
    setInterval(() => updateDuration(), 1000);
  }, []);

  const updateDuration = () => {
    const currentTime = dayjs();

    const nextDuration = dayjs.duration(currentTime.diff(addTime));
    setDuration(nextDuration);
  };

  const getValue = () => {
    return duration.format("HH:mm:ss");
  };
  

  return (
    <div className="timer">
      <div className="content">{getValue()}</div>
      <div className="button">
        <button>start</button>
        <button>pause</button>
        <button>delete</button>
      </div>
    </div>
  );
};

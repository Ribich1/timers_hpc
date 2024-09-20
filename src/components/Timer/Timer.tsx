import { useEffect, useState } from "react";
import { ITimer } from "../../types";
import "./style.css";

import dayjs from "dayjs";

interface TimerCardProps {
  value: ITimer;
}

export const TimerCard = (props: TimerCardProps) => {
  const { addTime } = props.value;

  const [startTime, setStartTime] = useState(dayjs());
  const [_, update] = useState({});

  useEffect(() => {
    setInterval(() => update({}), 1000);
  }, []);

  const getValue = () => {
    const currentTime = dayjs();

    const duration = dayjs.duration(currentTime.diff(startTime));
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

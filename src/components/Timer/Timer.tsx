import { useEffect, useState } from "react";
import { ITimer } from "../../types";
import * as css from "./style.css";

import dayjs from "dayjs";

interface TimerCardProps {
  value: ITimer;
  onPlay: () => void;
  onPause: () => void;
  onDelete: () => void;
}

export const TimerCard = (props: TimerCardProps) => {
  const { addTime } = props.value;

  const [_, update] = useState({});

  useEffect(() => {
    setInterval(() => update({}), 1000);
  }, []);

  const getValue = () => {
    const currentTime = dayjs();

    const duration = dayjs.duration(currentTime.diff(addTime));
    return duration.format("HH:mm:ss");
  };

  return (
    <div className={css.timer}>
      <div className="content">{getValue()}</div>
      <div className="button">
        <button onClick={props.onPlay}>play</button>
        <button onClick={props.onPause}>pause</button>
        <button onClick={props.onDelete}>delete</button>
      </div>
    </div>
  );
};

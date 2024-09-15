import React from "react";
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
  const display = addTime.format("HH:mm:ss");

  return (
    <div className="timer">
      <div className="content">{display}</div>
      <div className="button">
        <button>start</button>
        <button>pause</button>
        <button>delete</button>
      </div>
    </div>
  );
};

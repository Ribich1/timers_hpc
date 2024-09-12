import React from "react";
import "./style.css";

interface TimerProps {
  value: string;
}

export const Timer = (props: TimerProps) => {
  return (
    <div className="timer">
      <div className="content">{props.value}</div>
      <div className="button">
        <button>start</button>
        <button>pause</button>
        <button>delete</button>
      </div>
    </div>
  );
};

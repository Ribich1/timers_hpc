import React from "react";
import ReactDOM from "react-dom/client";
import { TimersWall } from "./components/TimersWall/TimersWall";

import dayjs from "dayjs";
import duration from "dayjs/plugin/duration.js";

dayjs.extend(duration);

const container = document.getElementById("root");
if (!container) throw new Error("Root is missing");

const root = ReactDOM.createRoot(container);
root.render(<TimersWall />);

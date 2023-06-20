import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";

import "./css/colors.css";
import "./css/fonts.css";

const rootContainer = document.getElementById("root");
const root = createRoot(rootContainer);
root.render(<App />);

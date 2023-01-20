import React from "react";
import ReactDOM from "react-dom/client";
import Calculadora from "./pages/Calculadora";
import "./global.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Calculadora />);

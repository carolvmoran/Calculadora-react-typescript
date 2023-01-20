import React from "react";
import ReactDOM from "react-dom/client";
import Calculadora from "./pages/Calculadora";
import "./styles/global.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Calculadora />);

import React from "react";
import "./Display.css";

interface displayProps {
  value: string;
}

const Display = (props: displayProps) => {
  const { value } = props;
  return (
    <div className="display">
      <div className="display-3d">{value}</div>
    </div>
  );
};

export { Display };

import React from "react";
import "./Button.css";

interface btmProps {
  click: any;
  operation?: any;
  double?: any;
  triple?: any;
  label: string;
}

const Button = (props: btmProps) => {
  const { operation, click, double, triple, label } = props;
  return (
    <button
      onClick={(e) => click && click(label)}
      className={`
                  button
                  ${operation ? "operation" : ""}
                  ${double ? "double" : ""}
                  ${triple ? "triple" : ""}
              `}
    >
      <p className="btn-3d">{label}</p>
    </button>
  );
};

export { Button };

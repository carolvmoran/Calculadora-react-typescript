import React from "react";

interface btmProps {
  click: any;
  label: string;
  estilo: string;
}

const Button = (props: btmProps) => {
  const { estilo, click, label } = props;
  return (
    <button
      onClick={(e) => click && click(label)}
      className={`button button__${estilo}`}
    >
      <p className="button__3d">{label}</p>
    </button>
  );
};

export { Button };

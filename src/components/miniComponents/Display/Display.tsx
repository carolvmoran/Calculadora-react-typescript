import React from "react";

interface displayProps {
  value: string;
  estilo: string;
}

const Display = (props: displayProps) => {
  const { value, estilo } = props;
  return (
    <section className={estilo}>
      <h3 className={`${estilo}__3d`}>{value}</h3>
    </section>
  );
};

export { Display };

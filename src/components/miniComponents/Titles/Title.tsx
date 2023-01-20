import React from "react";

interface titleProps {
  text: string;
}

const Title = (props: titleProps) => {
  const { text } = props;
  return <h1>{text}</h1>;
};

export { Title };

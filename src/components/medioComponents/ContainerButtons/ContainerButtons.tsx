import React from "react";
/* eslint no-eval: 0 */
import { Button } from "../../miniComponents/Buttons/Button";
import "./Button.scss";

interface btnContainerProps {
  clear: any;
  setOperation: any;
  addDigito: any;
}

const ContainerButtons = (props: btnContainerProps) => {
  const { clear, setOperation, addDigito } = props;
  return (
    <>
      <Button label="AC" click={clear} estilo="triple" />
      <Button label="/" click={setOperation} estilo="operation" />
      <Button label="7" click={addDigito} estilo="" />
      <Button label="8" click={addDigito} estilo="" />
      <Button label="9" click={addDigito} estilo="" />
      <Button label="*" click={setOperation} estilo="operation" />
      <Button label="4" click={addDigito} estilo="" />
      <Button label="5" click={addDigito} estilo="" />
      <Button label="6" click={addDigito} estilo="" />
      <Button label="-" click={setOperation} estilo="operation" />
      <Button label="1" click={addDigito} estilo="" />
      <Button label="2" click={addDigito} estilo="" />
      <Button label="3" click={addDigito} estilo="" />
      <Button label="+" click={setOperation} estilo="operation" />
      <Button label="0" click={addDigito} estilo="double" />
      <Button label="." click={addDigito} estilo="" />
      <Button label="=" click={setOperation} estilo="operation" />
    </>
  );
};

export { ContainerButtons };

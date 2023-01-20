import React from "react";
/* eslint no-eval: 0 */
import { Button } from "../../miniComponents/Buttons/Button";

interface btnContainerProps {
  clear: any;
  setOperation: any;
  addDigito: any;
}

const ContainerButtons = (props: btnContainerProps) => {
  const { clear, setOperation, addDigito } = props;
  return (
    <>
      <Button label="AC" click={clear} triple />
      <Button label="/" click={setOperation} operation />
      <Button label="7" click={addDigito} />
      <Button label="8" click={addDigito} />
      <Button label="9" click={addDigito} />
      <Button label="*" click={setOperation} operation />
      <Button label="4" click={addDigito} />
      <Button label="5" click={addDigito} />
      <Button label="6" click={addDigito} />
      <Button label="-" click={setOperation} operation />
      <Button label="1" click={addDigito} />
      <Button label="2" click={addDigito} />
      <Button label="3" click={addDigito} />
      <Button label="+" click={setOperation} operation />
      <Button label="0" click={addDigito} double />
      <Button label="." click={addDigito} />
      <Button label="=" click={setOperation} operation />
    </>
  );
};

export { ContainerButtons };

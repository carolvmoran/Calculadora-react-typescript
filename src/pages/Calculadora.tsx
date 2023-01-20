import React, { Component } from "react";
/* eslint no-eval: 0 */
import { Display } from "../components/miniComponents/Display/Display";
import { Title } from "../components/miniComponents/Titles/Title";
import { ContainerButtons } from "../components/medioComponents/ContainerButtons/ContainerButtons";

import "./Calculadora.scss";

interface calcProps {
  displayValue: string;
  clearDisplay: boolean;
  operation: null;
  values: Array<number>;
  current: number;
}

const initialState: calcProps = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};
export default class Calculadora extends Component {
  state = {
    ...initialState,
  };
  clearMemory = () => {
    this.setState({ ...initialState });
  };

  setOperation = (operation: string) => {
    if (this.state.current === 0) {
      this.setState({
        operation,
        current: 1,
        clearDisplay: true,
      });
    } else {
      const equals = operation === "=";

      const currentOperation = this.state.operation;

      const values = [...this.state.values];
      try {
        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
      } catch (e) {
        values[0] = this.state.values[0];
      }
      values[1] = 0;
      this.setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values,
      });
    }
  };

  addDigito = (n: string) => {
    if (n === "." && this.state.displayValue.includes(".")) {
      return;
    }
    const clearDisplay =
      this.state.displayValue === "0" || this.state.clearDisplay;

    const currentValue = clearDisplay ? "" : this.state.displayValue;

    const displayValue = currentValue + n;
    this.setState({ displayValue, clearDisplay: false });

    if (n !== ".") {
      const i = this.state.current;
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[i] = newValue;
      this.setState({ values });
    }
  };

  render() {
    const addDigito = (n: string) => this.addDigito(n);
    const setOperation = (op: string) => this.setOperation(op);
    return (
      <>
        <Title text="Calculadora"></Title>
        <section className="calculator__3d">
          <div className="calculator">
            <Display estilo="display" value={this.state.displayValue} />
            <ContainerButtons
              clear={() => this.clearMemory()}
              setOperation={setOperation}
              addDigito={addDigito}
            />
          </div>
        </section>
      </>
    );
  }
}

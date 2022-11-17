import React, { Component } from "react";
import './Calculator.css'


import Button from "../components/Button";
import Display from "../components/Display";

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}
export default class Calculator extends Component {
    state = {
        ...initialState
    }

    clearMemory() {
        this.setState({ ...initialState})
    }

    setOperation(operation) {
        if (this.state.current === 0) {
            this.setState( {
                 operation, current: 1, clearDisplay: true
            })
        } else {
            const equals = operation === '='

            const currentOperation = this.state.operation

            const values = [...this.state.values]
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch(e) {
                values[0] = this.state.values[0]
            }
            values[1] = 0
            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    addDigito(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

        const currentValue = clearDisplay ? '' : this.state.displayValue

        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false})

        if (n !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [ ...this.state.values]
            values[i] = newValue
            this.setState({ values })
        }
    }


    render() {
        const addDigito = n => this.addDigito(n)
        const setOperation = op => this.setOperation(op)
        return (
            <div className="calculator-3d">

                <div className="calculator">
                    <Display value={this.state.displayValue}/>
                    <Button label="AC" click={() => this.clearMemory()} triple/>
                    <Button label="/" click={setOperation} operation/>
                    <Button label="7" click={addDigito}/>
                    <Button label="8" click={addDigito}/>
                    <Button label="9" click={addDigito}/>
                    <Button label="*" click={setOperation} operation/>
                    <Button label="4" click={addDigito}/>
                    <Button label="5" click={addDigito}/>
                    <Button label="6" click={addDigito}/>
                    <Button label="-" click={setOperation} operation/>
                    <Button label="1" click={addDigito}/>
                    <Button label="2" click={addDigito}/>
                    <Button label="3" click={addDigito}/>
                    <Button label="+" click={setOperation} operation/>
                    <Button label="0" click={addDigito} double/>
                    <Button label="." click={addDigito}/>
                    <Button label="=" click={setOperation} operation/>
                </div>
            </div>
        )
    }
}
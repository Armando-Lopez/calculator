import React from 'react';
import Button from '../components/Button'
import Display from '../components/Display'

import stringCalculator from 'string-calculator'



class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFormula: "",
            result: 0
        }
        this._getButtonsValues = this._getButtonsValues.bind(this);
        this._showResult = this._showResult.bind(this);
        this._clearDisplay = this._clearDisplay.bind(this);
    }

    _getButtonsValues(e) {
        const { currentFormula } = this.state;
        let value = e.target.innerText;
        let chain = currentFormula;
        if (chain.length === 0 && value === '.') {

            chain = '0.'
        } else {

            chain += value;
        }

        this.setState({
            currentFormula: chain
        });
    }

    _vali
    _showResult() {
        this.setState({
            result: stringCalculator(this.state.currentFormula)
        })
    }

    _clearDisplay() {
        this.setState({
            currentFormula: "",
            result: 0
        });
    }

    render() {
        const { currentFormula, result } = this.state;
        return (
            <div className="calculator">
                <Display currentFormula={currentFormula} result={result} />
                <div className="buttons-container">
                    <Button id="clear" simbol="AC" type="operation" onClick={this._clearDisplay} />
                    <Button id="divide" simbol="/" type="operation" onClick={this._getButtonsValues} />
                    <Button id="multiply" simbol="*" type="operation" onClick={this._getButtonsValues} />
                    <Button id="seven" simbol="7" type="number" onClick={this._getButtonsValues} />
                    <Button id="eight" simbol="8" type="number" onClick={this._getButtonsValues} />
                    <Button id="nine" simbol="9" type="number" onClick={this._getButtonsValues} />
                    <Button id="subtract" simbol="-" type="operation" onClick={this._getButtonsValues} />
                    <Button id="four" simbol="4" type="number" onClick={this._getButtonsValues} />
                    <Button id="five" simbol="5" type="number" onClick={this._getButtonsValues} />
                    <Button id="six" simbol="6" type="number" onClick={this._getButtonsValues} />
                    <Button id="add" simbol="+" type="operation" onClick={this._getButtonsValues} />
                    <Button id="one" simbol="1" type="number" onClick={this._getButtonsValues} />
                    <Button id="two" simbol="2" type="number" onClick={this._getButtonsValues} />
                    <Button id="three" simbol="3" type="number" onClick={this._getButtonsValues} />
                    <Button id="equals" simbol="=" type="equals" onClick={this._showResult} />
                    <Button id="zero" simbol="0" type="number" onClick={this._getButtonsValues} />
                    <Button id="decimal" simbol="." type="number" onClick={this._getButtonsValues} />
                </div>
            </div>
        );
    }
}

export default Calculator;
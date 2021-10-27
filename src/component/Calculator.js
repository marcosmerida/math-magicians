/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
import './calculator.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: null, next: null, operation: null };
    this.CalcNumber = this.CalcNumber.bind(this);
  }
  
  CalcNumber = (event) => {
    const resolved = calculate(this.state, event.target.innerHTML);
    this.setState(resolved);
  };

  render() {
    return (
      <div className="Calculator text-center">
        <div className="row text-white bg-secondary r2 h-100">
          <div className="col-12" id="Result">
            {this.state.total}
            {this.state.operation}
            {this.state.next}
          </div>
        </div>
        <div className="row h-100 r1">
          <div
            className="col-3 border border-white h-100"
            id="button1"
            role="button"
            tabIndex={0}
            onClick={this.CalcNumber}
            onKeyDown={this.CalcNumber}
          >
            AC
          </div>
          <div
            className="col-3 border border-white h-100"
            id="button2"
            role="button"
            tabIndex={0}
            onClick={this.CalcNumber}
            onKeyDown={this.CalcNumber}
          >
            +/-
          </div>
          <div
            className="col-3 border border-white h-100"
            id="button3"
            role="button"
            tabIndex={0}
            onClick={this.CalcNumber}
            onKeyDown={this.CalcNumber}
          >
            %
          </div>
          <div
            className="col-3 border border-white bg-warning h-100"
            id="button4"
            role="button"
            tabIndex={0}
            onClick={this.CalcNumber}
            onKeyDown={this.CalcNumber}
          >
            ÷
          </div>
        </div>
        <div className="row r1 h-100">
          <div
            className="col-3 border border-white h-100"
            id="button5"
            role="button"
            tabIndex={0}
            onClick={this.CalcNumber}
            onKeyDown={this.CalcNumber}
          >
            7
          </div>
          <div
            className="col-3 border border-white h-100"
            id="button6"
            role="button"
            tabIndex={0}
            onClick={this.CalcNumber}
            onKeyDown={this.CalcNumber}
          >
            8
          </div>
          <div
            className="col-3 border border-white h-100"
            id="button7"
            role="button"
            tabIndex={0}
            onClick={this.CalcNumber}
            onKeyDown={this.CalcNumber}
          >
            9
          </div>
          <div
            className="col-3 border border-white bg-warning h-100"
            id="button8"
            role="button"
            tabIndex={0}
            onClick={this.CalcNumber}
            onKeyDown={this.CalcNumber}
          >
            x
          </div>
        </div>
        <div className="row h-100 r1">
          <div
            className="col-3 border border-white h-100"
            id="button9"
            role="button"
            tabIndex={0}
            onClick={this.CalcNumber}
            onKeyDown={this.CalcNumber}
          >
            4
          </div>
          <div
            className="col-3 border border-white h-100"
            id="button10"
            role="button"
            tabIndex={0}
            onClick={this.CalcNumber}
            onKeyDown={this.CalcNumber}
          >
            5
          </div>
          <div
            className="col-3 border border-white h-100"
            id="button11"
            role="button"
            tabIndex={0}
            onClick={this.CalcNumber}
            onKeyDown={this.CalcNumber}
          >
            6
          </div>
          <div
            className="col-3 border border-white bg-warning h-100"
            id="button12"
            role="button"
            tabIndex={0}
            onClick={this.CalcNumber}
            onKeyDown={this.CalcNumber}
          >
            -
          </div>
        </div>
        <div className="row h-100 r1">
          <div
            className="col-3 border border-white h-100"
            id="button13"
            role="button"
            tabIndex={0}
            onClick={this.CalcNumber}
            onKeyDown={this.CalcNumber}
          >
            1
          </div>
          <div
            className="col-3 border border-white h-100"
            id="button14"
            role="button"
            tabIndex={0}
            onClick={this.CalcNumber}
            onKeyDown={this.CalcNumber}
          >
            2
          </div>
          <div
            className="col-3 border border-white h-100"
            id="button15"
            role="button"
            tabIndex={0}
            onClick={this.CalcNumber}
            onKeyDown={this.CalcNumber}
          >
            3
          </div>
          <div
            className="col-3 border border-white bg-warning h-100"
            id="button16"
            role="button"
            tabIndex={0}
            onClick={this.CalcNumber}
            onKeyDown={this.CalcNumber}
          >
            +
          </div>
        </div>
        <div className="row h-100 r1">
          <div
            className="col-6 border border-white h-100"
            id="button17"
            role="button"
            tabIndex={0}
            onClick={this.CalcNumber}
            onKeyDown={this.CalcNumber}
          >
            0
          </div>
          <div
            className="col-3 border border-white h-100"
            id="button18"
            role="button"
            tabIndex={0}
            onClick={this.CalcNumber}
            onKeyDown={this.CalcNumber}
          >
            .
          </div>
          <div
            className="col-3 border border-white bg-warning h-100"
            id="button19"
            role="button"
            tabIndex={0}
            onClick={this.CalcNumber}
            onKeyDown={this.CalcNumber}
          >
            =
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;

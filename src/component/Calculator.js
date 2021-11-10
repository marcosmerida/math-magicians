/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, setObj] = useState({ total: null, next: null, operation: null });
  const { total, next, operation } = obj;

  const CalcNumber = (event) => {
    setObj(calculate(obj, event.target.innerHTML));
  };

  return (
    <div className="row container">
      <div className="col-6">
        <h2>Let's do some math!</h2>
      </div>
      <div className="Calculator text-center col-3">
        <div className="row text-white bg-secondary r2 h-100">
          <div className="col-12" id="Result">
            {total}
            {operation}
            {next}
          </div>
        </div>
        <div className="row h-100 r1">
          <div
            className="col-3 border border-white h-100"
            id="button1"
            role="button"
            tabIndex={0}
            onClick={CalcNumber}
            onKeyDown={CalcNumber}
          >
            AC
          </div>
          <div
            className="col-3 border border-white h-100"
            id="button2"
            role="button"
            tabIndex={0}
            onClick={CalcNumber}
            onKeyDown={CalcNumber}
          >
            +/-
          </div>
          <div
            className="col-3 border border-white h-100"
            id="button3"
            role="button"
            tabIndex={0}
            onClick={CalcNumber}
            onKeyDown={CalcNumber}
          >
            %
          </div>
          <div
            className="col-3 border border-white bg-warning h-100"
            id="button4"
            role="button"
            tabIndex={0}
            onClick={CalcNumber}
            onKeyDown={CalcNumber}
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
            onClick={CalcNumber}
            onKeyDown={CalcNumber}
          >
            7
          </div>
          <div
            className="col-3 border border-white h-100"
            id="button6"
            role="button"
            tabIndex={0}
            onClick={CalcNumber}
            onKeyDown={CalcNumber}
          >
            8
          </div>
          <div
            className="col-3 border border-white h-100"
            id="button7"
            role="button"
            tabIndex={0}
            onClick={CalcNumber}
            onKeyDown={CalcNumber}
          >
            9
          </div>
          <div
            className="col-3 border border-white bg-warning h-100"
            id="button8"
            role="button"
            tabIndex={0}
            onClick={CalcNumber}
            onKeyDown={CalcNumber}
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
            onClick={CalcNumber}
            onKeyDown={CalcNumber}
          >
            4
          </div>
          <div
            className="col-3 border border-white h-100"
            id="button10"
            role="button"
            tabIndex={0}
            onClick={CalcNumber}
            onKeyDown={CalcNumber}
          >
            5
          </div>
          <div
            className="col-3 border border-white h-100"
            id="button11"
            role="button"
            tabIndex={0}
            onClick={CalcNumber}
            onKeyDown={CalcNumber}
          >
            6
          </div>
          <div
            className="col-3 border border-white bg-warning h-100"
            id="button12"
            role="button"
            tabIndex={0}
            onClick={CalcNumber}
            onKeyDown={CalcNumber}
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
            onClick={CalcNumber}
            onKeyDown={CalcNumber}
          >
            1
          </div>
          <div
            className="col-3 border border-white h-100"
            id="button14"
            role="button"
            tabIndex={0}
            onClick={CalcNumber}
            onKeyDown={CalcNumber}
          >
            2
          </div>
          <div
            className="col-3 border border-white h-100"
            id="button15"
            role="button"
            tabIndex={0}
            onClick={CalcNumber}
            onKeyDown={CalcNumber}
          >
            3
          </div>
          <div
            className="col-3 border border-white bg-warning h-100"
            id="button16"
            role="button"
            tabIndex={0}
            onClick={CalcNumber}
            onKeyDown={CalcNumber}
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
            onClick={CalcNumber}
            onKeyDown={CalcNumber}
          >
            0
          </div>
          <div
            className="col-3 border border-white h-100"
            id="button18"
            role="button"
            tabIndex={0}
            onClick={CalcNumber}
            onKeyDown={CalcNumber}
          >
            .
          </div>
          <div
            className="col-3 border border-white bg-warning h-100"
            id="button19"
            role="button"
            tabIndex={0}
            onClick={CalcNumber}
            onKeyDown={CalcNumber}
          >
            =
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

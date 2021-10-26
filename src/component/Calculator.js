import { Component } from 'react';
import './calculator.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Calculator extends Component {
  render() {
    return (
      <div className="Calculator text-center">
        <div className="row text-white bg-secondary r2 h-100">
          <div className="col-12" id="Result">
            <span>0</span>
          </div>
        </div>
        <div className="row h-100 r1">
          <div className="col-3 border border-white">AC</div>
          <div className="col-3 border border-white">+/-</div>
          <div className="col-3 border border-white">%</div>
          <div className="col-3 border border-white bg-warning">÷</div>
        </div>
        <div className="row h-100 r1">
          <div className="col-3 border border-white">7</div>
          <div className="col-3 border border-white">8</div>
          <div className="col-3 border border-white">9</div>
          <div className="col-3 border border-white bg-warning">x</div>
        </div>
        <div className="row h-100 r1">
          <div className="col-3 border border-white">4</div>
          <div className="col-3 border border-white">5</div>
          <div className="col-3 border border-white">6</div>
          <div className="col-3 border border-white bg-warning">-</div>
        </div>
        <div className="row h-100 r1">
          <div className="col-3 border border-white">1</div>
          <div className="col-3 border border-white">2</div>
          <div className="col-3 border border-white">3</div>
          <div className="col-3 border border-white bg-warning">+</div>
        </div>
        <div className="row h-100 r1">
          <div className="col-6 border border-white">0</div>
          <div className="col-3 border border-white">.</div>
          <div className="col-3 border border-white bg-warning">=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;

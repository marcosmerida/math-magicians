import './calculator.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Calculator() {
  return (
    <div className="Calculator text-center">
      <div className="row text-white bg-secondary r2 h-100">
        <div className="col-12" id="Result">
          <span>0</span>
        </div>
      </div>
      <div className="row h-100 r1">
        <div className="col-3 border border-white h-100" id="button1">
          AC
        </div>
        <div className="col-3 border border-white h-100" id="button2">
          +/-
        </div>
        <div className="col-3 border border-white h-100" id="button3">
          %
        </div>
        <div className="col-3 border border-white bg-warning h-100" id="button4">
          ÷
        </div>
      </div>
      <div className="row r1 h-100">
        <div className="col-3 border border-white h-100" id="button5">
          7
        </div>
        <div className="col-3 border border-white h-100" id="button6">
          8
        </div>
        <div className="col-3 border border-white h-100" id="button7">
          9
        </div>
        <div className="col-3 border border-white bg-warning h-100" id="button8">
          x
        </div>
      </div>
      <div className="row h-100 r1">
        <div className="col-3 border border-white h-100" id="button9">
          4
        </div>
        <div className="col-3 border border-white h-100" id="button10">
          5
        </div>
        <div className="col-3 border border-white h-100" id="button11">
          6
        </div>
        <div className="col-3 border border-white bg-warning h-100" id="button12">
          -
        </div>
      </div>
      <div className="row h-100 r1">
        <div className="col-3 border border-white h-100" id="button13">
          1
        </div>
        <div className="col-3 border border-white h-100" id="button14">
          2
        </div>
        <div className="col-3 border border-white h-100" id="button15">
          3
        </div>
        <div className="col-3 border border-white bg-warning h-100" id="button16">
          +
        </div>
      </div>
      <div className="row h-100 r1">
        <div className="col-6 border border-white h-100" id="button17">
          0
        </div>
        <div className="col-3 border border-white h-100" id="button18">
          .
        </div>
        <div className="col-3 border border-white bg-warning h-100" id="button19">
          =
        </div>
      </div>
    </div>
  );
}

export default Calculator;

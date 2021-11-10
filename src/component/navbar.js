import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navfun() {
  return (
    <Navbar className="row border-bottom mb-5">
      <div className="col-9 ">
        <h4>Math Magicians</h4>
      </div>
      <div>
        <ul className="col-4 text-center m-auto">
          <li className="col-3">
            <Link to="/">Home</Link>
          </li>
          <li className="col-3">
            <Link to="/Calculator">Calculator</Link>
          </li>
          <li className="col-3">
            <Link to="/Quote">Quote</Link>
          </li>
        </ul>
      </div>
    </Navbar>
  );
}

export default Navfun;

import "./navbar.css";
import HBLLOGO from "../../assets/images/hbllogo.png";
import { useSelector } from "react-redux";

function Navbar() {
  const amount = useSelector((state) => state.amount);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img src={HBLLOGO} alt="Logo" className="monogram" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
        </ul>
        <button className="btn btn-primary" disabled={true}>
          You Balance: {amount}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
    <Router>
      <header>
        <div className="brand text-center">
          <a href="index-2.html">
            <h1 className="brand__name text-center">SIKKIM JACKPOT</h1>
          </a>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-center align-items-center">
                <ul className="navigation list-unstyled mt-4 d-flex justify-content-between align-items-center">
                  <li className="nav-item">
                    <Link tp="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Home" className="nav-link">
                      Today Results
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/DownloadResults" className="nav-link">
                      Download Results
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      </Router>
    </div>
  );
};

export default Header;

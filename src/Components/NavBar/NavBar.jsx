import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import Goldenbook from '../Goldenbook/Goldenbook';
import Shows from '../Shows/Shows';
import './NavBar.css';

function NavBar() {
  return (
    <Router>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light navResp w-100">
        <Link to="/" className="navbar-brand">
          
          <p><img src="https://img.icons8.com/small/420/circus-tent.png" className="imgStyle" alt="Circus" />Wild Circus</p>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">.</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav nav-tabs">
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <Link to="/shows" className="nav-link">Shows</Link>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <Link to="/goldenbook" className="nav-link">Golden Book</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Route path="/" exact component={Homepage} />
      <Route path="/shows" exact component={Shows} />
      <Route path="/goldenbook" exact component={Goldenbook} />
    </Router>
  )
}

export default NavBar;
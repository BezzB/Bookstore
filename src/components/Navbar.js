import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="nav-bar">
      <div className="nav-con">
        <nav className="nav-link">
          <h1><Link className="logo" to="/">Bookstore</Link></h1>
          <li><Link to="/components/Books">Books</Link></li>
          <li><Link to="/components/Categories">Categories</Link></li>
        </nav>
        <div className="user">
          <img src="./src/img/logo.png" alt="user" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

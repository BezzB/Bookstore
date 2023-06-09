import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navi() {
  return (
    <nav className="nav-container">
      <h1 className="navtitle">
        <Link to="/">BookStore </Link>
      </h1>
      <div className="navlinks">
        <Link to="/">Books</Link>
        <Link to="/categories">Categories</Link>
      </div>
      <div className="icon-imgs">
        <FaUserCircle className="icon-img" />
      </div>
    </nav>
  );
}

export default Navi;

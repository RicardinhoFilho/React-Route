import React from "react";
import {Link} from "react-router-dom"

import "./Nav.css"

function nav() {
  return (
    <nav>
      <h3>Logo</h3>

      <ul className="nav-links">
        <Link to='/about' className="link">
        <li>About</li>
        </Link>
        <Link to='/shop'  className="link">
        <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default nav;

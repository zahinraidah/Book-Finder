/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";


const Navbar = (props) => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper" style={{ backgroundColor: "steelblue" }}>
          <Link to="/" className="brand-logo center" style={{ marginLeft: 20 }}>
            {props.title}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

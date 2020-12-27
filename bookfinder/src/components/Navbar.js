/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";


const Navbar = (props) => {
  return (
    <div>
      <h3 className="ui center aligned block header">
        <Link to={props.link}>
          {props.header}
        </Link>
      </h3>
    </div>
  );
};

export default Navbar;

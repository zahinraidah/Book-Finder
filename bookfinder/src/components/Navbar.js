/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";


const Navbar = (props) => {
  return (
    <div className="ui inverted segment"
      style={{ height: "120px" }}>
      <h3 className="ui center aligned huge header" style={{ marginTop: "10px" }}>
        <Link to={props.link}>
          {props.header}
        </Link>
      </h3>
      <h3 className="ui center aligned header" style={{ marginTop: "5px" }}>
        {props.description}
      </h3>
    </div>
  );
};

export default Navbar;

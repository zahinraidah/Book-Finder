/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import 'react-dropdown/style.css';

const DropdownButton = (props) => {
  return (
    <form onChange={props.handleDropdown}>
      <div class="ui simple selection dropdown"
        style={{ marginLeft: "45%", marginTop: "1%", width: "15%", height: "50%" }}>
        <input type="hidden" name="gender" />
        <i class="dropdown icon"></i>
        <div class="default text">Sort</div>
        <div class="menu">
          <div class="item" data-value="relevance">Relevance</div>
          <div class="item" data-value="newest">Newest</div>
        </div>
      </div>
    </form>
  );
};

export default DropdownButton;
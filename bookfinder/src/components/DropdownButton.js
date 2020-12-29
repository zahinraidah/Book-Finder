/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const DropdownButton = (props) => {
  return (
    <form>
      <select
        className="ui simple dropdown"
        style={{ marginLeft: "48%", marginTop: "1%", marginBottom: "5%", width: "120px", height: "50%" }}
        onChange={props.handleDropdown}
        value={props.order}
      >
        <option value="relevance">Relevance</option>
        <option value="newest" >Newest</option>

      </select >
    </form >
  );
};

export default DropdownButton;

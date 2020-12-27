/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import 'react-dropdown/style.css';

const DropdownButton = (props) => {
  return (
    <form onChange={props.handleSubmit}>
      <select
        className="ui simple dropdown"
        style={{ marginLeft: "48%", marginTop: "1%", marginBottom: "5%", width: "120px", height: "50%" }}
        placeholder={<i class=" dropdown icon">Sort</i>}
        onChange={props.handleDropdown}
        value={props.orderby}
      >
        <option value="relevance">Relevance</option>
        <option value="newest">Newest</option>
      </select >
    </form>
  );
};

export default DropdownButton;
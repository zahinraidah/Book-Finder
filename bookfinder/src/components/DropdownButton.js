/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const DropdownButton = (props) => {
  const options = [
    'A-Z', 'Z-A', 'Newest', 'Oldest'
  ];
  return (
    <div>
      <Dropdown options={options} placeholder="Sort" />
    </div>
  );
};

export default DropdownButton;
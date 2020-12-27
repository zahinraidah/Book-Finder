/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Pagination = (props) => {
  const page_links = [];
  if (props.currentPage == 1) {
    page_links.push(
      <a key={0} className="disabled item">
        <i className="chevron left icon"></i>
      </a>
    );
  } else {
    page_links.push(
      <a
        key={0}
        className="item"
        onClick={() => {
          props.nextPage(props.currentPage - 1);
        }}
      >
        <i className="chevron left icon"></i>
      </a>
    );
  }
  for (let i = 1; i <= props.totalPages; i++) {
    let active = "";
    if (i == props.currentPage) {
      active = "active";
    }
    let className = active + " item"
    page_links.push(
      <a
        key={i}
        className={className}
        onClick={() => {
          props.nextPage(i);
        }}
      >
        {i}
      </a>
    );

  }
  if (props.currentPage == props.totalPages) {
    page_links.push(
      <a key={props.totalPages + 1} className="disabled item">
        <i className="chevron right icon"></i>
      </a>
    );
  } else {
    page_links.push(
      <a
        key={props.totalPages + 1}
        className="item"
        onClick={() => {
          props.nextPage(props.currentPage + 1);
        }}
      >
        <i className="chevron right icon"></i>
      </a>
    );
  }
  return (
    <div
      className="ui pagination menu"
      style={{ marginLeft: "20%", marginBottom: "10%", marginTop: "5%" }}
    >
      {page_links}
    </div>
  );
};

export default Pagination;
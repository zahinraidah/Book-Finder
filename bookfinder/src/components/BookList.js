import React from "react";
import BookCard from "./BookCard";

const BookList = (props) => {
  return (
    <div className="ui grid">
      <div className="three column row">
        {Array.isArray(props.books) ?
          props.books.map((movie, i) => {
            return <BookCard data={movie} key={i} history={JSON.stringify(props.history)} />;
          }) : " "}
      </div>
    </div>
  );
};

export default BookList;
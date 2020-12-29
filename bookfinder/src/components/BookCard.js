/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
const BookCard = (props) => {
  const bookData = props.data.volumeInfo
  const BookTitle = bookData.title;
  const BookAuthor = bookData.authors;

  return (
    <div class="ui raised card" style={{ marginLeft: "10%" }}>
      <div class="image">
        {bookData.imageLinks == undefined ? (
          <img
            class="ui small image"
            src="https://picsum.photos/200/300"
            alt=""
            style={{ width: "100", height: "100" }}
          />
        ) : (
            <img
              src={bookData.imageLinks.thumbnail}
              alt=""
              style={{ width: "100", height: "100" }}
            />
          )}
      </div>
      <div class="content">
        <div class="header">Title: {BookTitle}</div>
        <div class="meta">
          <span class="category"><b>Author(s): {BookAuthor}</b></span>
        </div>
        <div class="description">
          <p></p>
        </div>
      </div>
      <div class="extra content">
        <div class="left floated author">
          <Link to={{
            pathname: "/book/" + props.data.id,
            data: props.data,
          }}
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
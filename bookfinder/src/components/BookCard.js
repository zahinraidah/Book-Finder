import { Link } from "react-router-dom";
/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
const BookCard = (props) => {
  const ImageURL = props.data.volumeInfo.imageLinks.thumbnail;
  const BookTitle = props.data.volumeInfo.title;
  const BookAuthor = props.data.volumeInfo.authors;
  return (
    <div class="col s12 m4">
      <div class="card">
        <div class="card-image">
          {ImageURL == undefined ? (
            <img
              src="https://picsum.photos/200/300"
              alt=""
              style={{ width: "100", height: "200" }}
            />
          ) : (
              <img
                src={ImageURL}
                alt=""
                style={{ width: "100", height: "200" }}
              />
            )}

          <span class="card-title">{BookTitle}</span>
        </div>
        <div class="card-content">{BookAuthor}</div>
        <div class="card-action">
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

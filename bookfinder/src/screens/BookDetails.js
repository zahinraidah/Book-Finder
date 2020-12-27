/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { getBookDetails } from "../api/GoogleBooks";
import Navbar from "../components/Navbar"

const BookDetails = (props) => {
    const [currentBook, setCurrentBook] = useState({});
    const [ImageURL, setImageURL] = useState("");

    useEffect(() => {
        getBookDetails(props.location.data.id, setCurrentBook, setImageURL);
    }, []);
    const header = "Details of " + currentBook.title;

    return (
        <div class="ui items" style={{ marginLeft: "5%", marginRight: "5%" }}>
            <Navbar link={"/book/" + props.location.data.id}
                header={header}
            />
            <div class="item">
                <div class="image">
                    {ImageURL !== "" ? (
                        <img
                            src={ImageURL}
                            alt=""
                            style={{ width: "100", height: "200" }}
                        />
                    ) : (
                            <img
                                src="https://picsum.photos/300/600"
                                alt=""
                                style={{ width: "100", height: "200" }}
                            />
                        )}
                </div>
                <div class="content">
                    <a class="header">{currentBook.title}</a>
                    <div class="meta">
                        <span>Author(s): <br /> {currentBook.authors}</span>
                    </div>
                    <div class="description">
                        <p>{currentBook.description}</p>
                    </div>
                    <div class="extra">
                        <b>Publisher: {currentBook.publisher}</b><br />
                        <b>Published at: {currentBook.publishedDate}</b><br />
                        <b>Pages: {currentBook.pageCount}</b><br />
                        <b>Average Rating: {currentBook.averageRating}</b><br />
                    </div>
                    <div class="left floated author">
                        <button class="ui secondary button"
                            style={{ marginTop: "3%" }}
                            onClick={() => props.history.goBack()}>
                            Go to search page!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BookDetails;
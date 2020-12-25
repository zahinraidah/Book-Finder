/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { getBookDetails } from "./api/GoogleBooks";
import { useHistory } from "react-router-dom";

const BookDetails = (props) => {
    const [currentBook, setCurrentBook] = useState({});
    const [ImageURL, setImageURL] = useState("");
    const usehistory = useHistory();
    useEffect(() => {
        getBookDetails(props.location.data.id, setCurrentBook, setImageURL);
    }, []);

    return (
        <div>
            <div class="row">
                <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">
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
                            <span class="card-title">{currentBook.title}</span>
                        </div>
                        <div class="card-content">
                            <p>Published: {currentBook.publishedDate}</p>
                            <br />
                            <h5><b>Overview: </b></h5>
                            <p>{currentBook.description}</p>
                        </div>
                        <div class="card-action">
                            <button onClick={() => usehistory.goBack()}>
                                Go to search page!
              </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BookDetails;

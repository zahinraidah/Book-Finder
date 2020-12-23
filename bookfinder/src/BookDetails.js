/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { getBookDetails } from "./api/GoogleBooks";
import { useHistory } from "react-router-dom";


const BookDetails = (props) => {
    const [currentBook, setCurrentBook] = useState({});

    console.log(props.location.data.id)
    useEffect(() => {
        getBookDetails(props.location.data.id, setCurrentBook);
    }, []);

    console.log(currentBook);
    const ImageURL = currentBook.imageLinks.thumbnail;
    return (
        <div>
            <div class="row">
                <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">
                            {ImageURL != null ? (
                                <img
                                    src={ImageURL}
                                    alt=""
                                    style={{ width: "300", height: "600" }}
                                />
                            ) : (
                                    <img
                                        src="https://picsum.photos/300/600"
                                        alt=""
                                        style={{ width: "300", height: "600" }}
                                    />
                                )}
                            <span class="card-title">{currentBook.volumeInfo.title}</span>
                        </div>
                        <div class="card-content">
                            <p>{currentBook.volumeInfo.description}</p>
                        </div>
                        <div class="card-action">
                            <button onClick={() => useHistory.goBack()}>Go to search page!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import Searchbar from "../components/Searchbar";
import BookList from "../components/BookList";
import { getBooksByTerm } from "../api/GoogleBooks";
import Pagination from "../components/Pagination";
import DropdownButton from "../components/DropdownButton";
import Navbar from "../components/Navbar";

const BookHome = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(props.history.location.state == undefined ? 1 : props.history.location.state.page);
    const [totalPages, setTotalPages] = useState(0);
    const [orderBy, setOrderBy] = useState(props.history.location.state == undefined ? "relevance" : props.history.location.state.orderBy);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await getBooksByTerm(searchTerm, setBooks, currentPage, setTotalPages, orderBy);
    };

    useEffect(async () => {
        if (searchTerm != null) {
            await nextPage(currentPage);
        }
    }, []);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const handleDropdown = (event) => {
        setOrderBy(event.target.value);
        console.log(orderBy);
    };
    const nextPage = async (page_number) => {
        let startIndex = 20 * (page_number - 1);
        setCurrentPage(page_number);
        props.history.push({ page_number: page_number, orderBy: orderBy });
        await getBooksByTerm(searchTerm, setBooks, startIndex, setTotalPages);
    };

    return (
        <div>
            <Navbar header="Welcome to Book Finder"
                link="/"
                description="Type the book title in search bar and press enter"
            />
            <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} />
            <DropdownButton handleDropdown={handleDropdown} />
            <BookList books={books} />
            {totalPages > 1 ? (
                <Pagination
                    nextPage={nextPage}
                    currentPage={currentPage}
                    totalPages={totalPages}
                />
            ) : (
                    ""
                )}
        </div>
    );
};

export default BookHome;

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
import { withRouter } from "react-router-dom";

const BookHome = (props) => {
    const [searchTerm, setSearchTerm] = useState(props.history.location.state == undefined ? "" : props.history.location.state.searchTerm);
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(props.history.location.state == undefined ? 1 : props.history.location.state.page_number);
    const [totalPages, setTotalPages] = useState(0);
    const [orderBy, setOrderBy] = useState(props.history.location.state == undefined ? "relevance" : props.history.location.state.orderBy);
    const handleSubmit = async (event) => {
        event.preventDefault();
        props.history.push('/', { searchTerm: searchTerm, page_number: 1, orderBy: orderBy })
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

    const handleDropdown = async (event) => {
        setOrderBy(event.target.value);
        console.log(orderBy)
        await getBooksByTerm(searchTerm, setBooks, currentPage, setTotalPages, orderBy);
    };
    const nextPage = async (page_number) => {
        let startIndex = 20 * (page_number - 1);
        setCurrentPage(page_number)
        props.history.push('/', { searchTerm: searchTerm, page_number: page_number, orderBy: orderBy })
        await getBooksByTerm(searchTerm, setBooks, startIndex, setTotalPages);
    };
    return (
        <div>
            <Navbar header="Welcome to Book Finder"
                link="/"
                description="Type the book title in search bar and press enter"
            />
            <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} />
            <DropdownButton handleDropdown={handleDropdown}
                order={orderBy} />
            <BookList books={books}
                history={props.history}
            />
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

export default withRouter(BookHome);

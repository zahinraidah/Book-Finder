/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Searchbar from "../components/Searchbar";
import BookList from "../components/BookList";
import { getBooksByTerm } from "../api/GoogleBooks";
import Pagination from "../components/Pagination";
import DropdownButton from "../components/DropdownButton";

const BookHome = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [orderBy, setOrderBy] = useState("relevance");

    const handleSubmit = async (event) => {
        event.preventDefault();
        await getBooksByTerm(searchTerm, setBooks, currentPage, setTotalPages, orderBy);
    };

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
        await getBooksByTerm(searchTerm, setBooks, startIndex, setTotalPages);
    };

    return (
        <div>
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

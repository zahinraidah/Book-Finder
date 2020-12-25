import axios from "axios";

const BookDB = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/",
});

const sortAtoZ = (SearchTerm, setBooks, page_number, setTotalPages) => {
    BookDB.get("/volumes/", {
        params: {
            q: SearchTerm,
            startIndex: page_number,
            maxResults: 24,
        },
    }).then((response) => {
        response.data.sort(function (a, b) {
            var textA = a.volumeInfo.title.toUpperCase();
            var textB = b.volumeInfo.title.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        setBooks(response.data.items);
        setTotalPages(Math.ceil(response.data.totalItems / 24));
    });
};

export { sortAtoZ };
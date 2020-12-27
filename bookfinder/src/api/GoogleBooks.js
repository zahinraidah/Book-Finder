import axios from "axios";

const BookDB = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/",
});

const getBooksByTerm = (SearchTerm, setBooks, page_number, setTotalPages, orderBy) => {
  BookDB.get("/volumes/", {
    params: {
      q: SearchTerm,
      startIndex: page_number,
      maxResults: 24,
      orderBy: orderBy
    },
  }).then((response) => {
    console.log(response.data);
    setBooks(response.data.items);
    setTotalPages(Math.ceil(response.data.totalItems / 24));
  });
};

const getBookDetails = (bookID, setCurrentBook, setImageURL) => {
  console.log(bookID);
  BookDB.get("/volumes/" + bookID, {}).then((response) => {
    console.log(response.data.volumeInfo);
    setCurrentBook(response.data.volumeInfo);
    setImageURL(response.data.volumeInfo.imageLinks.thumbnail);
    console.log(response.data.volumeInfo.title);
    console.log(response.data.volumeInfo.description);
  });
};

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

export { getBooksByTerm, getBookDetails, sortAtoZ };
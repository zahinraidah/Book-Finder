import axios from "axios";

const BookDB = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/",
});

const getBooksByTerm = (SearchTerm, setBooks, page_number, setTotalPages, orderBy) => {
  BookDB.get("/volumes/", {
    params: {
      q: SearchTerm,
      startIndex: page_number,
      maxResults: 18,
      orderBy: orderBy
    },
  }).then((response) => {
    let maxData = 0;
    if (response.data.totalItems > maxData) { maxData = response.data.totalItems }
    setBooks(response.data.items);
    console.log("response.data.totalItems: " + response.data.totalItems);
    setTotalPages(Math.ceil(maxData / 18));
  });
};

const getBookDetails = (bookID, setCurrentBook, setImageURL) => {
  console.log(bookID);
  BookDB.get("/volumes/" + bookID, {}).then((response) => {
    setCurrentBook(response.data.volumeInfo);
    setImageURL(response.data.volumeInfo.imageLinks.thumbnail);
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
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { BrowserRouter, Route, useHistory } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookDetails from "./screens/BookDetails";
import BookHome from "./screens/BookHome";

const App = () => {
  const searchData = useHistory();
  return (
    <BrowserRouter searchData={searchData}>
      <Navbar header="Welcome to Book Finder"
        link="/"
        description="Type the book title in search bar and press enter"
      />
      <div>
        <Route path="/" exact component={BookHome} />
        <Route path="/book/:id" exact component={BookDetails} />
      </div>
    </BrowserRouter>
  );


};

export default App;

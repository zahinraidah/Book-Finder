/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { BrowserRouter, Route, useHistory } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookDetails from "./screens/BookDetails";
import BookHome from "./screens/BookHome";

const App = () => {
  const history = useHistory();
  return (
    <BrowserRouter history={history}>
      <div>
        <Route path="/" exact component={BookHome} />
        <Route path="/book/:id" exact component={BookDetails} />
      </div>
    </BrowserRouter>
  );


};

export default App;

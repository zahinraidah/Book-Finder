/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import BookDetails from "./BookDetails";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar title="Welcome to Book Finder" />
      <div>
        <Route path="/" exact component={App} />
        <Route path="/book/:id" exact component={BookDetails} />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

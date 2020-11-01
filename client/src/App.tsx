import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Searchbar from "./components/Searchbar";
import Navbar from "./components/Navbar";
import MainSearch from "./components/MainSearch";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <MainSearch></MainSearch>
    </div>
  );
}

export default App;

import React from "react";

import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import EditMovie from "./EditMovie";
import { Routes, Route } from "react-router-dom";
import "../App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
const App = () => {
  return (
    <div className="container">
      <div>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" index element={<MovieList />} />
        <Route path="/add" element={<AddMovie />} />
        <Route path="/edit/:id" element={<EditMovie />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;

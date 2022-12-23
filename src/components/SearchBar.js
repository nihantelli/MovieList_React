import React from "react";
import { useMovie } from "../context/MovieContext";
function SearchBar() {
  const { searchMovie } = useMovie();
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="form-row row my-3">
          <div className="col-12">
            <input
              onChange={searchMovie}
              type="text"
              className="form-control"
              placeholder="Search a Movie"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;

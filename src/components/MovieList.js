import React from "react";
import { Link } from "react-router-dom";
import { useMovie } from "../context/MovieContext";
import SearchBar from "./SearchBar";
const MovieList = () => {
  const { deleteMovie, filteredMovies } = useMovie();
  const truncateOverview = (string, maxLength) => {
    if (!string) return null;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)}...`;
  };
  return (
    <>
      <ul className="navbar-nav row">
        <li className="nav-link search col-lg-12 p-3">
          <SearchBar />
        </li>
      </ul>

      <div className="row">
        {filteredMovies.map((mov) => (
          <div className="col-lg-4" key={mov.id}>
            <div className="card shadow-lg">
              <img
                src={mov.imageUrl}
                className="card-img-top"
                alt="Sample Movie"
              />
              <div className="card-title">{mov.name}</div>
              <p className="card-text text-muted">
                {truncateOverview(mov.overview, 200)}
              </p>
              <div className="card-footer text-muted d-flex justify-content-between align-items-center">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => deleteMovie(mov.id)}
                >
                  DELETE
                </button>
                <Link
                  to={`edit/${mov.id}`}
                  type="button"
                  className="btn btn-sm btn-outline-success"
                >
                  Edit
                </Link>
                <h2>
                  <span className="badge-info">{mov.rating}</span>
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieList;

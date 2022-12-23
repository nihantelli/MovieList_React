import React from "react";
import serialize from "form-serialize";
import { useNavigate } from "react-router-dom";
import { useMovie } from "../context/MovieContext";
function AddMovie() {
  const { addMovieList } = useMovie();
  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newMovie = serialize(e.target, { hash: true });
    addMovieList(newMovie);
    navigate("/");
  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <div className="form-row">
        <input
          className="form-control form-control-lg mt-5 mb-5"
          id="disabledInput"
          type="text"
          placeholder="Fill The Form To Add A Movie.."
          disabled
        />
      </div>
      <div className="row">
        <div className="form-group col-md-12">
          <label htmlFor="inputName">Name</label>
          <input type="text" className="form-control" name="name" />
        </div>
        <div className="form-group col-md-12 mt-3">
          <label htmlFor="inputRating">Rating</label>
          <input type="text" className="form-control" name="rating" />
          <div className="form-group col-md-12 mt-3">
            <label htmlFor="inputImage">Image URL</label>
            <input type="text" className="form-control" name="imageUrl" />
          </div>
          <div className="form-group col-md-12 mt-3">
            <label htmlFor="overviewTextarea">Overview</label>
            <textarea className="form-control" name="overview"></textarea>
          </div>
          <input
            type="submit"
            className="btn mt-5"
            style={{
              backgroundColor: "rgb(231, 96, 62)",
              color: "#fff",
              fontWeight: "bold",
            }}
            value="Add Movie"
          />
        </div>
      </div>
    </form>
  );
}

export default AddMovie;

import React, { useState, useEffect } from "react";
import axios from "axios";
import serialize from "form-serialize";
import { useNavigate, useParams } from "react-router-dom";
import { useMovie } from "../context/MovieContext";
function EditMovie() {
  const { onEditMovie } = useMovie();
  const navigate = useNavigate();
  const [EditMovie, setEditMovie] = useState({
    name: "",
    rating: "",
    overview: "",
    imageUrl: "",
  });
  const { id } = useParams();
  const onInputChange = (e) => {
    setEditMovie(e.target.value);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:3003/movie/${id}`)
      .then((res) => setEditMovie(res.data));
  }, [id]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updatedMovie = serialize(e.target, { hash: true });
    onEditMovie(id, updatedMovie);
    navigate("/");
  };
  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <div className="form-row">
        <input
          className="form-control form-control-lg mt-5 mb-3"
          id="disabledInput"
          type="text"
          placeholder="Fill The Form To Edit A Movie.."
          disabled
        />
      </div>
      <div className="row">
        <div className="form-group col-md-12 mt-5">
          <label htmlFor="inputName">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={EditMovie.name}
            onChange={onInputChange}
          />
        </div>
        <div className="form-group col-md-12 mt-4">
          <label htmlFor="inputRating">Rating</label>
          <input
            type="text"
            className="form-control"
            name="rating"
            value={EditMovie.rating}
            onChange={onInputChange}
          />
        </div>

        <div className="form-group col-md-12 mt-4">
          <label htmlFor="inputImage">Image Url</label>
          <input
            type="text"
            className="form-control"
            name="imageUrl"
            value={EditMovie.imageUrl}
            onChange={onInputChange}
          />
        </div>

        <div className="form-group col-md-12 mt-4">
          <label htmlFor="overviewTextarea">Overview</label>
          <textarea
            className="form-control"
            name="overview"
            value={EditMovie.overview}
            onChange={onInputChange}
          ></textarea>
        </div>
      </div>
      <input
        type="submit"
        className="btn mt-5"
        style={{
          backgroundColor: "rgba(84, 107, 66, 0.842)",
          color: "#fff",
          fontWeight: "bold",
        }}
        value="Edit Movie"
      />
    </form>
  );
}

export default EditMovie;

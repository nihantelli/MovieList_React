import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
const MovieContext = createContext();
export const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3003/movie")
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err));
  }, []);
  const [search, setSearch] = useState("");
  const searchMovie = (event) => {
    setSearch(event.target.value);
  };
  const filteredMovies = movies
    .filter((movie) => {
      return movie.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    })
    .sort((a, b) => {
      return a.rating < b.rating ? 1 : -1;
    });

  const addMovieList = (movie) => {
    axios
      .post("http://localhost:3003/movie/", movie)
      .then(setMovies(...movies, movie));
  };
  const onEditMovie = (id, updatedMovie) => {
    axios.put(`http://localhost:3003/movie/${id}`, updatedMovie);
  };
  const deleteMovie = (id) => {
    axios.delete(`http://localhost:3003/movie/${id}`);
    const newMovieList = movies.filter((m) => m.id !== id);
    setMovies(newMovieList);
  };
  return (
    <MovieContext.Provider
      value={{
        searchMovie,
        addMovieList,
        onEditMovie,
        deleteMovie,
        filteredMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
export const useMovie = () => {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error("MovieContext is not defined");
  }
  return context;
};
export default MovieContextProvider;

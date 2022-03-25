import { useState } from "react";
import { Link } from "react-router-dom";
import getMovies from "../lib/services/movieService";
import Movie from "./Movie";

const Movies = ({ movie, setMovie }) => {
  const fetchMovies = async () => {
    const data = await getMovies();
    setMovie(data);
  };
  return (
    <>
      <h1>Movies Page</h1>

      {movie?.length > 0
        ? movie.map((film) => {
            const { actor, title, slug, poster, _id } = film;
            console.log(poster?.asset.url);
            return (
              <article key={title}>
                <img src={poster?.asset.url} alt='image not found' />
                <h2>Movie title: {title}</h2>
                <p>Actor: {actor}</p>
                <Link to={slug}>Read more about Movie here</Link>
              </article>
            );
          })
        : null}
      <button type="button" onClick={fetchMovies}>
        Get Movie from Sanity
      </button>
    </>
  );
};

export default Movies;

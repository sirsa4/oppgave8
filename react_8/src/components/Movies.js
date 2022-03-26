import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getMovies from "../lib/services/movieService";
import Movie from "./Movie";
import { changeTheme } from "../styled/theme";

const Movies = ({ movie, setMovie }) => {
  const fetchMovies = async () => {
    const data = await getMovies();
    setMovie(data);
  };

  useEffect(()=>{
    fetchMovies();
  },[]);
  return (
    <>
      {movie?.length > 0
        ? movie.map((film) => {
            const { actor, title, slug, poster, _id } = film;
            console.log(film);
            return (
              <article key={title} className="bg-slate-100 gap-2">
                <img src={poster?.asset.url} alt='image not found' 
                />
                <h2>Movie title: {title}</h2>
                <p>Actor: {actor}</p>
                <Link to={slug}>Read more about Movie here</Link>
              </article>
            );
          })
        : null}
   {/*    <button type="button" onClick={fetchMovies}>
        Get Movie from Sanity
      </button> */}
    </>
  );
};

export default Movies;

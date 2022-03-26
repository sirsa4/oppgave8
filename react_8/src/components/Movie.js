import { Link, useParams } from "react-router-dom";

const Movie = ({ title, actor, movie }) => {
  const { slug } = useParams();

  const singleMovie = movie.find((film) => film.slug === slug);
  console.log(singleMovie);
  return (
    <>
      <article>
        <img src={singleMovie.poster?.asset.url} alt="image not found" />
        <h2>Movie: {singleMovie.title}</h2>
        <p>Plot: {singleMovie.plot}</p>
        <button type="button">
          <Link to="/movies">Back to Movies page</Link>
        </button>
      </article>
    </>
  );
};

export default Movie;

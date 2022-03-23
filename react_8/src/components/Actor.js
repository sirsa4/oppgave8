import { Link, useParams } from "react-router-dom";
const Actor = ({ actors, setActors }) => {
  const { name } = useParams();
  /*  console.log(slug); */

  const actor = actors.find((person) => person.slug === name);

  console.log(actor);
  return (
    <>
      <article>
        <h1>Actor: {actor.fullname}</h1>
        <p>Story: {actor.story}</p>
        <button type="button">
          <Link to="/movies">Back to actor page</Link>
        </button>
      </article>
    </>
  );
};

export default Actor;

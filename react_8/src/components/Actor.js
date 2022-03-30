import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getBySlug } from "../lib/services/movieService";

const Actor = ({ oneActor, setOneActor }) => {
  const { name } = useParams();
  /*  console.log(slug); */

  /* const actor = actors.find((person) => person.slug === name); */
  const getSlug = async () => {
    const slug = `${name}`;
    const data = await getBySlug(slug);
    setOneActor(data);
    console.log(data?.relatedMovies);
    console.log(oneActor);
  };

  console.log(oneActor);
  useEffect(() => {
    getSlug();
    /*  const getSlug2 = async () =>{
    const slug = `${name}`;
    const data = await getBySlug(slug);
    setActor(data);
    console.log(data);
}
getSlug2() */
  }, []);

  return (
    <>
      {/* <article>
        <img src={actor?.img.asset.url} alt="Image not found!" />
        <h1>Actor: {actor.fullname}</h1>
        <p>Story: {actor.story}</p>
        <button type="button">
          <Link to="/movies">Back to actor page</Link>
        </button>
      </article> */}
      {/*   <button type='button' onClick={getSlug}>Get Data</button> */}
      {oneActor?.length > 0
        ? oneActor.map((person) => {
            const { _id, fullname, story, img, relatedMovies } = person;
            return (
              <article key={_id}>
                <img src={img?.asset.url} alt="image not found" />
                <h2> Actor: {fullname}</h2>
                <h3>Appears in:</h3>
                <div className="appears">
                  {relatedMovies.map((data) => {
                    return <p key={data.title}>{data.title}</p>;
                  })}
                </div>
                <section>
                  <h3>Bio</h3>
                  <div>
                  <p>{story}</p>
                  </div>
                </section>
                <Link to="/actors">Back to actor page</Link>
              </article>
            );
          })
        : console.log(`not found`)}
    </>
  );
};

export default Actor;

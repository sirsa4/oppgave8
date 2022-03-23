import client from "../client";


const movies = `
title,
plot,
"slug": slug.current,
"actor": actor->name.current,
`
const actors = `
fullname,
story,
"slug": name.current,
"actor": actor->name.current,
`

const getMovies = async()=>{
    const data = await client.fetch(`*[_type == "movie"]{${movies}}`);
   /*  const [movie, actor ] = await Promise.all([client.fetch(`*[_type == "movie"]{${movies}}`), client.fetch(`*[_type == "actor"]{${actors}}`)]); */

   /* const [film, actor] = await Promise.all([client.fetch(`*[_type == "movie"]{${movies}}`), client.fetch(`*[_type == "actor"]{${actors}}`)]) */
    /* console.log(film); 
    console.log(actor); */
    console.log(data);
    return data;
}

export const getActor = async()=>{
    const data = await client.fetch(`*[_type == "actor"]{${actors}}`);
   return data;
}

export default getMovies;
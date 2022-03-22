import client from "../client";

const fields = `
title,
"slug": name.current,
"actor": actor->name.current,
`

const getMovies = async()=>{
    const data = await client.fetch(`*[_type == "movie"]{${fields}}`);
    console.log(data); 
}

export default getMovies;
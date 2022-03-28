import client from "../client";


const movies = `
title,
plot,
'poster': poster{asset->{url}},
_type,
"slug": slug.current,
"actor": actor->name.current,
`
const actors = `
fullname,
story,
"slug": name.current,
"movies": movies->slug.current,

"img": img{asset->{url}}
`

const getMovies = async()=>{
    const data = await client.fetch(`*[_type == "movie"]{${movies}}`);
   /*  const [movie, actor ] = await Promise.all([client.fetch(`*[_type == "movie"]{${movies}}`), client.fetch(`*[_type == "actor"]{${actors}}`)]); */

   /* const [film, actor] = await Promise.all([client.fetch(`*[_type == "movie"]{${movies}}`), client.fetch(`*[_type == "actor"]{${actors}}`)]) */
    /* console.log(film); 
    console.log(actor); */
   /*  console.log(data); */
    return data;
}

export const getActor = async()=>{
    const data = await client.fetch(`*[_type == "actor"]{${actors}}`);
   return data;
}
export const getBySlug = async(slug)=>{
    const data = await client.fetch(`*[_type=="actor" && name.current == $slug]{
        fullname,
        _id,
        story,
        "img": img{asset->{url}},
        "relatedMovies": *[_type=='movie' && references(^._id)]{ 
            title,
            slug,

          }
      }`,{slug});
   return data;
}
export const getActors = async(slug)=>{
    const data = await client.fetch(`*[_type=="actor" && slug.current == $slug]{
       title,
       'poster': poster{asset->{url}},
        "relatedMovies": *[_type=='actor' && references(^._id)]{ 
            title,
            slug,

          }
      }`,{slug});
   return data;
}

export default getMovies;
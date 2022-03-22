import {useState} from 'react';
import getMovies from '../lib/services/movies';

const fetchMovies = ()=>{
    getMovies();
}

const Movies = () => {
    const [movies, setMovies] = useState([]);
    return ( 
        <>
        <h1>Movies Page</h1>
        <button type='button' onClick={fetchMovies}>Get Movie from Sanity</button>
        </>
     );
}
 
export default Movies;
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Actor from "./components/Actor";
import Actors from "./components/Actors";
import Home from "./components/Home";
import Movie from "./components/Movie";
import Movies from "./components/Movies";
import Navigation from "./components/Navigation";

function App() {
  //state to store movies data from sanity
  const [movie, setMovie] = useState("");

  //state to store actors data from sanity
  const [actors, setActors] = useState("");

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies">
          <Route index element={<Movies movie={movie} setMovie={setMovie}/>} />
          <Route path=":slug" element={<Movie movie={movie}/>} />
        </Route>
        <Route path="actors">
          <Route
            index
            element={<Actors actors={actors} setActors={setActors} />}
          />
          <Route
            path=":name"
            element={<Actor actors={actors} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Actor from "./components/Actor";
import Actors from "./components/Actors";
import Home from "./components/Home";
import Movie from "./components/Movie";
import Movies from "./components/Movies";
import Navigation from "./components/Navigation";
import {ThemeProvider} from 'styled-components';
import Layout from "./styled/Layout";
import { changeTheme, dark,light } from "./styled/theme";
import { Global } from "./styled/Global";
import Footer from "./components/Footer";


function App() {
  //theme state
  const [theme, setTheme] = useState('light');
  //state to store movies data from sanity
  const [movie, setMovie] = useState("");

  //state to store actors data from sanity
  const [actors, setActors] = useState("");

  
console.log(theme);

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
    <Global/>
    <div className="App">
    <Navigation />
    <button className="theme" type="button" onClick={()=>changeTheme(theme,setTheme)}>Change theme</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Layout/>}>
          <Route index element={<Movies movie={movie} setMovie={setMovie}/>} />
          <Route path=":slug" element={<Movie movie={movie}/>} />
        </Route>
        <Route path="actors" element={<Layout/>}>
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
      <Footer/>
    </div>
    </ThemeProvider>
  );
}

export default App;

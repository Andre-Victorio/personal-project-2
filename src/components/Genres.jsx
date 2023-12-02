import "./Genres.css";
import Axios from "axios";
import {useEffect, useState} from "react";
import RowContainer from "./RowContainer.jsx";
import Footer from "./Footer.jsx"
const Genres = () =>{
  const [movies, setMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [newMovies, setNewMovies] = useState([]);

  useEffect(()=>{
    fetchMovies();
  },[]);

  //fetch movies from tmdb; stays here
  const fetchMovies= () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = 'https://api.themoviedb.org/3';
    Axios.get(`${url}/movie/popular`, {
      params:{
        api_key: apiKey,
      },
    }).then(response =>{
      setMovies(response.data.results);
    });
    Axios.get(`${url}/discover/movie`, {
      params:{
        api_key: apiKey,
        with_genres:28,
      },
    }).then(response =>{
      console.log(response.data.results);
      setActionMovies(response.data.results);
    });
    Axios.get(`${url}/movie/now_playing`, {
      params:{
        api_key: apiKey,
      },
    }).then(response =>{
      console.log(response.data.results);
      setNewMovies(response.data.results);
    });
  }

  
  return(
    <>
      <div className="genre-header-module">
        <div className="genre-header">
          <h1>Only on Netflix</h1>
        </div>
        <div className="genre-header-paragraph">
          <p>Netflix is the home of amazing original programming that you can&apos;t find anywhere else. Movies, TV shows, specials and more, all tailored specifically to you.</p>
        </div>
      </div>
      <div className="genre-body">
        {/*used to store the entire row; no need to turn into a component*/}
        <div className="genre-popular-row">
          <h2>Popular Now</h2>
          <RowContainer parentContainer="PopularRow" movies={movies}></RowContainer>
        </div>
        <div className="genre-action-row">
          <h2>Action Movies</h2>
          <RowContainer parentContainer="ActionRow" movies={actionMovies}></RowContainer>
        </div>
        <div className="genre-new-releases">
          <h2>Now Playing</h2>
          <RowContainer parentContainer="NewRow" movies={newMovies}></RowContainer>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default Genres;








import "./Genres.css";
import Axios from "axios"
import {useEffect, useState} from "react";
const Genres = () =>{
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    fetchMovies();
  },[]);

  const fetchMovies= () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = 'https://api.themoviedb.org/3';
    Axios.get(`${url}/movie/popular`, {
      params:{
        api_key: apiKey,
      },
    }).then(response =>{
      console.log(response.data.results);
      setMovies(response.data.results);
    });
  }
  return(
    <>
      <div className="genre-header-module">
        <div className="genre-header">
          <h1>Only on Netflix</h1>
        </div>
        <div className="genre-header-paragraph">
          <p>Netflix is the home of amazing original programming that you can't find anywhere else. Movies, TV shows, specials and more, all tailored specifically to you.</p>
        </div>
      </div>
      <div className="genre-body">
        <div className="genre-popular-row">
          <h2>Popular Now</h2>
          <div className="horizontal-container">
              {movies.map(movie => (
              <div key={movie.id} className="movieItem">
                <div className="movie-item-item">
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
                  <p>{movie.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Genres;

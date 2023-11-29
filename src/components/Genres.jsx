import "./Genres.css";
import Axios from "axios"
import {useEffect, useState} from "react";
const Genres = () =>{
  const [movies, setMovies] = useState([]);

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
      console.log(response.data.results);
      setMovies(response.data.results);
    });
  }

  //buttons used to scroll; can be made into components
  const scrollButtonRight = () =>{
    const container = document.querySelector(".horizontal-container");
    container.scrollTo({
      left: container.scrollLeft + 200,
      behavior:"smooth",
    });
  };

  const scrollButtonLeft = () =>{
    const container = document.querySelector(".horizontal-container");
    container.scrollTo({
      left: container.scrollLeft - 200,
      behavior:"smooth",
    });
  };
  
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
        {/*used to store the entire row; can be turned into a component*/}
        <div className="genre-popular-row">
          <h2>Popular Now</h2>
          {/*Used to group the buttons and the container, doesn't need to be turned into a component*/}
          <div className="component-movies">
            <button className="scroll-left-genres" onClick={scrollButtonLeft}>&lt;</button>
            {/*used to contain all the movies in the row; can be turned into a component*/}
            <div className="horizontal-container">
              {/*this is the map of all the movies fetched from via the api; can be turned into a component*/}
                {movies.map(movie => (
                <div key={movie.id} className="movieItem">
                  <div className="movie-item-item">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
                    <p>{movie.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="scroll-right-genres" onClick={()=>{
              scrollButtonRight();
            }}>&gt;</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Genres;








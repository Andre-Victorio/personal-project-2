
import { useLocation } from "react-router-dom";
const MovieItem = () =>{
  const location = useLocation();
  const movie = location.state.movie;
  return(
    <>
     <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}></img>
    </>
  )
}

export default MovieItem;

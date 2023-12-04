
import { useLocation } from "react-router-dom";
const MovieItem = () =>{
  const location = useLocation();
  console.log(location.state.movie);
  return(
    <>
      
    </>
  )
}

export default MovieItem;

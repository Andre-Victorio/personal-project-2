import "./HorizontalContainer.css";
import { useNavigate} from "react-router-dom";
const HorizontalContainer = (props) =>{
  const {movArr} = props
  const movies = movArr;
  const navigate = useNavigate();
  return(
    <>
      <div className={"container " + props.parentContainer} style={{display:'flex', overflowX:"hidden", overflowY:'hidden', whiteSpace:'nowrap'}}>
        {/*this is the map of all the movies fetched from via the api; can be turned into a component*/}
          {movies.map(movie => (
          <div key={movie.id} className="movieItem">
            <div className="movie-item-item">
              <a className="movie-item-link" onClick={()=>{navigate("/movie/" + movie.id,{replace:false, state:{movie}})}}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
              <p>{movie.title}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default HorizontalContainer;

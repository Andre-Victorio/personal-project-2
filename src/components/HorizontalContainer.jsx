import "./HorizontalContainer.css";
const HorizontalContainer = (props) =>{
  const movies = props.movArr;
  return(
    <>
      <div className={"container " + props.parentContainer} style={{display:'flex', overflowX:"hidden", overflowY:'hidden', whiteSpace:'nowrap'}}>
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
    </>
  );
}
export default HorizontalContainer;

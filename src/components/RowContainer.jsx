import {useEffect, useRef} from "react";
import HorizontalContainer from "./HorizontalContainer.jsx";


const RowContainer = (props) =>{
  const containerRef = useRef(null);
  useEffect(()=>{
    const container = document.querySelector("." + props.parentContainer);
    containerRef.current = container;
  },[props.parentContainer]);
  const {movies} = props;
  const scrollButtonRight = () =>{
    if(containerRef.current){
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + 200,
        behavior:"smooth",
      });
    }
  };

  const scrollButtonLeft = () =>{
    containerRef.current.scrollTo({
      left: containerRef.current.scrollLeft - 200,
      behavior:"smooth",
    });
  };
  return(
    <>
          <div className="component-movies">
            <button className="scroll-left-genres" onClick={scrollButtonLeft}>&lt;</button>
            <HorizontalContainer movArr={movies} parentContainer={props.parentContainer}></HorizontalContainer>
            <button className="scroll-right-genres" onClick={()=>{
              scrollButtonRight();
            }}>&gt;</button>
          </div>
    </>
  )
}

export default RowContainer;
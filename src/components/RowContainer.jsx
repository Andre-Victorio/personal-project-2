import {useState, useEffect, useRef} from "react";
import HorizontalContainer from "./HorizontalContainer.jsx";


const RowContainer = (props) =>{
  const {parentContainer, movies} = props
  const containerRef = useRef(null);
  useEffect(()=>{
    const container = document.querySelector("." + parentContainer);
    containerRef.current = container;
  },[props.parentContainer]);
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
            <HorizontalContainer movArr={movies} parentContainer={parentContainer} ></HorizontalContainer>
            <button className="scroll-right-genres" onClick={()=>{
              scrollButtonRight();
            }}>&gt;</button>
          </div>
    </>
  )
}

export default RowContainer;

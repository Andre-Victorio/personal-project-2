import "./Header.css"

const Header = () =>{
  return(
    <>
      <div className="header-div">
        <div className="header-div-left">
          <img path="./assets/Netflix_2015_logo.svg"></img>

        </div>
        <div className="header-div-right">
          <div className="header-div-right-text">Hello</div>
          <button className="Join-now">JOIN NOW</button>
          <a href="#" className="authLink">Sign in</a>
        </div>
      </div>
    </>
  )
}


export default Header;

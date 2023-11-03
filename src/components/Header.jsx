import "./Header.css"
import logo from "../assets/Netflix_2015_logo.svg";
const Header = () =>{
  return(
    <>
      <div className="header-div">
        <div className="header-div-left">
          <img src={logo} alt="Netflix"></img>
        </div>
        <div className="header-div-right">
          <div className="header-div-right-text">Unlimited TV Shows and Movies</div>
          <button className="Join-now">JOIN NOW</button>
          <a href="#" className="authLink">Sign in</a>
        </div>
      </div>
    </>
  )
}


export default Header;

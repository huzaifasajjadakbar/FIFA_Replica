import "./navbar.css";
import { Link } from "react-router-dom";



function Nabar() {




    return ( 
        <div>

<nav>
    <h1 id="logo"><img src={require('./609912b13ae4510004af4a22.png')} alt="nolodead" style = {{height: "20vh" , width : " 15vw" }}/>
</h1>
    <div class="wrapper">
      
      <input type="radio" name="slider" id="menu-btn"/>
      <input type="radio" name="slider" id="close-btn"/>
      <ul class="nav-links">
        <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
        <li><a href="#">TOURNAMENTS ON FIFA+</a></li>
        
      
        <li>
          <a href="#" class="desktop-item">ABOUT FIFA</a>
          
        
          <div class="mega-box">
            <div class="content">
              <div class="row">
                
              </div>
              <div class="row">
                <header>president</header>
                <ul class="mega-links">
                 <Link to="/Rout" style={{textDecoration:"none "}}><li><a href="#">Graphics</a></li></Link>
                  <li><a href="#">Vectors</a></li>
                  <li><a href="#">Business cards</a></li>
                  <li><a href="#">Custom logo</a></li>
                </ul>
              </div>
              <div class="row">
                <header>Email Services</header>
                <ul class="mega-links">
                  <li><a href="#">Personal Email</a></li>
                  <li><a href="#">Business Email</a></li>
                  <li><a href="#">Mobile Email</a></li>
                  <li><a href="#">Web Marketing</a></li>
                </ul>
              </div>
              <div class="row">
                <header>Security services</header>
                <ul class="mega-links">
                  <li><a href="#">Site Seal</a></li>
                  <li><a href="#">VPS Hosting</a></li>
                  <li><a href="#">Privacy Seal</a></li>
                  <li><a href="#">Website design</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        {/* <li>
          <a href="#" class="desktop-item">Mega Menu</a>
          
        
          <div class="mega-box">
            <div class="content">
              <div class="row">
              </div>
              <div class="row">
                <header>FIFA</header>
                <ul class="mega-links">
                  <li><a href="#">Graphics</a></li>
                  <li><a href="#">Vectors</a></li>
                  <li><a href="#">Business cards</a></li>
                  <li><a href="#">Custom logo</a></li>
                </ul>
              </div>
              <div class="row">
                <header>Email Services</header>
                <ul class="mega-links">
                  <li><a href="#">Personal Email</a></li>
                  <li><a href="#">Business Email</a></li>
                  <li><a href="#">Mobile Email</a></li>
                  <li><a href="#">Web Marketing</a></li>
                </ul>
              </div>
              <div class="row">
                <header>Security services</header>
                <ul class="mega-links">
                  <li><a href="#">Site Seal</a></li>
                  <li><a href="#">VPS Hosting</a></li>
                  <li><a href="#">Privacy Seal</a></li>
                  <li><a href="#">Website design</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li> */}
        <li><a href="#">Feedback</a></li>
      </ul>
      <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
    </div>
  </nav>





        </div>
     );
}

export default Nabar;
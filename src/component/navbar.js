import { Link } from "react-router-dom";
import navbarImage from '../assets/full_logo.png';

function Navbar() {
    return(
       <>
           {/*Start Header*/}
           <nav className="navbar" role="navigation" aria-label="main navigation" >
               <div className="navbar-brand">
                   <a className="navbar-item" href="/">
                       <img src={navbarImage} alt="logo pic" width="35px" height="10px" />
                       <p>EzTends.lk</p>
                   </a>

                   <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                      data-target="navbarBasicExample">
                       <span aria-hidden="true"></span>
                       <span aria-hidden="true"></span>
                       <span aria-hidden="true"></span>
                   </a>
               </div>

               <div id="navbarBasicExample" className="navbar-menu">
                   <div className="navbar-end">
                       <div className="navbar-start">
                           <Link className="navbar-item" id="home_Id" to="/">
                               Home
                           </Link>

                           <Link className="navbar-item" to="/tender">
                               Tenders
                           </Link>

                           <Link className="navbar-item" to="/about-us">
                               About Us
                           </Link>

                           <Link className="navbar-item" to="/contact">
                               Contact
                           </Link>
                       </div>

                       <div className="navbar-item">
                           <div className="buttons">
                               <Link className="button is-primary" id="signupButton" to="/sign-up">
                                   <strong>Sign up</strong>
                               </Link>
                               <h2 className="orWord">OR</h2>
                               <Link className="button is-light" to="/sign-in">
                                   Log in
                               </Link>
                           </div>
                       </div>
                   </div>
               </div>
           </nav>
           {/*End Header*/}

       </>
    )
}
export default Navbar;
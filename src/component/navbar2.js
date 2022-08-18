import navbarImage from "../assets/full_logo.png";
import profilePic from "../assets/profile_pic.jpg";
import {Link} from "react-router-dom";

function Navbar2() {
    return(
        <>

            {/*Start Header*/}
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src={navbarImage} alt="logo pic" width="35px" height="10px"/>
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
                        <div className="dropdown is-hoverable">
                            <div className="dropdown-trigger pt-2">
                                <button className="button has-text-weight-bold" aria-haspopup="true" aria-controls="dropdown-menu4">
                                    <span>
                                         <figure className="image is-24x24 mr-2">
                                            <img className="is-rounded" src={profilePic}/>
                                        </figure>
                                    </span>
                                    <span>John David</span>
                                    <span className="icon is-small">
                                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                                      </span>
                                </button>
                            </div>
                            <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                                <div className="dropdown-content">
                                    <div className="dropdown-item">
                                        <Link className="navbar-item" to="/my-account">
                                            My Account
                                        </Link>
                                        <Link className="navbar-item" to="/my-tender">
                                            My Tenders
                                        </Link>
                                        <Link className="navbar-item" to="/my-review">My reviews
                                        </Link>
                                        <hr className="navbar-divider"/>
                                        <a className="navbar-item">
                                            Logout
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="navbar-start">
                            <Link className="navbar-item" to="/">
                                Home
                            </Link>

                            <Link className="navbar-item" to="/tender">
                                Tenders
                            </Link>

                            <Link className="navbar-item" to="/about-us">
                                About Us
                            </Link>


                            <Link className="navbar-item pr-4" to="/contact">
                                Contact
                            </Link>
                        </div>


                    </div>
                </div>
            </nav>
            {/*End Header*/}


        </>
    );


}
export default Navbar2;
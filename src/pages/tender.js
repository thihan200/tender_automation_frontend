import navbarImage from "../assets/full_logo.png";
import {Link} from "react-router-dom";

function Tender() {
    return(
        <>
            {/* Page Loading Start*/}


            {/*Page Loading End*/}
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
                        <div className="navbar-start">
                            <Link className="navbar-item" to="/">
                                Home
                            </Link>

                            <Link className="navbar-item" id="home_Id" to="/tender">
                                Tenders
                            </Link>

                            <Link className="navbar-item"  to="/about-us">
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

            {/*Start Cover*/}
            <section className="hero is-medium has-background-grey" id="tender_hero_pic">
                <div className="hero-body">
                    <h1 className="title" id="about-hero-h1">
                        Tenders
                    </h1>
                </div>
            </section>
            {/*End Cover*/}

            {/*Start Section 1*/}
            <section className="section">
                <div className="columns is-justify-content-center">
                    <div className="column is-three-fifths">
                        <article className="panel is-success">
                            <p className="panel-heading">
                                Search Tender
                            </p>
                            <div className="panel-block">
                                <p className="control has-icons-left">
                                    <input className="input is-success" type="text" placeholder="Search"/>
                                    <span className="icon is-left">
                                        <i className="fas fa-search" aria-hidden="true"></i>

                                    </span>

                                </p>
                            </div>

                        </article>
                    </div>
                </div>

            </section>
           {/* End Section 1*/}
        </>
    );
}

export default Tender;
import {Link} from "react-router-dom";
import navbarImage from "../assets/full_logo.png";
import aboutImage from "../assets/achivement.jpg"


function About(){
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

                            <Link className="navbar-item" to="/tender">
                                Tenders
                            </Link>

                            <Link className="navbar-item" id="home_Id" to="/about-us">
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
            <section className="hero is-medium has-background-grey" id="about_hero_pic">
                <div className="hero-body">
                    <h1 className="title" id="about-hero-h1">
                        About Us
                    </h1>
                </div>
            </section>
            {/*End Cover*/}

            {/*Section 1 Start*/}
            <section className="section">
                <div className="columns">
                    <div className="column" >
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-5by3">
                                    <iframe className="has-ratio" src="https://www.youtube.com/embed/Ah9HfSrWjf4" frameBorder="0" allowfullscreen></iframe>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="column ml-3">
                        <h1  className="title" id="whoWeAre">Who We Are</h1>
                        <p className="pt-3">"EzTends.lk" is Sri Lanka's most comprehensive and accurate tender alert service - if there's a tender out there, then we surely have it on our platform.
                            Our profiling team and powerful tender matching system ensure that you get the tenders you want and the edge to win.</p>
                        <p className="pt-4">
                            With many years in the etendering industry in Sri Lanka, we are confident that www.EzTends.lk is tailor made to fulfill your needs.
                            EzTends.lk started its journey on the 26th of March 2022 was the first Sri Lankan Tender Portal. Currently we service more than 400 customers and have published over 50,000 Sri Lankan Tenders.
                        </p>
                    </div>

                </div>
            </section>
            {/*Section 1 End*/}

            {/*Section 2 Start*/}
            <section className="section" id="aboutSection2">
                <div className="columns">
                    <div className="column" >
                        <h1 className="title" id="whoWeAre">Our Achievements</h1>
                        <h3 className="title mt-4" id="winner">
                            Winner - ICTA eSwabhimani Award
                        </h3>
                        <p>
                            B2b.lk is Sri Lanka’s only ONLINE BUSINESS TO BUSINESS marketplace that connects buyers and suppliers with ease.
                            Currently Sri Lanka has 125,000 businesses and our goal is to bring all of them onto one online platform and provide
                            visibility to SME’s and provide them with an online system to receive purchase leads.
                        </p>
                        <h3 className="title mt-5" id="winner">
                            Won the ICTA Spiralation Project
                        </h3>
                        <p>
                            E TENDERS was recognized by ICTA as one of the most promising and innovative IT companies in 2012.
                            We were selected by ICTA for a grant of USD $ 5000 under the Spirilation Project.
                            As a result of this ICTA provides Mentoring, Guidance and Training to eTenders. http://spiralation.com
                        </p>

                    </div>
                    <div className="column ml-3">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-3by2">
                                    <img src={aboutImage}/>
                                </figure>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/*Section 2 End*/}

            {/*Start Footer */}
            <footer className="footer has-background-grey" id="footer">
                <div className="columns">
                    <div className="column is-two-thirds">
                        <div className="navbar-brand container">
                            <a href="/">
                                <p className="has-text-light" id="footer_name">EzTends.lk</p>
                            </a>
                        </div>
                        <hr className="mt-0"/>
                        <p className="is-size-6 has-text-light has-text-weight-medium">EzTends.lk is the most effective online tender marketplace in Sri Lanka</p>
                        <div className="field mt-3 has-text-white">
                                <span className="icon-text">
                                  <span className="icon">
                                    <i className="fas fa-home"></i>
                                  </span>
                                  <span>No. 571/17, Galle Road, Colombo 6.</span>
                                </span>
                        </div>
                        <div className="field has-text-white">
                                <span className="icon-text">
                                  <span className="icon">
                                    <i className="fa-solid fa-phone"></i>
                                  </span>
                                  <span>+94 77 719 6703</span>
                                </span>
                        </div>
                        <div className="field has-text-white">
                                <span className="icon-text">
                                  <span className="icon">
                                   <i className="fa-solid fa-envelope"></i>
                                  </span>
                                  <span>info@eztends.lk</span>
                                </span>
                        </div>
                    </div>

                    <div className="column ">
                        <div className="navbar-brand container is-justify-content-center">
                            <a href="https://www.facebook.com/" target="_blank">
                                   <span>
                                     <i className="fa-brands fa-facebook-square fa-3x footer_icon"></i>
                                  </span>
                            </a>
                            <a href="https://twitter.com/" target="_blank" className="ml-5">
                                   <span>
                                     <i className="fa-brands fa-twitter-square fa-3x footer_icon"></i>
                                  </span>
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" className="ml-5">
                                   <span>
                                    <i className="fa-brands fa-linkedin fa-3x footer_icon"></i>
                                  </span>
                            </a>
                        </div>
                        <ul className="container mt-3 has-text-centered has-text-white">
                            <li>
                                <a className="has-text-white" href="/">
                                    <span className="footer_link">Home</span>
                                </a>
                            </li>

                            <li className="pt-2">
                                <a className="has-text-white mt-3" href="/tender">
                                    <span className="footer_link">Tenders</span>
                                </a>
                            </li>

                            <li className="pt-2">
                                <a className="has-text-white" href="/about-us">
                                    <span className="footer_link">About Us</span>
                                </a>
                            </li>

                            <li className="pt-2">
                                <a className="has-text-white" href="/contact">
                                    <span className="footer_link">Contact</span>
                                </a>
                            </li>

                        </ul>


                    </div>
                </div>
                <div className="content has-text-centered">
                    <p className="has-text-white">
                        <strong className="has-text-white">All Rights Reserved.</strong> Copyrights © 2022 - EzTends.lk
                    </p>
                </div>
            </footer>

            {/*End Footer */}
        </>
    );

}

export default About;
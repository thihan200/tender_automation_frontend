import navbarImage from "../assets/full_logo.png";
import {Link} from "react-router-dom";

function Contact() {
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

                            <Link className="navbar-item"  to="/about-us">
                                About Us
                            </Link>

                            <Link className="navbar-item" id="home_Id" to="/contact">
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
            <section className="hero is-medium has-background-grey" id="contact_hero_pic">
                <div className="hero-body">
                    <h1 className="title" id="about-hero-h1">
                        Contact Us
                    </h1>
                </div>
            </section>
            {/*End Cover*/}

            {/*Start Section 1*/}
            <section className="section">
                <div className="columns">
                    <div className="column">
                        <form className="box" id="contactForm">
                            <h1 className="title" id="contactNow">Contact Now</h1>
                            <div className="field">
                                <div className="control">
                                    <input className="input" type="name" placeholder="Name"/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input className="input" type="email" placeholder="Email"/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input className="input" type="number" placeholder="Phone No"/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <textarea className="textarea" placeholder="Your Message"></textarea>
                                </div>
                            </div>

                            <div className="column has-text-centered">
                                <button className="button is-primary">Submit
                                </button>
                            </div>

                        </form>
                    </div>
                    <div className="column ml-3">
                        <div className="icon-text mt-6 pt-4">
                              <span className="icon has-text-success">
                                <i className="fa-solid fa-location-dot"></i>
                              </span>
                            <span>Address</span>
                        </div>

                        <p className="block">
                            <strong>ExTends.lk, No. 571/17, Galle Road, Colombo 6.</strong>
                        </p>

                        <div className="icon-text pt-3">
                              <span className="icon has-text-success">
                               <i className="fas fa-tty"></i>
                              </span>
                            <span>Telephone</span>
                        </div>

                        <p className="block">
                            <strong>+94 34 223 4445</strong>
                        </p>

                        <div className="icon-text pt-3">
                              <span className="icon has-text-success">
                               <i className="fas fa-phone"></i>
                              </span>
                            <span>Mobile</span>
                        </div>

                        <p className="block">
                            <strong>+94 77 574 7670</strong>
                        </p>

                        <div className="icon-text pt-3">
                              <span className="icon has-text-success">
                               <i className="fas fa-envelope"></i>
                              </span>
                            <span>Email</span>
                        </div>

                        <p className="block">
                            <strong>info@eztends.lk</strong>
                        </p>
                    </div>
                </div>
            </section>
           {/* End Section 1*/}

            {/*Start Section 2 */}
            <section className="section">
                <h1 className="title" id="contactNow">Management Team</h1>
                <div className="columns">
                    <div className="column">
                        <h2 className="subtitle mb-1 has-text-weight-bold">
                            Thihan Gamage
                        </h2>
                        <p>Project Manager</p>
                        <div className="icon-text pt-5">
                              <span className="icon has-text-success">
                               <i className="fas fa-tty"></i>
                              </span>
                            <span>Telephone</span>
                        </div>

                        <p className="block">
                            <strong>+94 34 223 4445</strong>
                        </p>

                        <div className="icon-text pt-2">
                              <span className="icon has-text-success">
                               <i className="fas fa-phone"></i>
                              </span>
                            <span>Mobile</span>
                        </div>

                        <p className="block">
                            <strong>+94 77 576 7270</strong>
                        </p>

                        <div className="icon-text pt-2">
                              <span className="icon has-text-success">
                               <i className="fas fa-envelope"></i>
                              </span>
                            <span>Email</span>
                        </div>

                        <p className="block">
                            <strong>thihan@gmail.com</strong>
                        </p>
                    </div>
                    <div className="column">
                        <h2 className="subtitle mb-1 has-text-weight-bold">
                            Rumira Daksith
                        </h2>
                        <p>Co Founder</p>
                        <div className="icon-text pt-5">
                              <span className="icon has-text-success">
                               <i className="fas fa-tty"></i>
                              </span>
                            <span>Telephone</span>
                        </div>

                        <p className="block">
                            <strong>+94 34 223 4445</strong>
                        </p>

                        <div className="icon-text pt-2">
                              <span className="icon has-text-success">
                               <i className="fas fa-phone"></i>
                              </span>
                            <span>Mobile</span>
                        </div>

                        <p className="block">
                            <strong>+94 77 576 7270</strong>
                        </p>

                        <div className="icon-text pt-2">
                              <span className="icon has-text-success">
                               <i className="fas fa-envelope"></i>
                              </span>
                            <span>Email</span>
                        </div>

                        <p className="block">
                            <strong>rumira@gmail.com</strong>
                        </p>
                    </div>
                    <div className="column">
                        <h2 className="subtitle mb-1 has-text-weight-bold">
                           Dulaj Nawodya
                        </h2>
                        <p>Assistant Manager</p>
                        <div className="icon-text pt-5">
                              <span className="icon has-text-success">
                               <i className="fas fa-tty"></i>
                              </span>
                            <span>Telephone</span>
                        </div>

                        <p className="block">
                            <strong>+94 34 223 4445</strong>
                        </p>

                        <div className="icon-text pt-2">
                              <span className="icon has-text-success">
                               <i className="fas fa-phone"></i>
                              </span>
                            <span>Mobile</span>
                        </div>

                        <p className="block">
                            <strong>+94 77 576 7270</strong>
                        </p>

                        <div className="icon-text pt-2">
                              <span className="icon has-text-success">
                               <i className="fas fa-envelope"></i>
                              </span>
                            <span>Email</span>
                        </div>

                        <p className="block">
                            <strong>dulaj@gmail.com</strong>
                        </p>
                    </div>

                </div>
            </section>
            {/*End Section 2*/}

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

export default Contact;
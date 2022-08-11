import navbarImage from "../assets/full_logo.png";
import { Link } from "react-router-dom";

import Footer from "../component/footer.jsx";

function Contact() {
    return (
        <>
            {/* Page Loading Start*/}


            {/*Page Loading End*/}
            {/*Start Header*/}
            <nav className="navbar" role="navigation" aria-label="main navigation">
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
                            <Link className="navbar-item" to="/">
                                Home
                            </Link>

                            <Link className="navbar-item" to="/tender">
                                Tenders
                            </Link>

                            <Link className="navbar-item" to="/about-us">
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
                                    <input className="input" type="name" placeholder="Name" />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input className="input" type="email" placeholder="Email" />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input className="input" type="number" placeholder="Phone No" />
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
            <Footer />

            {/*End Footer */}

        </>
    );

}

export default Contact;
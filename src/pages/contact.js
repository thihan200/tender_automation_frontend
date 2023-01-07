import navbarImage from "../assets/full_logo.png";
import { Link } from "react-router-dom";

import Footer from "../component/footer.jsx";
import profilePic from "../assets/profile_pic.jpg";
import Navbar from "../component/navbar";

function Contact() {
    return (
        <>
            {/* Page Loading Start*/}


            {/*Page Loading End*/}
            {/*Start Header*/}
            <Navbar />
            {/*End Header*/}

            {/*Start Cover*/}
            <section className="hero is-medium has-background-grey" id="contact_hero_pic">
                <div className="hero-body">
                    <h1 className="title" id="about-hero-h1" data-aos="zoom-in">
                        Contact Us
                    </h1>
                </div>
            </section>
            {/*End Cover*/}

            {/*Start Section 1*/}
            <section className="section">
                <div className="columns" data-aos="fade-up">
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
            <section className="section" data-aos="fade-up">
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
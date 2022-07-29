import navbarImage from "../assets/full_logo.png";
import signup_image from "../assets/sign_up.svg";
import {Link} from "react-router-dom";

function Signup() {
    return (

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
                            <Link className="navbar-item" id="home_Id" to="/">
                                Home
                            </Link>

                            <a className="navbar-item">
                                Tenders
                            </a>

                            <Link className="navbar-item" to="/about-us">
                                About Us
                            </Link>


                            <a className="navbar-item">
                                Contact
                            </a>
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

            {/*Section Start*/}
            <section className="section" id="signup_background">
                <div className="container">
                    <div className="notification is-white" id="signup_container">
                        <div className="columns is-gapless">
                            <div className="column">
                                <form className="box">
                                    <div className="column" id="createAccountColumn">
                                        <p className="label" id="createAccountText">Create an Account</p>
                                    </div>
                                    <div className="field">
                                        <label className="label has-text-grey">Email</label>
                                        <p className="control has-icons-left has-icons-right">
                                            <input className="input" type="email"
                                                   placeholder="e.g. alexsmith@gmail.com"/>
                                            <span className="icon is-small is-left">
                                                <i className="fas fa-envelope"></i>
                                            </span>
                                            <span className="icon is-small is-right">
                                                <i className="fas fa-check"></i>
                                            </span>
                                        </p>
                                    </div>
                                    <div className="field">
                                        <label className="label">Company Name</label>
                                        <p className="control has-icons-left">
                                            <input className="input is-normal" type="text"
                                                   placeholder="e.g. Asia Lanka Private Limited"/>
                                            <span className="icon is-small is-left">
                                              <i className="fa-solid fa-building"></i>
                                            </span>
                                        </p>
                                    </div>
                                    <div className="field">
                                        <label className="label">Owner Name</label>
                                        <p className="control has-icons-left">
                                            <input className="input is-normal" type="text"
                                                   placeholder="e.g Alex Smith"/>
                                            <span className="icon is-small is-left">
                                              <i className="fa-solid fa-user"></i>
                                            </span>
                                        </p>
                                    </div>
                                    <div className="field">
                                        <label className="label">Company Address</label>
                                        <p className="control has-icons-left">
                                            <input className="input is-normal" type="text"
                                                   placeholder="No.220/A, Temple Rd, Nagoda, Kalutara"/>
                                            <span className="icon is-small is-left">
                                             <i className="fa-solid fa-address-book"></i>
                                            </span>
                                        </p>
                                    </div>
                                    <div className="field">
                                        <label className="label">Company Web URL</label>
                                        <p className="control has-icons-left">
                                            <input className="input is-normal" type="text"
                                                   placeholder="e.g. www.example.com"/>
                                            <span className="icon is-small is-left">
                                             <i className="fa-solid fa-address-book"></i>
                                            </span>
                                        </p>
                                    </div>
                                    <div className="field">
                                        <div className="columns">
                                            <div className="column">
                                                <label className="label">Telephone Number</label>
                                                <p className="control has-icons-left">
                                                    <input className="input is-normal" type="tel"
                                                           placeholder="e.g. 034-2223334"/>
                                                    <span className="icon is-small is-left">
                                                         <i className="fa-solid fa-phone"></i>
                                                     </span>
                                                </p>
                                            </div>
                                            <div className="column">
                                                <label className="label">Tenders Interested In</label>
                                                <div className="select">
                                                    <select>
                                                        <option>Chemical Products</option>
                                                        <option>Computer and IT</option>
                                                        <option>Construction Work</option>
                                                        <option>Drugs, Pharmaceuticals and Equipment</option>
                                                        <option>Electrical and Electronic</option>
                                                        <option>Agriculture and Food</option>
                                                        <option>Machinery and Equipment</option>
                                                        <option>Textiles</option>
                                                        <option>Transport</option>
                                                        <option>Wood and Furniture</option>
                                                    </select>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="columns">
                                            <div className="column">
                                                <label className="label">Password</label>
                                                <p className="control has-icons-left">
                                                    <input className="input" type="password" placeholder="Password"/>
                                                    <span className="icon is-small is-left">
                                                         <i className="fas fa-lock"></i>
                                                     </span>
                                                    <span className="icon is-small is-right">
                                                        <i className="fas fa-check"></i>
                                                     </span>
                                                </p>
                                            </div>
                                            <div className="column">
                                                <label className="label">Confirm Password</label>
                                                <p className="control has-icons-left">
                                                    <input className="input" type="password" placeholder="Password"/>
                                                    <span className="icon is-small is-left">
                                                        <i className="fas fa-lock"></i>
                                                    </span>
                                                    <span className="icon is-small is-right">
                                                         <i className="fas fa-check"></i>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column has-text-centered">
                                        <button className="button is-primary is-rounded" id="signup_button">Create Your
                                            Account
                                        </button>
                                    </div>
                                    <div className="column" id="alreadyText">
                                        <p className="has-text-centered">Already Have an Account ? <span
                                            className="has-text-weight-bold"><Link to="/sign-in">Login</Link></span></p>
                                    </div>
                                </form>
                            </div>
                            <div className="column" id="signup_right_side">
                                <div className="is-rounded is-align-items-center" id="round_1">
                                    <div className="is-rounded is-align-items-center" id="round_2">
                                        <img src={signup_image} alt="logo pic" id="signup_pic"/>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*Section End*/}

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
                                <a className="has-text-white mt-3" href="/tenders">
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

export default Signup;
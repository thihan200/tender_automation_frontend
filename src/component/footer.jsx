import React from "react";

function Footer() {
    return (
        <footer className="footer has-background-grey" id="footer" >
            <div className="columns">
                <div className="column is-two-thirds">
                    <div className="navbar-brand container">
                        <a href="/">
                            <p className="has-text-light" id="footer_name">EzTends.lk</p>
                        </a>
                    </div>
                    <hr className="mt-0" />
                    <p className="is-size-6 has-text-light has-text-weight-medium">EzTends.lk is the most effective
                        online tender marketplace in Sri Lanka</p>
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
    );
}

export default Footer;
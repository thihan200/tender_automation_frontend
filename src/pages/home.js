import navbarImage from '../assets/full_logo.png';
import {Link} from "react-router-dom";
import spmcLogo from '../assets/SPMC.png';
import masLogo from '../assets/MAS.png';
import waterLogo from '../assets/Water_Board.png';
import milkoLogo from '../assets/Milco.png';
import facebookIcon from '../assets/facebook_icon.png';

function Home() {
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

        {/*Start Cover*/}
            <section className="hero is-large has-background-grey" id="home_hero_pic">
                <div className="hero-body">
                    <h1 className="title" id="hero-h1">
                        <p>THE LARGEST COLLECTION OF TENDERS</p>
                        <p>IN SRI LANKA</p>
                    </h1>
                    <p className="subtitle" id="hero-p">
                        We at EzTends take pride in our services which we have had the pleasure of providing to you - our valued customers.
                    </p>
                </div>
            </section>


        {/*End Cover*/}

        {/*Start Section 1*/}
            <section className="section">
                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <article className="tile is-child box has-background-success-light">
                            <p className="title" id="title1">272433</p>
                            <p className="subtitle" id="subtitle1">All Tenders</p>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child box has-background-warning-light">
                            <p className="title" id="title2">726</p>
                            <p className="subtitle" id="subtitle2">Live Tenders</p>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child box has-background-link-light">
                            <p className="title" id="title3">1963</p>
                            <p className="subtitle" id="subtitle3">Departments</p>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child box has-background-danger-light">
                            <p className="title" id="title4">593</p>
                            <p className="subtitle" id="subtitle4">Suppliers</p>
                        </article>
                    </div>
                </div>
            </section>
       {/* End Section   */}

       {/*Start Section 2*/}
            <section className="section pb-4" id="section2">
                <h1 id="latestTender">Latest Tenders</h1>
                <div className="columns">
                    <div className="column">
                        <div className="card">
                            <header className="card-header">
                                <p className="card-header-title">
                                    PURCHASE OF LAB EQUIPMENTS FOR DEPT. OF ELECTRICAL, ELECTRONIC & TELECOMMUNICATION
                                </p>
                            </header>
                            <div className="card-content">
                                <div className="content">
                                    <p id="card_category">Electrical and Electronic</p>
                                    <div className="icon-text">
                                          <span className="icon has-text-black">
                                            <i className="fa-solid fa-location-dot"></i>
                                          </span>
                                         <span>Western Province</span>
                                    </div>
                                    <p><strong>Tender Value</strong>: N/A</p>

                                   <p id="card_desc"><strong>Source</strong>: (Sign into view)</p>
                                    <p id="card_desc"><strong>Published On</strong>: (Sign into view)</p>
                                    <p id="card_desc"><strong>Closing</strong>: 20 August 2022</p>
                                </div>
                            </div>
                            <footer className="card-footer has-background-primary-dark ">
                                <a href="#" className="card-footer-item has-text-white has-text-weight-bold">7 Days Remaining</a>
                            </footer>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <header className="card-header">
                                <p className="card-header-title">
                                    REPAIR OF DESCKTOP MACHINE AT KDU CARE-KDU/PRO/RP&SERVICE/137/2022
                                </p>
                            </header>
                            <div className="card-content">
                                <div className="content">
                                    <p id="card_category">Computer and IT</p>
                                    <div className="icon-text">
                                          <span className="icon has-text-black">
                                            <i className="fa-solid fa-location-dot"></i>
                                          </span>
                                        <span>Western Province</span>
                                    </div>
                                    <p><strong>Tender Value</strong>: N/A</p>

                                    <p id="card_desc"><strong>Source</strong>: (Sign into view)</p>
                                    <p id="card_desc"><strong>Published On</strong>: (Sign into view)</p>
                                    <p id="card_desc"><strong>Closing</strong>: 25 August 2022</p>
                                </div>
                            </div>
                            <footer className="card-footer has-background-primary-dark ">
                                <a href="#" className="card-footer-item has-text-white has-text-weight-bold">12 Days Remaining</a>
                            </footer>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <header className="card-header">
                                <p className="card-header-title">
                                    PURCHASE OF LAB TOOLS FOR FOT-KDU/PRO/CAP/153/2022
                                </p>
                            </header>
                            <div className="card-content">
                                <div className="content">
                                    <p id="card_category">Chemical Products</p>
                                    <div className="icon-text">
                                          <span className="icon has-text-black">
                                            <i className="fa-solid fa-location-dot"></i>
                                          </span>
                                        <span>Western Province</span>
                                    </div>
                                    <p><strong>Tender Value</strong>: N/A</p>

                                    <p id="card_desc"><strong>Source</strong>: (Sign into view)</p>
                                    <p id="card_desc"><strong>Published On</strong>: (Sign into view)</p>
                                    <p id="card_desc"><strong>Closing</strong>: 27 August 2022</p>
                                </div>
                            </div>
                            <footer className="card-footer has-background-primary-dark ">
                                <a href="#" className="card-footer-item has-text-white has-text-weight-bold">15 Days Remaining</a>
                            </footer>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <header className="card-header">
                                <p className="card-header-title">
                                    Boat Service Between Jetty at Lakvijaya Power Plant & Coal Vessels at Puttalam
                                </p>
                            </header>
                            <div className="card-content">
                                <div className="content">
                                    <p id="card_category">Transport</p>
                                    <div className="icon-text">
                                          <span className="icon has-text-black">
                                            <i className="fa-solid fa-location-dot"></i>
                                          </span>
                                        <span>Western Province</span>
                                    </div>
                                    <p><strong>Tender Value</strong>: N/A</p>

                                    <p id="card_desc"><strong>Source</strong>: (Sign into view)</p>
                                    <p id="card_desc"><strong>Published On</strong>: (Sign into view)</p>
                                    <p id="card_desc"><strong>Closing</strong>: 31 August 2022</p>
                                </div>
                            </div>
                            <footer className="card-footer has-background-primary-dark ">
                                <a href="#" className="card-footer-item has-text-white has-text-weight-bold">17 Days Remaining</a>
                            </footer>
                        </div>
                    </div>
                </div>
                <div className="column has-text-centered">
                    <button className="button has-background-primary-dark has-text-white is-medium">See More</button>
                </div>
            </section>
        {/*Start Section 2*/}
         
         {/*Start Section 3*/}
         <section className="section">
             <h1 id="latestTender">Our Partners</h1>
             <div className="columns has-text-centered">
                 <div className="column">
                     <div className="is-align-items-center">
                         <img src={spmcLogo}/>
                     </div>
                     <p><strong>State Pharmaceuticals Manufacturing Corporation</strong></p>
                 </div>
                 <div className="column">
                     <div className="is-align-items-center">
                         <img src={masLogo}/>
                     </div>
                     <p><strong>MAS Holding (Pvt) Ltd</strong></p>
                 </div>
                 <div className="column">
                     <div className="is-align-items-center">
                         <img src={waterLogo}/>
                     </div>
                     <p><strong>National Water Supply and Drainage Board</strong></p>
                 </div>
                 <div className="column">
                     <div className="is-align-items-center">
                         <img src={milkoLogo}/>
                     </div>
                     <p><strong>Milko (Pvt) Ltd</strong></p>
                 </div>
             </div>
         </section>
         {/*End Section 3*/}


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

export default Home;
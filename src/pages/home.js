import navbarImage from '../assets/full_logo.png';
import { Link } from "react-router-dom";
import spmcLogo from '../assets/SPMC.png';
import masLogo from '../assets/MAS.png';
import waterLogo from '../assets/Water_Board.png';
import milkoLogo from '../assets/Milco.png';
import facebookIcon from '../assets/facebook_icon.png';
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import profilePic from "../assets/profile_pic.jpg";

function Home() {
    return (
        <>
            {/* Page Loading Start*/}


            {/*Page Loading End*/}
            {/*Start Header*/}
            <Navbar />
            {/*End Header*/}

            {/*Start Cover*/}
            <section className="hero is-large has-background-grey" id="home_hero_pic">
                <div className="hero-body">
                    <h1 className="title" id="hero-h1" data-aos="fade-down-right">
                        <p>THE LARGEST COLLECTION OF TENDERS</p>
                        <p>IN SRI LANKA</p>
                    </h1>
                    <p className="subtitle" id="hero-p" data-aos="fade-down-left">
                        We at EzTends take pride in our services which we have had the pleasure of providing to you - our valued customers.
                    </p>
                </div>
            </section>


            {/*End Cover*/}

            {/*Start Section 1*/}
            <section className="section">
                <div className="tile is-ancestor">
                    <div className="tile is-parent" data-aos="fade-down">
                        <article className="tile is-child box has-background-success-light">
                            <p className="title" id="title1">272433</p>
                            <p className="subtitle" id="subtitle1">All Tenders</p>
                        </article>
                    </div>
                    <div className="tile is-parent" data-aos="fade-down">
                        <article className="tile is-child box has-background-warning-light">
                            <p className="title" id="title2">726</p>
                            <p className="subtitle" id="subtitle2">Live Tenders</p>
                        </article>
                    </div>
                    <div className="tile is-parent" data-aos="fade-down">
                        <article className="tile is-child box has-background-link-light">
                            <p className="title" id="title3">1963</p>
                            <p className="subtitle" id="subtitle3">Departments</p>
                        </article>
                    </div>
                    <div className="tile is-parent" data-aos="fade-down">
                        <article className="tile is-child box has-background-danger-light">
                            <p className="title" id="title4">593</p>
                            <p className="subtitle" id="subtitle4">Suppliers</p>
                        </article>
                    </div>
                </div>
            </section>
            {/* End Section   */}

            {/*Start Section 2*/}
            <section className=" section pb-4" id="section2">
                <h1 id="latestTender">Latest Tenders</h1>
                <div className="columns" data-aos="fade-up">
                    <div className="column" >
                        <div className="card" >
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
                    <Link to="/tender">
                    <button className="button has-background-primary-dark has-text-white is-medium">See More</button>
                    </Link>
                </div>
            </section>
            {/*Start Section 2*/}

            {/*Start Section 3*/}
            <section className="section">
                <h1 id="latestTender">Our Partners</h1>
                <div className="columns has-text-centered slide-track">
                    <div className="column slider">
                        <div className="is-align-items-center">
                            <img src={spmcLogo} />
                        </div>
                        <p><strong>State Pharmaceuticals Manufacturing Corporation</strong></p>
                    </div>
                    <div className="column">
                        <div className="is-align-items-center">
                            <img src={masLogo} />
                        </div>
                        <p><strong>MAS Holding (Pvt) Ltd</strong></p>
                    </div>
                    <div className="column">
                        <div className="is-align-items-center">
                            <img src={waterLogo} />
                        </div>
                        <p><strong>National Water Supply and Drainage Board</strong></p>
                    </div>
                    <div className="column">
                        <div className="is-align-items-center">
                            <img src={milkoLogo} />
                        </div>
                        <p><strong>Milko (Pvt) Ltd</strong></p>
                    </div>

                </div>
            </section>
            {/*End Section 3*/}


            {/*Start Footer */}
            <Footer />
            {/*End Footer */}

        </>
    );

}

export default Home;
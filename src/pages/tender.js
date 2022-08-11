import navbarImage from "../assets/full_logo.png";
import {Link} from "react-router-dom";

function Tender() {
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
                            <Link className="navbar-item" to="/">
                                Home
                            </Link>

                            <Link className="navbar-item" id="home_Id" to="/tender">
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
                    <div className="column is-6">
                        <article className="panel is-success">
                            <p className="panel-heading ">
                                Search Tender
                            </p>
                            <div className="columns">
                                <div className="column is-three-quarters">
                                    <div className="panel-block">
                                        <p className="control has-icons-left">
                                            <input className="input is-success" type="text" placeholder="Search"/>
                                            <span className="icon is-left">
                                                <i className="fas fa-search" aria-hidden="true"></i>
                                             </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="column">
                                    <button className="button is-success has-text-white mt-2">Search</button>
                                </div>
                            </div>

                        </article>
                    </div>
                </div>

            </section>
            {/* End Section 1*/}

            {/*Start Section 2*/}
            <section className="section">
                <div className="columns">
                    <div className="box column is-one-quarter">
                        <h1 className='subtitle'><strong>Filter</strong></h1>
                        <aside className="menu">
                            <p className="menu-label">
                                Industries
                            </p>
                            <ul className="menu-list" id="filterList">
                                <li><a>Education</a></li>
                                <li><a>Packaging</a></li>
                                <li><a>Supplier Registration</a></li>
                                <li><a>Services</a></li>
                                <li><a>Medical</a></li>
                                <li><a>Expression of Interests(EOI)</a></li>
                                <li><a>Engineering and Constructions</a></li>
                                <li><a>Automobile and Transport</a></li>
                                <li><a>IT and Electronics</a></li>
                                <li><a>Power and Energy</a></li>
                                <li><a>Aviation</a></li>
                                <li><a>Hardware, Machinery and Equipment</a></li>
                                <li><a>Agriculture and Food</a></li>
                                <li><a>Hardware, Machinery and Equipment</a></li>
                                <li><a>Printing, Packaging, Advertising and Stationeries</a></li>
                                <li><a>Hotel and Hospitality</a></li>
                                <li><a>Miscellaneous</a></li>
                                <li><a>Furniture</a></li>
                                <li><a>Sales and Auctions</a></li>
                                <li><a>Lands and Properties</a></li>
                                <li><a>Apparels and related Products</a></li>
                                <li><a>Timber and Related Services</a></li>
                                <li><a>Distributors/Partnerships</a></li>
                                <li><a>Chemicals and Related Services</a></li>
                                <li><a>Sport Related Items</a></li>

                            </ul>
                        </aside>
                        <div className="column pt-5">
                            <label className="label">Province</label>
                            <div className="select">
                                <select>
                                    <option disabled selected>Select Your Province</option>
                                    <option>Central Province</option>
                                    <option>North Central Province</option>
                                    <option>Northern Province</option>
                                    <option>North Western Province</option>
                                    <option>Sabaragamuwa Province</option>
                                    <option>Southern Province</option>
                                    <option>Uwa Province</option>
                                    <option>Western Province</option>
                                    <option>Eastern Province</option>
                                </select>
                            </div>
                        </div>
                        <div className="column is-four-fifths">
                            <label className="label">Closing Date</label>
                                <input className="input" type="date"/>


                        </div>
                        <div className="column has-text-centered">
                            <button className="button is-success has-text-weight-bold">Clear Filter</button>


                        </div>
                    </div>
                    <div className="column pl-5">
                        <div className="tabs is-medium">
                            <ul>
                                <li onClick={(e)=>{console.log("This is Live")}} className="is-active" data-target="latestTender1"><a>Live(7)</a></li>
                                <li data-target="latestTender1"><a>Latest(24)</a></li>
                                <li><a>Expired(145)</a></li>
                            </ul>
                            <Link to="/create-tender">
                                <button className="button is-medium has-text-white has-text-weight-bold is-success">Post
                                    Your Tender
                                </button>
                            </Link>
                        </div>

                        <div id="tab-content">
                            <a href="#">
                            <div className="card has-background-light" id="latestTender1">
                                <header className="card-header">
                                    <p className="card-header-title">
                                        PURCHASE OF LAB EQUIPMENTS FOR DEPT. OF ELECTRICAL, ELECTRONIC &
                                        TELECOMMUNICATION
                                    </p>
                                </header>
                                <div className="card-content">
                                    <p className="is-size-6" id="card_category">Electrical and Electronic</p>
                                    <p className="is-size-7">(Sign into view)</p>
                                    <div className="icon-text pt-3 is-size-6">
                                          <span className="icon has-text-primary ">
                                            <i className="fa-solid fa-location-dot "></i>
                                          </span>
                                          <span>Western Province</span>
                                        <span className="ml-6"><strong>Ref: </strong>T001</span>
                                        <span className="ml-6"><strong>Source: </strong>(Sign into view)</span>
                                    </div>
                                </div>
                                <footer className="card-footer">
                                    <p className="card-footer-item"><strong>Published On :&nbsp;</strong>(Sign into view)</p>
                                    <p className="card-footer-item"><strong>Closed On : &nbsp;</strong>20 August 2022</p>
                                    <p className="card-footer-item has-background-primary has-text-white has-text-weight-bold">7 Days Remaining</p>
                                </footer>
                            </div>
                            </a>

                            <a href="#">
                                <div className="card has-background-light mt-5" id="latestTender2">
                                    <header className="card-header">
                                        <p className="card-header-title">
                                            REPAIR OF DESCKTOP MACHINE AT KDU CARE-KDU/PRO/RP&SERVICE/137/2022
                                        </p>
                                    </header>
                                    <div className="card-content">
                                        <p className="is-size-6" id="card_category">Computer and IT</p>
                                        <p className="is-size-7">(Sign into view)</p>
                                        <div className="icon-text pt-3 is-size-6">
                                          <span className="icon has-text-primary ">
                                            <i className="fa-solid fa-location-dot "></i>
                                          </span>
                                            <span>Western Province</span>
                                            <span className="ml-6"><strong>Ref: </strong>T002</span>
                                            <span className="ml-6"><strong>Source: </strong>(Sign into view)</span>
                                        </div>
                                    </div>
                                    <footer className="card-footer">
                                        <p className="card-footer-item"><strong>Published On :&nbsp;</strong>(Sign into view)</p>
                                        <p className="card-footer-item"><strong>Closed On : &nbsp;</strong>25 August 2022</p>
                                        <p className="card-footer-item has-background-primary has-text-white has-text-weight-bold">12 Days Remaining</p>
                                    </footer>
                                </div>
                            </a>

                            <a href="#">
                                <div className="card has-background-light mt-5" id="latestTender3">
                                    <header className="card-header">
                                        <p className="card-header-title">
                                            PURCHASE OF LAB TOOLS FOR FOT-KDU/PRO/CAP/153/2022
                                        </p>
                                    </header>
                                    <div className="card-content">
                                        <p className="is-size-6" id="card_category">Chemical Products</p>
                                        <p className="is-size-7">(Sign into view)</p>
                                        <div className="icon-text pt-3 is-size-6">
                                          <span className="icon has-text-primary ">
                                            <i className="fa-solid fa-location-dot "></i>
                                          </span>
                                            <span>Western Province</span>
                                            <span className="ml-6"><strong>Ref: </strong>T003</span>
                                            <span className="ml-6"><strong>Source: </strong>(Sign into view)</span>
                                        </div>
                                    </div>
                                    <footer className="card-footer">
                                        <p className="card-footer-item"><strong>Published On :&nbsp;</strong>(Sign into view)</p>
                                        <p className="card-footer-item"><strong>Closed On : &nbsp;</strong>27 August 2022</p>
                                        <p className="card-footer-item has-background-primary has-text-white has-text-weight-bold">15 Days Remaining</p>
                                    </footer>
                                </div>
                            </a>

                            <a href="#">
                                <div className="card has-background-light mt-5" id="latestTender4">
                                    <header className="card-header">
                                        <p className="card-header-title">
                                            Boat Service Between Jetty at Lakvijaya Power Plant & Coal Vessels at Puttalam
                                        </p>
                                    </header>
                                    <div className="card-content">
                                        <p className="is-size-6" id="card_category">Transport</p>
                                        <p className="is-size-7">(Sign into view)</p>
                                        <div className="icon-text pt-3 is-size-6">
                                          <span className="icon has-text-primary ">
                                            <i className="fa-solid fa-location-dot "></i>
                                          </span>
                                            <span>Western Province</span>
                                            <span className="ml-6"><strong>Ref: </strong>T004</span>
                                            <span className="ml-6"><strong>Source: </strong>(Sign into view)</span>
                                        </div>
                                    </div>
                                    <footer className="card-footer">
                                        <p className="card-footer-item"><strong>Published On :&nbsp;</strong>(Sign into view)</p>
                                        <p className="card-footer-item"><strong>Closed On : &nbsp;</strong>31 August 2022</p>
                                        <p className="card-footer-item has-background-primary has-text-white has-text-weight-bold">17 Days Remaining</p>
                                    </footer>
                                </div>
                            </a>

                            <a href="#">
                                <div className="card has-background-light mt-5" id="latestTender5">
                                    <header className="card-header">
                                        <p className="card-header-title">
                                            Supply & Delivery of Primary Activity Room Equipment Set
                                        </p>
                                    </header>
                                    <div className="card-content">
                                        <p className="is-size-6" id="card_category">Other Stationery Items, Training and Testing Equipmen</p>
                                        <p className="is-size-7">(Sign into view)</p>
                                        <div className="icon-text pt-3 is-size-6">
                                          <span className="icon has-text-primary ">
                                            <i className="fa-solid fa-location-dot "></i>
                                          </span>
                                            <span>Western Province</span>
                                            <span className="ml-6"><strong>Ref: </strong>T005</span>
                                            <span className="ml-6"><strong>Source: </strong>(Sign into view)</span>
                                        </div>
                                    </div>
                                    <footer className="card-footer">
                                        <p className="card-footer-item"><strong>Published On :&nbsp;</strong>(Sign into view)</p>
                                        <p className="card-footer-item"><strong>Closed On : &nbsp;</strong>4 September 2022</p>
                                        <p className="card-footer-item has-background-primary has-text-white has-text-weight-bold">21 Days Remaining</p>
                                    </footer>
                                </div>
                            </a>
                        </div>

                    </div>

                </div>
            </section>
            {/* End Section 2*/}

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

export default Tender;
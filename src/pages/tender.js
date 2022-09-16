/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import navbarImage from "../assets/full_logo.png";
import { Link, useHistory } from "react-router-dom";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from "../component/footer.jsx";
import categories from "../data/categories.json";

function Tender() {

    const [search, setSearch] = React.useState("");
    const [tenders, setTenders] = React.useState([]);
    const [category, setCategory] = React.useState("All");

    React.useEffect(() => {
        console.log("useEffect [search, category]", search, category);
        //update the url with the search and category
        const url = new URL(window.location.href);
        url.searchParams.set("search", search);
        url.searchParams.set("category", category);
        window.history.pushState({}, "", url);

        const cat = category === "All" ? "" : category;
        axios.get(`${process.env.REACT_APP_API_DOMAIN}/tender?search=${search}&category=${cat}`,
            {
                headers: {
                    "x-auth-token": localStorage.getItem("token"),
                },
            }
        ).then((res) => {
            console.log(res.data);
            setTenders(res.data.data);
        }).catch((err) => {
            console.log(err);
        });
    }, [search, category]);

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
                                            <input className="input is-success" type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
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
                            <ul className="menu-list" id="filterList" onClick={(e) => setCategory(e.target.innerText)}>
                                <li><a className={`${category === "All" ? "has-text-weight-bold" : ""}`}>All</a></li>
                                {categories.map((c) => (
                                    <li><a className={`${category === c ? "has-text-weight-bold" : ""}`}>{c}</a></li>
                                ))}
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
                            <input className="input" type="date" />


                        </div>
                        <div className="column has-text-centered">
                            <button className="button is-success has-text-weight-bold">Clear Filter</button>


                        </div>
                    </div>
                    <div className="column pl-5">
                        <div className="tabs is-medium">
                            <ul>
                                <li onClick={(e) => { console.log("This is Live") }} className="is-active" data-target="latestTender1"><a>Live(7)</a></li>
                                <li data-target="latestTender1"><a>Latest(24)</a></li>
                                <li><a>Expired(145)</a></li>
                            </ul>
                            <Link to="/create-tender">
                                <button className="button is-medium has-text-white has-text-weight-bold is-success">Post
                                    Your Tender
                                </button>
                            </Link>
                        </div>

                        <div id="tab-content" className="mr-5">
                            {tenders.map((tender) => (
                                <div className="card has-background-light" key={tender.id} style={{ marginBottom: "2.5rem" }}>
                                    <header className="card-header">
                                        <p className="card-header-title">
                                            {tender.title.toUpperCase()}
                                        </p>
                                    </header>
                                    <div className="card-content">
                                        <p className="is-size-6" id="card_category">{tender.category}</p>
                                        {/* <p className="is-size-7">(Sign into view)</p> */}
                                        <div className="icon-text pt-3 is-size-6">
                                            <span className="icon has-text-primary ">
                                                <i className="fa-solid fa-location-dot "></i>
                                            </span>
                                            <span>{tender.location}</span>
                                            <span className="ml-6"><strong>Ref: </strong>{tender.ref}</span>
                                            <span className="ml-6"><strong>Posted By: </strong>{tender.company.name}</span>
                                        </div>
                                    </div>
                                    <footer className="card-footer">
                                        <p className="card-footer-item"><strong>Published On :&nbsp;</strong>{new Date(tender.created_at).toDateString()}</p>
                                        <p className="card-footer-item"><strong>Closing On : &nbsp;</strong>{new Date(tender.expirydate).toDateString()}</p>
                                        <p className={`card-footer-item has-text-white has-text-weight-bold has-background-${Math.floor((Date.parse(tender.expirydate) - Date.parse(new Date()))/86400000) < 0 ? "danger" : "primary"}`}>
                                            {Math.floor((Date.parse(tender.expirydate) - Date.parse(new Date()))/86400000) < 0 ? "Expired" : Math.floor((Date.parse(tender.expirydate) - Date.parse(new Date()))/86400000) + " Days Left"}
                                        </p>
                                    </footer>
                                </div>
                            ))}

                            {tenders.length === 0 && <div className="has-text-centered"> <p className="is-size-4">No Tenders Found on this Category</p></div>}

                        </div>

                    </div>

                </div>
            </section>
            {/* End Section 2*/}

            {/*Start Footer */}
            <Footer />
            {/*End Footer */}
        </>
    );
}

export default Tender;
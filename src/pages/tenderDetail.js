import Navbar2 from "../component/navbar2";
import {Link} from "react-router-dom";
import React from "react";
import Footer from "../component/footer";

function TenderDetail() {

    const [toggleState, setToggleState] = React.useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <>
            {/*Start Header*/}
            <Navbar2/>
            {/*End Header*/}

            {/*Start Section 1*/}
            <section className="section has-background-white-ter">
                <nav className="panel mt-6">
                    <p className="panel-heading has-background-primary has-text-white">
                        PURCHASE OF LAB EQUIPMENTS FOR DEPT. OF ELECTRICAL, ELECTRONIC &
                        TELECOMMUNICATION

                    </p>
                    <div className="content mt-4">
                        {/*<div className="container is-fullhd">
                            <div className="notification has-background-primary-light is-size-5">
                                Place your bid, if you are ready to execute this tender
                                <a className="button is-success" id="place-bid"><strong>Place Bid</strong></a>
                            </div>
                        </div>*/}
                        <div className="box has-background-primary-light is-size-5">
                            Place your bid, if you are ready to execute this tender
                            <a className="button is-success pb-2" id="place-bid"><strong>Place Bid</strong></a>
                        </div>
                    <blockquote className="pt-1 mt-4 pb-1 has-background-white-ter">Number of bids placed for this order is <strong>3</strong></blockquote>
                    </div>
                    <div className="panel-block">
                    </div>

                    <div className="tabs is-medium ml-4 mb-0">
                        <ul>
                            <li onClick={(e) => toggleTab(1)} className={toggleState===1 ? "is-active":""} ><a>Instructions</a></li>
                            <li onClick={(e) => toggleTab(2)} className={toggleState===2 ? "is-active":""} ><a>Messages</a></li>
                        </ul>


                    </div>
                    <div className="columns has-background-warning-light m-0">
                        <div className="column">
                            <div className="card ml-4 mb-3">
                                <div className="card-content">
                                    <div className="content">
                                        <table className="table is-fullwidth" id="tender_detail_table">
                                            <tbody >
                                            <tr>
                                                <td>Ref No</td>
                                                <td><strong>A2YYY0T</strong></td>
                                            </tr>
                                            <tr>
                                                <td>Closing On</td>
                                                <td><strong>Sat Sep 16 2023 <span className="has-text-success">(361 Days)</span></strong></td>
                                            </tr>
                                            <tr>
                                                <td>Category</td>
                                                <td><strong>Medical</strong></td>
                                            </tr>
                                            <tr>
                                                <td>Location</td>
                                                <td><strong>Central Province</strong></td>
                                            </tr>
                                            <tr>
                                                <td>Documentation</td>
                                                <td><a href="abc.pdf" className="has-text-link">Tender Details.pdf</a></td>
                                            </tr>
                                            <tr>
                                                <td>Company Name</td>
                                                <td><strong>MAS Unichella pvt(ltd)</strong>&emsp;<span className="fa fa-star checked">5</span></td>
                                            </tr>
                                            <tr>
                                                <td>Posted By</td>
                                                <td><strong>Dulaj Gamage</strong></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card mr-3">
                                <div className="card-content">
                                    <div className="content">
                                        <p className="is-size-5 has-text-weight-bold">Tender Description</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
                                            dolorum explicabo facilis illum maiores, maxime molestiae molestias nam neque nobis,
                                            officiis placeat quisquam sequi tempora velit! Autem facilis sit voluptates.
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
                                            dolorum explicabo facilis illum maiores, maxime molestiae molestias nam neque nobis,
                                            officiis placeat quisquam sequi tempora velit! Autem facilis sit voluptates.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </nav>


            </section>
            {/*End Section 1*/}
            {/*Start Footer */}
            <Footer />
            {/*End Footer */}


        </>
    );
}

export default TenderDetail;
import Navbar2 from "../component/navbar2";
import {Link} from "react-router-dom";

function TenderDetail() {
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
                    <div className="content pt-3">
                        <div className="container is-fullhd">
                            <div className="notification has-background-success-light is-size-5">
                                Place your bid, if you are ready to execute this tender
                                <a className="button is-success" id="place-bid"><strong>Place Bid</strong></a>
                            </div>
                        </div>
                    <blockquote className="pt-1 mt-4 pb-1 has-background-white-ter">Number of bids placed for this order is <strong>3</strong></blockquote>
                    </div>
                    <div className="panel-block">
                    </div>

                    <div className="tabs is-medium">
                        <ul>
                            <li onClick={(e) => { console.log("This is Instructions") }} className="is-active" data-target="latestTender1"><a>Instructions</a></li>
                            <li><a>Messages</a></li>
                        </ul>
                    </div>
                </nav>


            </section>
            {/*End Section 1*/}


        </>
    );
}

export default TenderDetail;
import Navbar2 from "../component/navbar2";
import {Link} from "react-router-dom";

function MyTender() {
    return(
        <>
            {/*Start Header*/}
            <Navbar2/>
            {/*End Header*/}

            {/*Start Section 1*/}
            <section className="section" id="myAccount_Background">
                <div className="box mt-6">
                    <h1 className="is-size-3 has-text-weight-bold mb-3">My Tenders</h1>
                <div className="tabs is-medium">
                    <ul>
                        <li onClick={(e) => { console.log("This is Live") }} className="is-active" data-target="latestTender1"><a>Live(3)</a></li>
                        <li data-target="latestTender1"><a>Expired(3)</a></li>
                        <li><a>All(6)</a></li>
                    </ul>
                    <Link to="/create-tender">
                        <button className="button is-medium has-text-white has-text-weight-bold is-success">Post
                            Your Tender
                        </button>
                    </Link>
                </div>

                <div id="tab-content">
                    <table className="table is-fullwidth is-hoverable">
                        <thead>
                        <tr>
                            <th>My Tenders</th>
                            <th>IMPRESSIONS</th>
                            <th>CLICKS</th>
                            <th>CANCELLATIONS</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>

                            <td><a href="" title=""> Boat Service Between Jetty at Lakvijaya Power Plant & Coal Vessels at Puttalam</a></td>
                            <td>38</td>
                            <td>38</td>
                            <td>0%</td>

                        </tr>
                        <tr>
                            <td><a href="#" title="#"> PURCHASE OF LAB TOOLS FOR FOT-KDU/PRO/CAP/153/2022</a>
                            </td>
                            <td>38</td>
                            <td>20</td>
                            <td>0%</td>
                        </tr>
                        <tr>

                            <td><a href="#" title="#">PURCHASE OF GENERATORS AND SPARE PARTS</a>
                            </td>
                            <td>38</td>
                            <td>19</td>
                            <td>0%</td>
                        </tr>
                        <tr>
                            <td><a href="#" title="#">Supply & Delivery of Primary Activity Room Equipment Set</a>
                            </td>
                            <td>38</td>
                            <td>19</td>
                            <td>0%</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </section>
            {/*Start Section 2*/}

        </>
    );
}

export default MyTender;
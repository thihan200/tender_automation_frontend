import Navbar2 from "../component/navbar2";
import { Link } from "react-router-dom";
import Footer from "../component/footer";
import React from "react";
import axios from "axios";

function MyTender() {
  const [myTenders, setMyTenders] = React.useState([]);
  async function fetchData() {
    const { data } = await axios.get(
      process.env.REACT_APP_API_DOMAIN + "/tender/my",
      {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      }
    );
    setMyTenders(data.data);
  }
  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {/*Start Header*/}
      <Navbar2 />
      {/*End Header*/}

      {/*Start Section 1*/}
      <section className="section" id="myAccount_Background">
        <div className="box mt-6" data-aos="fade-up">
          <h1 className="is-size-3 has-text-weight-bold mb-3">My Tenders</h1>
          <div className="tabs is-medium">
            <ul>
              {/* <li onClick={(e) => { console.log("This is Live") }} className="is-active" data-target="latestTender1"><a>Live(3)</a></li>
              <li data-target="latestTender1"><a>Expired(3)</a></li> */}
              <li className="is-active"><a>All(6)</a></li>
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
                {myTenders.map((tender) => (
                  <tr>
                    <td>
                      <Link to={`/tender/${tender.id}`}> {tender.title}</Link>
                    </td>
                    <td>0</td>
                    <td>0</td>
                    <td>0%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/*Start Section 2*/}

      {/*Start Footer */}
      <Footer />
      {/*End Footer */}

    </>
  );
}

export default MyTender;
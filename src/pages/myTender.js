import Navbar2 from "../component/navbar2";
import { Link } from "react-router-dom";
import Footer from "../component/footer";
import React from "react";
import axios from "axios";



function MyTender() {

  const [toggleState, setToggleState] = React.useState(1);
  const [modal, setModal] = React.useState(false);

  const toggleModal = () => {
    setModal(!modal);
  }

  const toggleTab = (index) => {
    setToggleState(index);
  }

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
          <div className="columns">
            <div className="column is-two-fifths">
              <div className="tags has-addons">
                <span className="tag">You are in</span>
                <span className="tag is-info">Contractor Mode</span>
              </div>
              <h1 className="is-size-3 has-text-weight-bold mb-3 mt-3">My Posted Tenders</h1>
              </div>
            <div className="column">
              <Link to={""}>
              <h4 className=" has-text-weight-bold has-text-right mt-4 has-text-success-dark">Switch to a Sub-Contractor</h4>
                </Link>
            </div>

          </div>

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
                  <th>Total Entries</th>
                  <th className="pl-6">View</th>
                </tr>
              </thead>
              <tbody>
                {myTenders.map((tender) => (
                  <tr>
                    <td>
                      <Link to={`/tender/${tender.id}`}> {tender.title}</Link>
                    </td>
                    <td className="pl-6">0</td>
                    <td className="pl-6">0</td>
                    <td className="pl-6">0</td>
                    <td>
                      <button onClick={toggleModal} className="button is-ghost mt-0"> View Entry</button>

                      {modal && (
                          <div className="modal is-active" onClick={toggleModal} data-aos="zoom-in">
                            <div className="modal-background overlay-model"></div>
                            <div className="modal-card">
                              <header className="modal-card-head">
                                <p className="modal-card-title " id="model-title">  PURCHASE OF LAB EQUIPMENTS FOR DEPT. OF ELECTRICAL, ELECTRONIC & TELECOMMUNICATION</p>
                                <button className="delete" aria-label="close"></button>
                              </header>
                              <section className="modal-card-body">
                                <div className="card-content">
                                  <div className="content">
                                    <table className="table is-fullwidth" id="tender_detail_table">
                                      <tbody>
                                      <tr>
                                        <td>Ref No</td>
                                        <td><strong>ABCF45</strong></td>
                                      </tr>
                                      <tr>
                                        <td>Applied By</td>
                                        <td><strong>Dulaj Gamage</strong></td>
                                      </tr>
                                      <tr>
                                        <td>Company Name</td>
                                        <td><strong>MAS Holdings</strong>&emsp;<span className="fa fa-star checked">5</span></td>
                                      </tr>
                                      <tr>
                                        <td>Expected Amount</td>
                                        <td><strong> LKR. 100000.00</strong></td>
                                      </tr>
                                      <tr>
                                        <td>Location</td>
                                        <td><strong> {tender?.location}</strong></td>
                                      </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </section>
                              <footer className="modal-card-foot">
                                <button className="button is-success"><strong>Handover Tender</strong></button>
                                <button className="button">Cancel</button>
                              </footer>
                            </div>
                          </div>
                      )}
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/*Start Sub-Contractor Mode*/}
        <div className="box mt-6" data-aos="fade-up">
          <div className="columns">
            <div className="column is-two-fifths">
              <div className="tags has-addons">
                <span className="tag">You are in</span>
                <span className="tag is-info">Sub-Contractor Mode</span>
              </div>
              <h1 className="is-size-3 has-text-weight-bold mb-3 mt-3">My Tenders</h1>
            </div>
            <div className="column">
              <Link to={""}>
                <h4 className=" has-text-weight-bold has-text-right mt-4 has-text-success-dark">Switch to a Contractor</h4>
              </Link>
            </div>

          </div>

          <div className="tabs is-medium">
            <ul>

                <li onClick={(e) => toggleTab(1)} className={toggleState===1 ? "is-active":""} ><a>Live(7)</a></li>
                <li onClick={(e) => toggleTab(2)} className={toggleState===2 ? "is-active":""} ><a>Expired(24)</a></li>
                <li onClick={(e) => toggleTab(3)} className={toggleState===3 ? "is-active":""} ><a>All(145)</a></li>

            </ul>

          </div>

          <div id="tab-content">

          </div>
        </div>
        {/*End Sub-Contractor Mode*/}
      </section>
      {/*End Section 1*/}

      {/*Start Footer */}
      <Footer />
      {/*End Footer */}


    </>
  );
}

export default MyTender;
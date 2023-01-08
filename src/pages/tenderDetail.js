import { Link } from "react-router-dom";
import React from "react";
import Footer from "../component/footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../component/navbar";

function TenderDetail() {

  const [toggleState, setToggleState] = React.useState(1);
  const [modal, setModal] = React.useState(false);
  const [tender, setTender] = React.useState({});
  const [company, setCompany] = React.useState({});
  //get id parameter from url from useLocation hook
  const { id } = useParams();

  const toggleModal = () => {
    setModal(!modal);
  }

  async function fetchData() {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_DOMAIN}/tender/${id}`,
      {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      }
    );
    const { data: companyData } = await axios.get(
      `${process.env.REACT_APP_API_DOMAIN}/company/${data.data[0].companyid}`,
      {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      }
    );
    setCompany(companyData.data);
    setTender(data.data[0]);
    console.log(data.data[0]);
  }

  React.useEffect(() => {
    fetchData();
  }, [id]);
  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <>
      {/*Start Header*/}
      <Navbar />
      {/*End Header*/}

      {/*Start Section 1*/}
      <section className="section has-background-white-ter">
        <nav className="panel mt-6" data-aos="fade-up">
          <p className="panel-heading has-background-primary has-text-white">
            {tender?.title?.toUpperCase()}
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
              <a onClick={toggleModal}  className="button is-success pb-2 disabled" id="place-bid"><strong>Place Bid</strong></a>

              {/*Start Modal*/}
              {modal && (
                  <div className="modal is-active" onClick={toggleModal} data-aos="zoom-in">
                    <div className="modal-background overlay-model-2"></div>
                    <div className="modal-card">
                      <header className="modal-card-head">
                        <p className="modal-card-title " id="model-title">  PURCHASE OF LAB EQUIPMENTS FOR DEPT. OF ELECTRICAL, ELECTRONIC & TELECOMMUNICATION</p>
                        <button className="delete" aria-label="close"></button>
                      </header>
                      <section className="modal-card-body">
                        <div className="card-content">
                          <div className="content">
                            <div className="field">
                              <label className="label">Reference Number</label>
                              <div className="control">
                                <input className="input" type="text" value="AHVFHB5" disabled/>
                              </div>
                            </div>

                            <div className="field mt-4">
                              <label className="label">Expectd Amount to Spend</label>
                              <div className="field has-addons has-addons">
                                <p className="control">
                                    <span className="select">
                                      <select>
                                        <option>LKR</option>
                                        <option>$</option>
                                      </select>
                                    </span>
                                </p>
                                <p className="control">
                                  <input className="input" type="text" placeholder="Amount of money"/>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <footer className="modal-card-foot">
                        <button className="button is-success"><strong>Place Bid</strong></button>
                        <button className="button">Cancel</button>
                      </footer>
                    </div>
                  </div>
              )}
              {/*End Modal*/}
            </div>
            <blockquote className="pt-1 mt-4 pb-1 has-background-white-ter">Number of bids placed for this order is <strong>3</strong></blockquote>
          </div>
          <div className="panel-block">
          </div>

          <div className="tabs is-medium ml-4 mb-0">
            <ul>
              <li onClick={(e) => toggleTab(1)} className={toggleState === 1 ? "is-active" : ""} ><a>Instructions</a></li>
              {/* <li onClick={(e) => toggleTab(2)} className={toggleState===2 ? "is-active":""} ><a>Messages</a></li> */}
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
                          <td><strong> {tender?.ref}</strong></td>

                        </tr>
                        <tr>
                          <td>Closing On</td>
                          <td>
                            <strong>
                              {new Date(tender?.expirydate).toLocaleString({ year: 'numeric', month: 'long', day: 'numeric' })}
                              <span className={` has-text-weight-bold has-text-${Math.floor((Date.parse(tender.expirydate) - Date.parse(new Date()))/86400000) < 0 ? "danger" : "primary"}`}>
                                {/* get remaining days */}
                                {" "}
                                {Math.floor((Date.parse(tender.expirydate) - Date.parse(new Date())) / 86400000) < 0 ? "Expired" : Math.floor((Date.parse(tender.expirydate) - Date.parse(new Date())) / 86400000) + " Days Left"}
                              </span>
                            </strong>
                          </td>
                        </tr>
                        <tr>
                          <td>Category</td>
                          <td><strong> {tender?.category}</strong></td>

                        </tr>
                        <tr>
                          <td>Location</td>
                          <td><strong> {tender?.location}</strong></td>
                        </tr>
                        <tr>
                          <td>Documentation</td>
                          <td>
                            <a
                              href={`${process.env.REACT_APP_API_DOMAIN}/uploads/${tender?.document}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="has-text-link">
                              {tender?.document?.split("@")[1]}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Company Name</td>
                          <td><strong>
                            <a href={`/company/${company?._id}`} className="has-text-link">{company?.name}</a>
                          </strong>&emsp;<span className="fa fa-star checked">5</span></td>
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
                    <p>
                      {tender?.description}
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
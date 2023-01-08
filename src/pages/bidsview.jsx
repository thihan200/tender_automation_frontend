import { Link } from "react-router-dom";
import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";


function BidsView({ tender, openModal, setOpenModal }) {
  const [bids, setBids] = React.useState([]);

  const getBids = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_DOMAIN}/tender/${tender.id}/bid`,
      {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      }
    );
    setBids(data.data);
  };

  React.useEffect(() => {
    getBids();
  }, [tender, openModal]);

  return (
    <React.Fragment>
      <div className="modal is-active" >
        <div className="modal-background overlay-model-2"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title " id="model-title">
              {tender?.title?.toUpperCase()}
            </p>
            <button className="delete" aria-label="close" onClick={() => setOpenModal(false)}></button>
          </header>
          <section className="modal-card-body">
            <div className="card-content">
              <div className="content">
                {bids.length > 0 && (
                <table className="table is-fullwidth is-hoverable">
                  <thead>
                    <tr>
                      <th>Candidate Company</th>
                      <th className="pl-6">Tel Number</th>
                      <th>Bid Amount</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {bids.map((tender, index) => (
                      <tr key={index}>
                        <td>
                          <p className="title is-6">{tender.name}</p>
                        </td>
                        <td className="pl-6"> {tender.tel}</td>
                        <td className="pl-6"> {tender.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                )}
                {bids.length === 0 && (
                  <div className="notification is-warning" style={{ textAlign: "center",fontWeight: "bold" }}>
                  No bids yet
                  </div>
                )}

              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button className="button" onClick={() => setOpenModal(false)}>
              Close
            </button>
          </footer>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BidsView;
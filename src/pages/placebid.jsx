import { Link } from "react-router-dom";
import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";


function PlaceBidPopUp({ tender, openModal, setOpenModal }) {
  const [bid, setBid] = React.useState({
    bidamount: 0,
  });

  const placeBid = async () => {
    if (bid.bidamount > 0) {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_DOMAIN}/tender/${tender.id}/bid`,
        bid,
        {
          headers: {
            'x-auth-token': localStorage.getItem("token"),
          },
        }
      );
      console.log(data);
      window.location.reload();
      setOpenModal(false);
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid amount!',
      })
    }
  };


  return (
    <React.Fragment>
      <div className="modal is-active" >
        <div className="modal-background overlay-model-2"></div>
        <div className="modal-card">
          <form onSubmit={(e) => {
            e.preventDefault();
            console.log(bid);
            placeBid();
          }}>
            <header className="modal-card-head">
              <p className="modal-card-title " id="model-title">
                {tender?.title?.toUpperCase()}
              </p>
              <button className="delete" aria-label="close" onClick={() => setOpenModal(false)}></button>
            </header>
            <section className="modal-card-body">
              <div className="card-content">
                <div className="content">
                  <div className="field">
                    <label className="label">Reference Number</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        value={tender?.ref}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="field mt-4">
                    <label className="label">Expectd Amount to Spend</label>
                    <div className="field has-addons has-addons">
                      <p className="control">
                        <span className="select">
                          <select disabled>
                            <option>LKR</option>
                          </select>
                        </span>
                      </p>
                      <p className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="Amount of money"
                          value={tender?.amount}
                          pattern="[0-9]*"
                          onChange={(e) => setBid({ ...bid, bidamount: e.target.value })}
                        />
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
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default PlaceBidPopUp;
import React, { useEffect, useState } from "react";
import profilePic from "../assets/profile_pic.jpg";
import axios from "axios";
import Swal from "sweetalert2";
import validator from "validator";
import Footer from "../component/footer";
import navbarImage from "../assets/full_logo.png";
import { Link } from "react-router-dom";
import Navbar from "../component/navbar";

function MyAccount() {
  const [user, setUser] = useState({});
  const [company, setCompany] = useState({});

  useEffect(() => {
    // Update the document title using the browser API
    document.title = "My Account";

    async function fetchData() {
      const res = await axios.get(
        process.env.REACT_APP_API_DOMAIN + "/user/me",
        {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      );
      setUser(res.data.data);
      console.log(res.data.data);

      const res2 = await axios.get(`${process.env.REACT_APP_API_DOMAIN}/company/${JSON.parse(localStorage.getItem("user")).companyid}`, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      }
      );

      // remove www from url
      const edited = {
        ...res2.data.data,
        url: res2.data.data.url.replace(/^https?\:\/\//i, "")
      }
      setCompany(edited);
      console.log(res2.data.data);
    }

    fetchData();
  }, []);

  const UpdateCompany = async (e) => {
    e.preventDefault();
    const cpm = { ...company };

    const { data } = await axios.patch(
      `${process.env.REACT_APP_API_DOMAIN}/company/${JSON.parse(localStorage.getItem("user")).companyid}`,
      cpm,
      {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      }
    );
    console.log(data);
    Swal.fire({
      icon: "success",
      title: "Company Updated",
      showConfirmButton: false,
      timer: 1500,
    });
  };




  return (
    <>
      {/*Start Header*/}
      <Navbar />
      {/*End Header*/}

      <section className="section" id="myAccount_Background">
        <div className="columns mt-6" data-aos="fade-up">
          <div className="column is-one-quarter has-text-centered">
            <div className="box">
              <figure className="image is-128x128 is-inline-block">
                <img class="is-rounded" src={profilePic} />
              </figure>
              <br />
              <h2 className="subtitle pt-2 mb-2">
                <strong>{user.fullname}</strong>
              </h2>
              <p>
                <strong>{company.name}</strong>
              </p>
              <p className="pt-2">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span> (X reviews)</span>
              </p>

            </div>

            <div className="box pb-5">
              <span className="span-icon"><i className="fas fa-globe-asia"></i>&nbsp; URL</span>
              <span className="span-text ">
                <a href="https://www.masholdings.com/" target="_blank"><strong
                  className="#"> {company.url}</strong></a></span>
              <br />
              <br />
              <span className="span-icon"><i className="fas fa-user"></i>&nbsp; Member since</span>
              <span
                className="span-text "><strong> {new Date(user.created_at).toLocaleDateString()}</strong></span>
              <br />
              <br />
              <span className="span-icon"><i className="fas fa-map-marker-alt"></i>&nbsp; From</span>
              <span className="span-text "><strong> {company.city}</strong></span>
              <br />
              <br />
              <span className="span-icon"><i
                className="fas fa-paper-plane"></i>&nbsp; Last Delivery</span>
              <span className="span-text"><strong>- months</strong></span>
              <br />

            </div>

          </div>
          <div className="column">
            <form className="box">
              <p className="is-size-4 pb-4 has-text-weight-bold">Your Details</p>
              <div className="field">
                <label className="label">Full Name</label>
                <p className="control has-icons-left">
                  <input className="input is-normal" type="text" defaultValue={user.fullname} />
                  <span className="icon is-small is-left">
                    <i className="fa-solid fa-user"></i>
                  </span>
                </p>
              </div>

              <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left">
                  <input className="input" type="email" defaultValue={user.email} />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
              </div>

              <div className="column has-text-centered">
                <button className="button is-warning is-rounded has-text-weight-bold">Edit Your
                  Profile
                </button>
              </div>
            </form>

            <form className="box">
              <div className="field">
                <label className="label">Password</label>
                <p className="control has-icons-left has-icons-right">
                  <input className="input" type="password" placeholder="Password" value="123456789"/>
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <label className="label">Confirm Password</label>
                <p className="control has-icons-left has-icons-right">
                  <input className="input" type="password" placeholder="Password" value="123456789"/>
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>
                </p>
              </div>
              <p className="help mt-0 has-text-grey">Note: Please enter password with at least
                8 characters</p>

              <div className="column has-text-centered">
                <button className="button is-warning is-rounded has-text-weight-bold">Change Password
                </button>
              </div>
            </form>

          </div>
          <div className="column">

            <form className="box">
              <p className="is-size-4 pb-4 has-text-weight-bold">Company Details</p>
              <div className="field">
                <label className="label">Company Name</label>
                <p className="control has-icons-left">
                  <input
                    className="input is-normal"
                    type="text"
                    value={company.name}
                    onChange={e => setCompany({ ...company, name: e.target.value })}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa-solid fa-building"></i>
                  </span>
                </p>
              </div>

              <div className="field">
                <label className="label">Owner Name</label>
                <p className="control has-icons-left">
                  <input
                    className="input is-normal"
                    type="text"
                    value={company.ownername}
                    onChange={e => setCompany({ ...company, ownername: e.target.value })}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa-solid fa-user"></i>
                  </span>
                </p>
              </div>


              <div className="field">
                <label className="label">Company Address</label>
                <p className="control has-icons-left">
                  <input
                    className="input is-normal"
                    type="text"
                    value={company.address}
                    onChange={e => setCompany({ ...company, address: e.target.value })}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa-solid fa-address-book"></i>
                  </span>
                </p>
              </div>

              <div className="field">
                <label className="label">Company Web URL</label>
                <p className="control has-icons-left">
                  <input
                    className="input is-normal"
                    type="url"
                    value={company.url}
                    onChange={e => setCompany({ ...company, url: e.target.value })}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa-solid fa-address-book"></i>
                  </span>
                </p>
              </div>

              <div className="field">

                <label className="label">Telephone Number</label>
                <p className="control has-icons-left">
                  <input
                    className="input is-normal"
                    type="tel"
                    value={company.tel}
                    onChange={e => setCompany({ ...company, tel: e.target.value })}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-tty"></i>
                  </span>
                </p>
              </div>
              <div className="field">

                <label className="label">Province</label>
                <div className="select">
                  <select value={company.city} onChange={e => setCompany({ ...company, city: e.target.value })}>
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

              <div className="column has-text-centered">
                <button
                  className="button is-warning is-rounded has-text-weight-bold"
                  onClick={UpdateCompany}
                >Edit Company
                  Details
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>

      {/*Start Footer */}
      <Footer />
      {/*End Footer */}
    </>
  );

}

export default MyAccount;
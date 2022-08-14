import navbarImage from "../assets/full_logo.png";
import signup_image from "../assets/sign_up.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import validator from 'validator';

import Footer from "../component/footer.jsx";

function Signup() {
    const [uemail, Setuemail] = useState("");
    const [fullName, SetfullName] = useState("");
    const [password, Setpassword] = useState("");
    const [confirmPassword, SetconfirmPassword] = useState("");
    const [companyName, SetCompanyName] = useState("");
    const [ownerName, SetownerName] = useState("");
    const [companyAddress, SetcompanyAddress] = useState("");
    const [companyUrl, SetcompanyUrl] = useState("");
    const [telNo, SettelNo] = useState("");
    const [atype, Setatype] = useState("");
    const [interests, Setinterests] = useState("");
    const [province, Setprovince] = useState("");

    const [isEmailValid, SetisEmailValid] = useState(false);
    useEffect(() => {
    }, []);

    useEffect(() => {
        console.log(uemail);
        if (uemail.length === 0) {
            SetisEmailValid(false);
            return;
        }
        if (validator.isEmail(uemail)) {
            SetisEmailValid(true);
            axios.post(process.env.REACT_APP_API_DOMAIN + "/user/is-email-available", {
                email: uemail
            }).then(res => {
                if (res.data.data) {
                    SetisEmailValid(true);
                } else {
                    SetisEmailValid(false);
                }
            }).catch(err => {
                console.log(err);
            });
        } else {
            SetisEmailValid(false);
        }
    }, [uemail]);

    const UserSignup = (e) => {
        e.preventDefault();
        const user = {
            email: uemail,
            password: password,
            fullname: fullName,
        };
        if(password !== confirmPassword || password.length < 8){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password does not match! or password is less than 8 characters',
            })
            return;
        }
        axios.post(process.env.REACT_APP_API_DOMAIN + "/user/register", user).then(async (res) => {
            console.log(res);
            const { data } = await axios.post(process.env.REACT_APP_API_DOMAIN + "/user/sign-in", user);
            console.log(data);
            const token = data.data.token;
            console.log(token);
            const body = {
                name: companyName,
                ownername: ownerName,
                address: companyAddress,
                city: province,
                url: companyUrl,
                tel: telNo,
                type: atype,
                category: interests,
            }
            axios.post(process.env.REACT_APP_API_DOMAIN + "/company", body, {
                headers: {
                    "x-auth-token": token,
                },
            }).then(async (res) => {
                console.log(res);
                Swal.fire({
                    title: 'Success',
                    text: 'You have successfully registered',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    
                }).catch(err => {
                    console.log(err);
                }
                );
            });

        }).then(() => {
            console.log("done");
        });
    }

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

                            <Link className="navbar-item" to="/tender">
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

            {/*Section Start*/}
            <section className="section" id="signup_background">
                <div className="container">
                    <div className="notification is-white" id="signup_container">
                        <div className="columns is-gapless">
                            <div className="column">
                                <form className="box" onSubmit={UserSignup}>
                                    <div className="column" id="createAccountColumn">
                                        <p className="label" id="createAccountText">Create an Account</p>
                                    </div>
                                    <div className="field">
                                        <label className="label">Email</label>
                                        <p className="control has-icons-left has-icons-right">
                                            <input className="input" type="email" value={uemail}
                                                onChange={(e) => { Setuemail(e.target.value) }}
                                                placeholder="e.g. alexsmith@gmail.com" />
                                            <span className="icon is-small is-left">
                                                <i className="fas fa-envelope"></i>
                                            </span>
                                            {isEmailValid &&
                                            <span className="icon is-small is-right">
                                                <i className="fas fa-check"></i>
                                            </span>
                                            }
                                            {!isEmailValid &&
                                            <span className="icon is-small is-right">
                                                <i className="fas fa-times"></i>
                                            </span>
                                            }
                                        </p>
                                        {!isEmailValid && <p className="help is-danger">Email is already taken or invalid</p>}
                                    </div>
                                    <div className="field">
                                        <label className="label">Full Name</label>
                                        <p className="control has-icons-left">
                                            <input className="input is-normal" type="text" value={fullName}
                                                onChange={(e) => { SetfullName(e.target.value) }}
                                                placeholder="e.g Alex Smith" />
                                            <span className="icon is-small is-left">
                                                <i className="fa-solid fa-user"></i>
                                            </span>
                                        </p>
                                    </div>
                                    <div className="field">
                                        <div className="columns mb-0">
                                            <div className="column">
                                                <label className="label">Password</label>
                                                <p className="control has-icons-left">
                                                    <input className="input" type="password" value={password}
                                                        onChange={(e) => { Setpassword(e.target.value) }}
                                                        placeholder="Password" />
                                                    <span className="icon is-small is-left">
                                                        <i className="fas fa-lock"></i>
                                                    </span>
                                                    <span className="icon is-small is-right">
                                                        <i className="fas fa-check"></i>
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="column">
                                                <label className="label">Confirm Password</label>
                                                <p className="control has-icons-left">
                                                    <input className="input" type="password" value={confirmPassword}
                                                        onChange={(e) => { SetconfirmPassword(e.target.value) }}
                                                        placeholder="Password" />
                                                    <span className="icon is-small is-left">
                                                        <i className="fas fa-lock"></i>
                                                    </span>
                                                    <span className="icon is-small is-right">
                                                        <i className="fas fa-check"></i>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <p className="help mt-0 has-text-grey">Note: Please enter password with at least
                                            8 characters</p>
                                    </div>
                                    <hr />
                                    <div className="field">
                                        <label className="label">Company Name</label>
                                        <p className="control has-icons-left">
                                            <input className="input is-normal" type="text" value={companyName}
                                                onChange={(e) => { SetCompanyName(e.target.value) }}
                                                placeholder="e.g. Asia Lanka Private Limited" />
                                            <span className="icon is-small is-left">
                                                <i className="fa-solid fa-building"></i>
                                            </span>
                                        </p>
                                    </div>
                                    <div className="field">
                                        <label className="label">Owner Name</label>
                                        <p className="control has-icons-left">
                                            <input className="input is-normal" type="text" value={ownerName}
                                                onChange={(e) => { SetownerName(e.target.value) }}
                                                placeholder="e.g Alex Smith" />
                                            <span className="icon is-small is-left">
                                                <i className="fa-solid fa-user"></i>
                                            </span>
                                        </p>
                                    </div>
                                    <div className="field">
                                        <label className="label">Company Address</label>
                                        <p className="control has-icons-left">
                                            <input className="input is-normal" type="text" value={companyAddress}
                                                onChange={(e) => { SetcompanyAddress(e.target.value) }}
                                                placeholder="No.220/A, Temple Rd, Nagoda, Kalutara" />
                                            <span className="icon is-small is-left">
                                                <i className="fa-solid fa-address-book"></i>
                                            </span>
                                        </p>
                                    </div>
                                    <div className="field">
                                        <label className="label">Company Web URL</label>
                                        <p className="control has-icons-left">
                                            <input className="input is-normal" type="url" value={companyUrl}
                                                onChange={(e) => { SetcompanyUrl(e.target.value) }}
                                                placeholder="e.g. www.example.com" />
                                            <span className="icon is-small is-left">
                                                <i className="fa-solid fa-address-book"></i>
                                            </span>
                                        </p>
                                    </div>
                                    <div className="field">
                                        <div className="columns">
                                            <div className="column">
                                                <label className="label">Telephone Number</label>
                                                <p className="control has-icons-left">
                                                    <input className="input is-normal" 
                                                        type="tel" 
                                                        value={telNo}
                                                        pattern="[0-9]{10}"
                                                        onChange={(e) => { SettelNo(e.target.value) }}
                                                        placeholder="e.g. 0714444214" />
                                                    <span className="icon is-small is-left">
                                                        <i className="fas fa-tty"></i>
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="column">
                                                <label className="label">Account Type</label>
                                                <div className="select">
                                                    <select value={atype} onChange={(e) => { Setatype(e.target.value) }}>
                                                        <option disabled selected>Select Your Type</option>
                                                        <option>Contractor</option>
                                                        <option>Sub-Contractor</option>

                                                    </select>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="columns">
                                            <div className="column">
                                                <label className="label">Tenders Interested In</label>
                                                <div className="select">
                                                    <select value={interests}
                                                        onChange={(e) => { Setinterests(e.target.value) }}>
                                                        <option disabled selected>Select Your Interest</option>
                                                        <option value="Education">Education</option>
                                                        <option value="Packaging">Packaging</option>
                                                        <option value="Supplier Registration">Supplier Registration
                                                        </option>
                                                        <option value="Services">Services</option>
                                                        <option value="Medical">Medical</option>
                                                        <option value="Expression of Interests(EOI)">Expression of
                                                            Interests(EOI)
                                                        </option>
                                                        <option value="Engineering and Constructions">Engineering and
                                                            Constructions
                                                        </option>
                                                        <option value="Automobile and Transport">Automobile and
                                                            Transport
                                                        </option>
                                                        <option value="IT and Electronics">IT and Electronics</option>
                                                        <option value="Power and Energy">Power and Energy</option>
                                                        <option value="Aviation">Aviation</option>
                                                        <option value="Hardware, Machinery and Equipment">Hardware,
                                                            Machinery and Equipment
                                                        </option>
                                                        <option value="Agriculture and Food">Agriculture and Food
                                                        </option>
                                                        <option value="Hardware, Machinery and Equipment">Hardware,
                                                            Machinery and Equipment
                                                        </option>
                                                        <option
                                                            value="Printing, Packaging, Advertising and Stationeries">Printing,
                                                            Packaging, Advertising and Stationeries
                                                        </option>
                                                        <option value="Hotel and Hospitality">Hotel and Hospitality
                                                        </option>
                                                        <option value="Miscellaneous">Miscellaneous</option>
                                                        <option value="Furniture">Furniture</option>
                                                        <option value="Sales and Auctions">Sales and Auctions</option>
                                                        <option value="Lands and Properties">Lands and Properties
                                                        </option>
                                                        <option value="Apparels and related Products">Apparels and
                                                            related Products
                                                        </option>
                                                        <option value="Timber and Related Services">Timber and Related
                                                            Services
                                                        </option>
                                                        <option
                                                            value="Distributors/Partnerships">Distributors/Partnerships
                                                        </option>
                                                        <option value="Chemicals and Related Services">Chemicals and
                                                            Related Services
                                                        </option>
                                                        <option value="Sport Related Items">Sport Related Items</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="column">
                                                <label className="label">Province</label>
                                                <div className="select">
                                                    <select value={province}
                                                        onChange={(e) => { Setprovince(e.target.value) }}>
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
                                        </div>
                                    </div>
                                    <div className="column has-text-centered">
                                        <button
                                            className="button is-primary is-rounded"
                                            id="signup_button"
                                            // onClick={(e) => {
                                            //     UserSignup(e)
                                            // }}
                                            type="submit"
                                        >
                                            Create YourAccount
                                        </button>
                                    </div>
                                    <div className="column" id="alreadyText">
                                        <p className="has-text-centered">Already Have an Account ? <span
                                            className="has-text-weight-bold"><Link to="/sign-in">Login</Link></span></p>
                                    </div>
                                </form>
                            </div>
                            <div className="column" id="signup_right_side">
                                <div className="is-rounded is-align-items-center" id="round_1">
                                    <div className="is-rounded is-align-items-center" id="round_2">
                                        <img src={signup_image} alt="logo pic" id="signup_pic" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*Section End*/}


            {/*Start Footer*/}
            <Footer />
            {/*End Footer */}


        </>
    );

}

export default Signup;
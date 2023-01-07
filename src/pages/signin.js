import { useState, useEffect } from "react";
import navbarImage from "../assets/full_logo.png";
import { Link } from "react-router-dom";
import signin_image from "../assets/sign_in.svg";
import Footer from "../component/footer.jsx";
import validator from "validator";
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../component/navbar";

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    /*
        useEffect(() => {
            // Update the document title using the browser API
            console.log('In use Effect');
        },[]);
    */
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        if (!validator.isEmail(email)) {
            setError("Invalid Email");
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Invalid Email",
            });
            return;
        }
        if (password.trim().length === 0) {
            setError("Invalid Password");
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Invalid Password",
            });
            return;
        }
        axios.post(process.env.REACT_APP_API_DOMAIN + "/user/sign-in", {
            email,
            password,
        }).then((res) => {
            console.log(res);
            if (res.data.error) {
                setError(res.data.error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: res.data.error,
                });
            } else {
                localStorage.setItem("token", res.data.data.token);
                localStorage.setItem("user", JSON.stringify(res.data.data.user));
                setTimeout(() => {
                    window.location.href = "/my-tender";
                }, 20);

            }
        }).catch((err) => {
            setLoading(false);
            console.log(err);
        }
        );
    }


    return (
        <>
            {/* Page Loading Start*/}

            {/*Page Loading End*/}
            {/*Start Header*/}
            <Navbar />
            {/*End Header*/}

            {/*Section Start*/}
            <section className="section " id="signup_background" >
                <div className="column is-three-fifths is-offset-one-fifth" id="signin_container" data-aos="fade-up">
                    <div className="notification is-white" id="signup_container">
                        <div className="columns is-gapless ">
                            <div className="column is-half">
                                <form className="box" onSubmit={(e) => handleSubmit(e)}>
                                    <div className="column" id="createAccountColumn">
                                        <p className="label" id="createAccountText">Welcome Back !</p>
                                    </div>
                                    <div className="field">
                                        <label className="label has-text-grey">Email</label>
                                        <p className="control has-icons-left has-icons-right">
                                            <input className="input" type="email" onChange={(e) => setEmail(e.target.value)}
                                                placeholder="alexsmith@gmail.com" />
                                            <span className="icon is-small is-left">
                                                <i className="fas fa-envelope"></i>
                                            </span>
                                            <span className="icon is-small is-right">
                                                <i className="fas fa-check"></i>
                                            </span>
                                        </p>
                                    </div>

                                    <div className="field">
                                        <label className="label">Password</label>
                                        <p className="control has-icons-left has-icons-right">
                                            <input className="input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                            <span className="icon is-small is-left">
                                                <i className="fas fa-lock"></i>
                                            </span>
                                            <span className="icon is-small is-right">
                                                <i className="fas fa-check"></i>
                                            </span>
                                        </p>

                                    </div>

                                    <div className="column has-text-centered">
                                        <button className="button is-primary is-rounded" id="signup_button">Login
                                        </button>
                                    </div>
                                    <div className="column" id="alreadyText">
                                        <p className="has-text-centered">Don't you have an Account ? <span
                                            className="has-text-weight-bold"><Link to="/sign-up">Signup</Link></span>
                                        </p>
                                    </div>
                                </form>
                            </div>
                            <div className="column" id="signup_right_side">
                                <div className="is-rounded is-align-items-center" id="signin_round_1">
                                    <div className="is-rounded is-align-items-center" id="signin_round_2">
                                        <img src={signin_image} alt="logo pic" id="signup_pic" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*Section End*/}

            {/*Start Footer */}
            <Footer />
            {/*End Footer */}

        </>
    );

}

export default Signin;
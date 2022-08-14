import Navbar2 from "../component/navbar2";
import profilePic from "../assets/profile_pic.jpg";
import profilePic2 from "../assets/profilepic_2.PNG";
import profilePic3 from "../assets/profilepic_3.PNG";
import profilePic4 from "../assets/profilepic_4.PNG";

function MyAccount() {
    return (
        <>
            {/*Start Header*/}
            <Navbar2/>
            {/*End Header*/}

            <section className="section" id="myAccount_Background">
                <div className="columns mt-6">
                    <div className="column is-one-quarter has-text-centered">
                        <div className="box">
                            <figure className="image is-128x128 is-inline-block">
                                <img class="is-rounded" src={profilePic}/>
                            </figure>
                            <br/>
                            <h2 className="subtitle pt-2 mb-2">
                                <strong>John David</strong>
                            </h2>
                            <p>
                                MAS Holding (Pvt) Ltd
                            </p>
                            <p className="pt-2">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span> (3 reviews)</span>
                            </p>

                        </div>

                        <div className="box pb-5">
                            <span className="span-icon"><i className="fas fa-globe-asia"></i>&nbsp; URL</span>
                            <span className="span-text ">
                                <a href="https://www.masholdings.com/" target="_blank"><strong className="#">www.masholdings.com</strong></a></span>
                            <br/>
                            <br/>
                            <span className="span-icon"><i className="fas fa-user"></i>&nbsp; Member since</span>
                            <span className="span-text "><strong>Nov 2021</strong></span>
                            <br/>
                            <br/>
                            <span className="span-icon"><i className="fas fa-map-marker-alt"></i>&nbsp; From</span>
                            <span className="span-text "><strong>Western Province</strong></span>
                            <br/>
                            <br/>
                            <span className="span-icon"><i
                                className="fas fa-paper-plane"></i>&nbsp; Last Delivery</span>
                            <span className="span-text"><strong>4 months</strong></span>
                            <br/>

                        </div>

                    </div>
                    <div className="column">
                        <form className="box">
                            <div className="field">
                                <label className="label">Full Name</label>
                                <p className="control has-icons-left">
                                    <input className="input is-normal" type="text" value="John David" disabled/>
                                    <span className="icon is-small is-left">
                                        <i className="fa-solid fa-user"></i>
                                    </span>
                                </p>
                            </div>

                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control has-icons-left">
                                    <input className="input" type="email" value="john200@gmail.com" disabled/>
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Company Name</label>
                                <p className="control has-icons-left">
                                    <input className="input is-normal" type="text"
                                           value="Asia Lanka Private Limited" disabled/>
                                    <span className="icon is-small is-left">
                                        <i className="fa-solid fa-building"></i>
                                    </span>
                                </p>
                            </div>

                            <div className="field">
                                <label className="label">Company Address</label>
                                <p className="control has-icons-left">
                                    <input className="input is-normal" type="text"
                                           value="N0 289/A, Maradana, Colombo 10" disabled/>
                                    <span className="icon is-small is-left">
                                        <i className="fa-solid fa-address-book"></i>
                                    </span>
                                </p>
                            </div>

                            <div className="field">
                                <label className="label">Company Web URL</label>
                                <p className="control has-icons-left">
                                    <input className="input is-normal" type="url"
                                           value="www.masholdings.com" disabled/>
                                    <span className="icon is-small is-left">
                                        <i className="fa-solid fa-address-book"></i>
                                    </span>
                                </p>
                            </div>

                            <div className="field">
                                <label className="label">Telephone Number</label>
                                <p className="control has-icons-left">
                                    <input className="input is-normal" type="tel" value="0714444214" disabled/>
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-tty"></i>
                                    </span>
                                </p>
                            </div>

                            <div className="field">
                                <label className="label">Province</label>
                                <p className="control has-icons-left">
                                    <input className="input is-normal" type="text"
                                           value="Western Province" disabled/>
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-location"></i>
                                    </span>
                                </p>
                            </div>

                            <div className="column has-text-centered">
                                <button className="button is-warning is-rounded has-text-weight-bold">Edit Your Profile</button>
                            </div>
                        </form>
                    </div>
                    <div className="column">
                        <div className="box">
                            <p className="is-size-4 has-text-weight-bold">Reviews For You</p>
                            <div className="box mt-4">
                                <article className="media">
                                    <div className="media-left">
                                        <figure className="image is-64x64 ">
                                            <img className="is-rounded" src={profilePic2} alt="Image"/>
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>John Smith</strong>&emsp;<span className="fa fa-star checked">5</span>
                                                <p className="mt-2">
                                                Fast, efficient and professional.
                                                I was very satisfied with communication and product delivery.
                                                Thank you!
                                                </p>
                                            </p>
                                        </div>
                                        <p className="has-text-grey-light">Published 4 months ago</p>
                                    </div>
                                </article>
                            </div>

                            <div className="box mt-4">
                                <article className="media">
                                    <div className="media-left">
                                        <figure className="image is-64x64 ">
                                            <img className="is-rounded" src={profilePic3} alt="Image"/>
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>John Smith</strong>&emsp;<span className="fa fa-star checked">4.8</span>
                                                <p className="mt-2">
                                                    Excellent customer service. Excellent product. Quick delivery. Pleasure.
                                                </p>
                                            </p>
                                        </div>
                                        <p className="has-text-grey-light">Published 2 months ago</p>
                                    </div>
                                </article>
                            </div>

                            <div className="box mt-4">
                                <article className="media">
                                    <div className="media-left">
                                        <figure className="image is-64x64 ">
                                            <img className="is-rounded" src={profilePic4} alt="Image"/>
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>John Smith</strong>&emsp;<span className="fa fa-star checked">4.5</span>
                                                <p className="mt-2">
                                                    Good customer service. efficient and professional. Thank you!!
                                                </p>
                                            </p>
                                        </div>
                                        <p className="has-text-grey-light">Published 20 days ago</p>
                                    </div>
                                </article>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default MyAccount;
import Navbar2 from "../component/navbar2";
import profilePic2 from "../assets/profilepic_2.PNG";
import profilePic3 from "../assets/profilepic_3.PNG";
import profilePic4 from "../assets/profilepic_4.PNG";

function MyReview() {
    return(
        <>
            {/*Start Header*/}
            <Navbar2/>
            {/*End Header*/}

            {/*Start Section 1*/}
            <section className="section" id="myAccount_Background">
                <div className="columns">
                <div className="column mt-6 is-two-fifths">
                    <div className="box">
                        <div className="columns">
                            <div className="column is-two-fifths has-text-centered">
                                <p className="is-size-2 has-text-weight-bold">4.5/5</p>
                                <p className="is-size-6  has-text-grey">(4 Reviews)</p>
                                <p className="pt-2">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star-half-full checked"></span>

                                </p>

                            </div>
                            <div className="column">
                                <div className="progress-container " data-text="(3)">
                                    <div className="progress-container2 has-text-weight-bold" data-text="5 Star">
                                    <progress className="progress is-warning " value="80" max="100">

                                    </progress>
                                    </div>
                                </div>

                                <div className="progress-container mt-4" data-text="(1)">
                                    <div className="progress-container2 has-text-weight-bold" data-text="4 Star">
                                        <progress className="progress is-warning " value="20" max="100">

                                        </progress>
                                    </div>
                                </div>

                                <div className="progress-container mt-4" data-text="(0)">
                                    <div className="progress-container2 has-text-weight-bold" data-text="3 Star">
                                        <progress className="progress is-warning " value="0" max="100">

                                        </progress>
                                    </div>
                                </div>

                                <div className="progress-container mt-4" data-text="(0)">
                                    <div className="progress-container2 has-text-weight-bold" data-text="2 Star">
                                        <progress className="progress is-warning " value="0" max="100">

                                        </progress>
                                    </div>
                                </div>

                                <div className="progress-container mt-4" data-text="(0)">
                                    <div className="progress-container2 has-text-weight-bold" data-text="1 Star">
                                        <progress className="progress is-warning " value="0" max="100">

                                        </progress>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                    <div className="box">
                        <p className="is-size-4 has-text-weight-bold">Reviews By You</p>
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
                                            <strong>John Smith</strong>&emsp;<span className="fa fa-star checked">4.5</span>
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
                    <div className="column mt-6">
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
                                                <strong>World XL (Pvt) Ltd</strong>&emsp;<span className="fa fa-star checked">5</span>
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
                                                <strong>Grandeeza (Pvt) Ltd</strong>&emsp;<span className="fa fa-star checked">4.5</span>
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
                                                <strong>Zajeed Works (Pvt) Ltd</strong>&emsp;<span className="fa fa-star checked">4.5</span>
                                                <p className="mt-2">
                                                    Good customer service. efficient and professional. Thank you!!
                                                </p>
                                            </p>
                                        </div>
                                        <p className="has-text-grey-light">Published 20 days ago</p>
                                    </div>
                                    <nav className="level is-mobile">
                                        <div className="level-left">
                                            <a className="level-item is-danger" aria-label="like">
                                                <span className="icon is-small">
                                                  <i className="fas fa-heart " aria-hidden="true"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </nav>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End Section 1*/}
        </>
    );

}
export default MyReview;
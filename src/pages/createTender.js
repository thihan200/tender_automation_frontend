import Footer from "../component/footer";
import navbarImage from "../assets/full_logo.png";
import {Link} from "react-router-dom";
import Navbar2 from "../component/navbar2";


function CreateTender() {
    return (
        <>

            {/*Start Header*/}
           <Navbar2/>
            {/*End Header*/}

            {/*Start Section 1*/}
            <section className="section" id="post-tender-background">
                <div className="columns is-justify-content-center">
                    <div className="column is-two-thirds ">
                        <form className="box" id="tender-post-form">
                            <h2 className="subtitle is-size-4 has-text-centered has-text-weight-bold">
                                Create Your Tender
                            </h2>
                            <div className="field">
                                <label className="label">Tender Title</label>
                                <div className="control">
                                    <input className="input is-primary" type="text"
                                           placeholder="e.g. Supply of Medical Equipment"/>
                                </div>
                            </div>

                            <div className="columns">
                                <div className="column">
                                    <div className="field">
                                        <label className="label">Your Tender Type</label>
                                        <div className="select is-primary">
                                            <select>
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
                                </div>
                                <div className="column">
                                    <label className="label">Province</label>
                                    <div className="select is-primary">
                                        <select>
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
                            <div className="columns">
                                <div className="column">
                                    <label className="label">Publishing Date</label>
                                    <input className="input is-primary" type="date"/>
                                </div>
                                <div className="column">
                                    <label className="label">Closing Date</label>
                                    <input className="input is-primary" type="date"/>
                                </div>
                            </div>

                            <div className="file has-name is-info">
                                <label className="file-label">
                                    <input className="file-input" type="file" name="resume"/>
                                    <span className="file-cta">
                                          <span className="file-icon">
                                            <i className="fas fa-upload"></i>
                                          </span>
                                          <span className="file-label">
                                            Upload Your Picture…
                                          </span>
                                        </span>
                                    <span className="file-name">
                                        </span>
                                </label>
                            </div>
                            <br/>

                            <div className="file has-name is-boxed is-warning">
                                <label className="file-label">
                                    <input className="file-input" type="file" name="resume"/>
                                    <span className="file-cta">
                                          <span className="file-icon">
                                            <i className="fas fa-upload"></i>
                                          </span>
                                          <span className="file-label">
                                            Upload Tender file…
                                          </span>
                                        </span>
                                    <span className="file-name">

                                        </span>
                                </label>
                            </div>
                            <br/>
                            <label className="label">Description About Tender</label>
                            <textarea className="textarea is-primary" placeholder="Our tender is.."></textarea>

                            <div className="mt-4 column has-text-centered">
                                <button className="button is-primary is-size-6	has-text-weight-bold">Create Your Tender</button>
                            </div>
                        </form>
                    </div>
                </div>

            </section>

            {/*End Section 1*/}

            {/*Start Footer */}
            <Footer />
            {/*End Footer */}


        </>


    );

}

export default CreateTender;
function CreateTender() {
    return (
        <form>

            <div class="container is-max-desktop">
                <div class="notification">
                    <b>Title:</b>
                    <input
                        required
                        class="input"
                        type="text"
                        placeholder="Enter the Title"
                        onChange={(e) => {
                            // setCompanyName(e.target.value)
                        }}
                    >
                    </input>
                    <b>Catogory:</b>
                    <div class="field has-addons">
                        <div class="control is-expanded">
                            <div class="select is-normal">
                                <select name="District">
                                    <option value="Education">Education</option>
                                    <option value="Packaging">Packaging</option>
                                    <option value="Supplier Registration">Supplier Registration</option>
                                    <option value="Services">Services</option>
                                    <option value="Medical">Medical</option>
                                    <option value="Expression of Interests(EOI)">Expression of Interests(EOI)</option>
                                    <option value="Eninnering and Constructions">Eninnering and Constructions</option>
                                    <option value="Automobile and Trasport">Automobile and Trasport</option>
                                    <option value="IT and Electronics">IT and Electronics</option>
                                    <option value="Power and Energy">Power and Energy</option>
                                    <option value="Aviation">Aviation</option>
                                    <option value="Hardware, Machinery and Equipment">Hardware, Machinery and Equipment</option>
                                    <option value="Agriculture and Food">Agriculture and Food</option>
                                    <option value="Hardware, Machinery and Equipment">Hardware, Machinery and Equipment</option>
                                    <option value="Printing, Packaging, Advertising and Stationeries">Printing, Packaging, Advertising and Stationeries</option>
                                    <option value="Hotel and Hospitality">Hotel and Hospitality</option>
                                    <option value="Miscellaneous">Miscellaneous</option>
                                    <option value="Furniture">Furniture</option>
                                    <option value="Sales and Auctions">Sales and Auctions</option>
                                    <option value="Lands and Propertiesa">Lands and Properties</option>
                                    <option value="Apparels and related Products">Apparels and related Products</option>
                                    <option value="Timber and Related Services">Timber and Related Services</option>
                                    <option value="Distibutors/Partnerships">Distibutors/Partnerships</option>
                                    <option value="Chemicals and Related Services">Chemicals and Related Services</option>
                                    <option value="Sport Related Items">Sport Related Items</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <b>Location:</b>

                    <div class="field has-addons">
                        <div class="control is-expanded">
                            <div class="select is-normal">
                                <select name="District">
                                    <option value="Colombo">Colombo</option>
                                    <option value="Gampaha">Gampaha</option>
                                    <option value="Kaluthara">Kaluthara</option>
                                    <option value="Kandy">Kandy</option>
                                    <option value="Matale">Matale</option>
                                    <option value="Nuwara-Eliya">Nuwara-Eliya</option>
                                    <option value="Galle">Galle</option>
                                    <option value="Matara">Matara</option>
                                    <option value="Anuradhapura">Anuradhapura</option>
                                    <option value="Polonnaruwa">Polonnaruwa</option>
                                    <option value="Hambantota">Hambantota</option>
                                    <option value="Jaffna">Jaffna</option>
                                    <option value="Kilinochchi">Kilinochchi</option>
                                    <option value="Mannar">Mannar</option>
                                    <option value="Vavniya">Vavniya</option>
                                    <option value="Mullative">Mullative</option>
                                    <option value="Batticola">Batticola</option>
                                    <option value="Ampara">Ampara</option>
                                    <option value="Trincomalee">Trincomalee</option>
                                    <option value="Kurunegala">Kurunegala</option>
                                    <option value="Puttalam">Puttalam</option>
                                    <option value="Badulla">Badulla</option>
                                    <option value="Monaragala">Monaragala</option>
                                    <option value="Ratnapura">Ratnapura</option>
                                    <option value="Kegalle">Kegalle</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br></br>

            <div class="container is-max-desktop">
                <div class="notification">
                    <b> Publishing Date:</b>
                    <div><input style={{ color: "black", fontFamily: "Sans-Serif", padding: "10px", fontSize: "15px" }} class="is-info" type="datetime-local" ></input></div>
                    <b> Expire Date:</b>
                    <div><input style={{ color: "black", fontFamily: "Sans-Serif", padding: "10px", fontSize: "15px" }} type="datetime-local"></input></div>
                </div>
                <br />

                <div class="file">
                    <label class="file-label">
                        <input class="file-input" type="file" name="resume" />
                        <span class="file-cta">
                            <span class="file-label">
                                Add a Photo
                            </span>
                        </span>
                    </label>
                </div>
                <br />
                <div class="file">
                    <label class="file-label">
                        <input class="file-input" type="file" name="resume" />
                        <span class="file-cta">
                            <span class="file-label">
                                Add Documents
                            </span>
                        </span>
                    </label>
                </div>
                <br />
                <b>Description:</b>
                <div class="control">
                    <textarea class="textarea" placeholder="Addissional Information"></textarea>
                </div><br />
                <div class="buttons">
                    <button class="button is-primary">Post My Add</button>
                </div>
            </div>
        </form>


    );

}

export default CreateTender;
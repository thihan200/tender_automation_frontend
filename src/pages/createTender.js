import Footer from "../component/footer";
import navbarImage from "../assets/full_logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import categories from "../data/categories.json";
import profilePic from "../assets/profile_pic.jpg";
import Navbar from "../component/navbar";
import PlaceBidPopUp from "../pages/placebid";

function CreateTender() {
    const [tenderTitle, setTenderTitle] = useState("");
    const [tenderType, setTenderType] = useState("Select Your Interest");
    const [publishDate, setPublishDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [province, setProvince] = useState("Select Your Province");

    const [image, setImage] = useState("");
    const [imageUrl, setImageUrl] = useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState('');

    const [attachment, setAttachment] = useState("");
    const [attachmentUrl, setAttachmentUrl] = useState(null);
    const [attachmentPreviewUrl, setAttachmentPreviewUrl] = useState('');

    const [description, setDescription] = useState("");

    useEffect(() => {
        console.log("endDate", endDate);
    }, [endDate]);

    const getHTMLdate = () => {
        const today = new Date();
        var d = new Date(today),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await axios.post(`${process.env.REACT_APP_API_DOMAIN}/tender`, {
            title: tenderTitle,
            description: description,
            category: tenderType,
            location: province,
            expirydate: endDate,
            image: imageUrl,
            document: attachmentUrl,
        }, {
            headers: {
                'x-auth-token': localStorage.getItem("token"),
            }
        });
        if (res.data.error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: res.data.error.message,
            })
        } else {
            Swal.fire({
                title: "Success",
                text: "Tender Created Successfully",
                icon: "success",
                confirmButtonText: "OK",
            });
        }



    }
    return (
        <>

            {/*Start Header*/}
            <Navbar />
            {/*End Header*/}

            {/*Start Section 1*/}
            <section className="section" id="post-tender-background">
                <div className="columns is-justify-content-center" data-aos="fade-up">
                    <div className="column is-two-thirds ">
                        <form className="box" id="tender-post-form" onSubmit={handleSubmit}>
                            <h2 className="subtitle is-size-4 has-text-centered has-text-weight-bold">
                                Create Your Tender
                            </h2>
                            <div className="field">
                                <label className="label">Tender Title</label>
                                <div className="control">
                                    <input className="input is-primary" type="text"
                                        value={tenderTitle}
                                        onChange={(e) => setTenderTitle(e.target.value)}
                                        placeholder="e.g. Supply of Medical Equipment" />
                                </div>
                            </div>

                            <div className="columns">
                                <div className="column">
                                    <div className="field">
                                        <label className="label">Your Tender Type</label>
                                        <div className="select is-primary">
                                            <select
                                                onChange={(e) => setTenderType(e.target.value)}
                                                value={tenderType}
                                            >
                                                <option disabled selected>Select Your Interest</option>
                                                {categories.map((category) => (
                                                    <option value={category}>{category}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <label className="label">Province</label>
                                    <div className="select is-primary">
                                        <select
                                            onChange={(e) => setProvince(e.target.value)}
                                            defaultValue="Select Your Province"
                                            value={province}
                                        >
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
                                    <input
                                        className="input is-primary"
                                        type="date"
                                        value={getHTMLdate()}
                                        onChange={(e) => setPublishDate(e.target.value)}
                                        disabled={true}
                                    />
                                </div>
                                <div className="column">
                                    <label className="label">Closing Date</label>
                                    <input
                                        className="input is-primary"
                                        type="date"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        min={getHTMLdate()}
                                    />

                                </div>
                            </div>

                            <div className="file has-name is-info">
                                <label className="file-label">
                                    <input
                                        className="file-input"
                                        type="file"
                                        name="resume"
                                        accept="image/*"
                                        onChange={(e) => {
                                            //
                                            const reader = new FileReader();
                                            reader.onloadend = () => {
                                                setImagePreviewUrl(reader.result);
                                            }
                                            reader.readAsDataURL(e.target.files[0]);
                                            console.log(e.target.files[0]);
                                            const formData = new FormData();
                                            formData.append('file', e.target.files[0]);
                                            axios.post(`${process.env.REACT_APP_API_DOMAIN}/file-upload`, formData, {
                                                headers: {
                                                    'Content-Type': 'multipart/form-data',
                                                    'x-auth-token': localStorage.getItem('token')
                                                }
                                            }).then((res) => {
                                                console.log(res.data);
                                                // set filename to file
                                                setImage(e.target.files[0].name);
                                                setImageUrl(res.data.data);
                                            });
                                        }}
                                    />
                                    <span className="file-cta">
                                        <span className="file-icon">
                                            <i className="fas fa-upload"></i>
                                        </span>
                                        <span className="file-label">
                                            Upload Your Picture…
                                        </span>
                                    </span>
                                    <span className="file-name" style={{ width: '100%' }}>
                                        {image ? image + ' has been uploaded' : 'No file uploaded'}
                                    </span>
                                    {/* {imagePreviewUrl ? <img src={imagePreviewUrl} alt="preview" style={{ width: '100%' }} /> : ""} */}
                                </label>
                            </div>
                            <br />

                            <div className="file has-name is-boxed is-warning">
                                <label className="file-label">
                                    <input
                                        className="file-input"
                                        type="file"
                                        name="resume"
                                        // accept only pdf and docx files or exel files
                                        accept="application/pdf,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
                                        onChange={(e) => {
                                            const reader = new FileReader();
                                            reader.onloadend = () => {
                                                setAttachmentPreviewUrl(reader.result);
                                            }
                                            reader.readAsDataURL(e.target.files[0]);
                                            console.log(e.target.files[0]);
                                            const formData = new FormData();
                                            formData.append('file', e.target.files[0]);
                                            axios.post(`${process.env.REACT_APP_API_DOMAIN}/file-upload`, formData, {
                                                headers: {
                                                    'Content-Type': 'multipart/form-data',
                                                    'x-auth-token': localStorage.getItem('token')
                                                }
                                            }).then((res) => {
                                                console.log(res.data);
                                                // set filename to file
                                                setAttachment(e.target.files[0].name);
                                                setAttachmentUrl(res.data.data);
                                            });
                                        }}
                                    />
                                    <span className="file-cta">
                                        <span className="file-icon">
                                            <i className="fas fa-upload"></i>
                                        </span>
                                        <span className="file-label">
                                            Upload Tender file…
                                        </span>
                                    </span>
                                    <span className="file-name">
                                        {/* {imagePreviewUrl ? <img src={imagePreviewUrl} alt="preview" style={{ width: '100%' }} /> : ""} */}
                                        {attachment ? attachment + ' has been uploaded' : 'No file uploaded'}
                                    </span>
                                </label>
                            </div>
                            <br />
                            <label className="label">Description About Tender</label>
                            <textarea
                                className="textarea is-primary"
                                placeholder="Our tender is.."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            >
                            </textarea>
                            <div className="mt-4 column has-text-centered">
                                <button className="button is-primary is-size-6	has-text-weight-bold">Create Your Tender</button>
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

export default CreateTender;
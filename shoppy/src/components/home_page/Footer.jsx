import React from 'react';
import {
    FaArrowAltCircleUp, FaTwitter, FaFacebook, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaBitcoin,
    FaCcPaypal, FaCcVisa} from "react-icons/fa";


const Footer =()=> {

    return (
        <div>
            <div className="container-fluid px-5 py-5  min-vw-100 navColor text-white ">
                <div className="row ps-2  py-3">

                    <div className="col-lg-3 mb-5  ms-5">
                        <h5 className="fs-5">SHOPPY</h5>
                        <br />
                        <p className="fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing</p>
                        <p className="fw-light">Lorem ipsum dolor sit amet adipisicing elit</p>
                        <p className="fw-light">Lorem ipsum dolor sit amet adipisicing elit</p>
                        <p className="fw-light">Lorem ipsum dolor sit</p>
                       

                        <div className="justify-content-center d-lg-flex me-5">
                            <a className=" text-white px-2" href="https://twitter.com"><FaFacebook /></a>
                            <a className=" text-white px-2" href="https://facebook.com"><FaTwitter /></a>
                            <a className=" text-white px-2" href="https://www.instagram.com/"><FaInstagram /></a>
                        </div>
                    </div>
                    <div className="col-lg-2 mb-5 ps-4  mx-5">
                        <h5 className="fs-5">Useful Links</h5>
                        <br />
                        <ul className="myList">
                            <li className="mt-1">Home</li>
                           
                            <li className="mt-1">Men fashion</li>
                            
                            <li className="mt-1">Cart</li>
                            
                            <li className="mt-1">Order Tracking</li>
                            
                        </ul>
                    </div>

                    <div className="col-lg-2 mb-5  mx-5">
                        <h5 className="fs-5">Opening Hours</h5>
                        <br />
                        <ul className="myList">
                            <li>Monday-Saturday</li>
                            <br />
                            <li>8:00 AM - 6:00 PM</li>
                        </ul>
                    </div>

                    <div className="col-lg-2 mb-5 ms-5">
                        <h5 className="fs-5">Contact us</h5>

                        <br />
                        <ul className="myList">
                            <li> <FaMapMarkerAlt className="me-2"/>  x.y.z.. street, ......</li>
                            <br />
                            <li> <FaPhoneAlt className="me-2"/>  95 (61) 346613895</li>
                            <br />
                            <li><FaEnvelope className="me-2"/>  holiday@gmail.com</li>
                            <br />
                            
                            <div className=" d-lg-flex">
                                <a className=" text-white px-2"><FaCcVisa /></a>
                                <a className=" text-white px-2"><FaCcPaypal /></a>
                                <a className=" text-white px-2"><FaBitcoin /></a>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>

            <footer className="navColor text-white text-center position-relative border-top py-3 min-vw-100">

                <div className="container-fluid">
                    <p>Copyrigth &copy; 2021 Yassir Boui</p>

                    <a href="#" className="position-absolute bottom-0 end-0 p-3">
                        <i className="text-info h2"><FaArrowAltCircleUp /></i>
                    </a>
                </div>

            </footer>

        </div >

    );
}

export default Footer;
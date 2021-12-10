import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const About = () => {


    return (
        <>
            <nav className="navbar navbar-expand-lg shadow-lg rounded BagNav bg-info">

                <div className="container-fluid">

                    <Link className="btn navColor shadow-lg text-white position-absolute top-0 start-0 mt-1 ms-2 d-inline d-lg-block"
                        type="button" to="/" >
                        <FaHome className="text-white fs-4" />
                    </Link>

                </div>


            </nav>

            <div className="container-fluid w-75 py-5 px-5 shadow-lg  mb-5 mt-5 bg-body rounded fw-light">
                <div className="row mb-5">
                    <h1 className="display-6 text-center mb-5 mt-2">ABOUT US</h1>

                    <div className="col-lg align-self-center mb-5 text-center">
                        <h5 className="card-title p-2">We Are</h5>
                        <p className="card-text mx-3">Le Lorem Ipsum est simplement dans la composition et impression.
                        Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500,
                        quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser
                            un livre spécimen de polices.</p>
                    </div>
                    <div className="row my-2">
                        <div className="col-lg align-self-start text-center">
                            <h5 className="card-title p-3">Our Approch</h5>
                            <p className="card-text">Le Lorem Ipsum est simplement dans la composition et impression.
                            Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500,
                            quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser
                            un livre spécimen de polices.</p>
                        </div>
                        <div className="col-lg align-self-center">
                            <img src="pics/pic10.jpg" className="img-thumbnail shadow p-1 mt-5 mb-5 bg-body " alt="man" />
                        </div>
                        <div className="col-lg align-self-end text-center">
                            <h5 className="card-title p-3">Our Vision</h5>
                            <p className="card-text ">Le Lorem Ipsum est simplement la composition et la mise en page avant impression.
                            Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur
                            anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices.</p>
                        </div>
                    </div>
                   

                    <div className="col-lg align-self-center mt-5 text-center">
                        <h5 className="card-title p-3">Our Goal</h5>
                        <p className="card-text mx-3">Le Lorem Ipsum est simplement dans la composition et impression.
                        Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500,
                        quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser
                            un livre spécimen de polices.</p>
                    </div>

                </div>
            </div>
        </>
    );


}

export default About;
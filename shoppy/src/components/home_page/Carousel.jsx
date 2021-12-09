import React from 'react';
import { Link } from 'react-router-dom';


const Carousel = () => {

	return (

        <div id="myCarousel" className=" px-5 py-4 w-100 h-100 figure" style={{
            backgroundImage: `url("pics/pic9.jpg")`, backgroundPosition: '0px -450px',
            backgroundSize: 'cover', opacity:'0.7',
        }}>
            <div className=" w-100 h-75 mt-5 pt-5 text-white ">
                <h1 className="display-6 mt-5 mb-5">New Fashion</h1>
                <p className="fw-light mt-4 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit iure</p>

                <p className="fw-light mt-4 mb-2">Lorem ipsum dolor sit amet consectetur optio</p>

                <Link className="btn btn-warning btn-lg mt-5 mb-5 " to="/ShoppingCart">SHOP NOW</Link >
            </div>
        </div>

	);
}

export default Carousel;
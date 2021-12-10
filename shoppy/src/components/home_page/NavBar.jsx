import { Link } from 'react-router-dom';
import React from 'react';
import { FaUser, FaStore, FaBars, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';








const NavBar = ()=> {


	return (

		<nav className="navbar navbar-expand-lg text-dark shadow-lg myText rounded bg-info min-vw-100">
			
			<div className="container-fluid">

				<Link className="navbar-brand  me-5 hand-icon " to="/" >
					<span className="text-white fs-4 "><FaStore className="me-2 mb-1 ms-5 " />SHOPPY </span>
				</Link>

				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className=" text-white"><FaBars /></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">

					<ul className="navbar-nav text-white  mb-lg-0 ms-5">

						<li className="nav-item ms-5">
							<Link className="nav-link text-white " to="/">Home</Link>
						</li>
						<li className="nav-item ms-5">
							<Link className="nav-link text-white " to="/ShoppingCart">ShoppingCart</Link>
						</li>
						<li className="nav-item ms-5">
							<Link className="nav-link text-white " to="/Bag">My Bag</Link>
						</li>
						<li className="nav-item ms-5">
							<Link className="nav-link text-white " to="/About">About us</Link>
						</li>
						<li className="nav-item ms-5">
							<Link className="nav-link text-white " to="/Login"><FaUser /></Link>
						</li>


						<div className="position-absolute top-0 end-0 mt-3 me-4 d-inline d-none d-lg-block ">
							<a className=" text-white px-2" href="https://twitter.com"><FaFacebook /></a>
							<a className=" text-white px-2" href="https://facebook.com"><FaTwitter /></a>
							<a className=" text-white px-2" href="https://www.instagram.com/"><FaInstagram /></a>
						</div>
					</ul>

				</div>


			</div>


		</nav>


	);


		
}

export default NavBar;
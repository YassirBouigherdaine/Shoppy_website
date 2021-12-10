import React from 'react';
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';
import { FaBriefcase, FaSearch, FaHome } from 'react-icons/fa';

const ShoppNav = () => {

	const { state: { cart }, } = CartState();

	return (

		<nav className="navbar navbar-expand-lg shadow-lg rounded bg-info">

			<div className="container-fluid">

				<Link className="btn navColor shadow-lg text-white mt-1 ms-2 d-inline d-lg-block" to="/" >
					<FaHome className=" fs-4" />
				</Link>

				<form className="d-flex position-absolute top-50 start-50 translate-middle w-50">
					<input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
					<button className="btn btn-warning text-dark" type="submit"><FaSearch /></button>
				</form>

				<div className="position-absolute top-0 end-0 mt-2 me-2 d-inline d-lg-block">
					<Link className="btn navColor text-white" type="button" to="/Bag" >
						<FaBriefcase className="text-white fs-4" />
						<span className="badge rounded-pill bg-warning text-dark float-end  mb-2">{cart.length}</span>
					</Link>
				</div>

			</div>


		</nav>

	);


}

export default ShoppNav;
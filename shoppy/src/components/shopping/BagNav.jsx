import React from 'react';
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';
import { FaShoppingCart, FaHome } from 'react-icons/fa';

const ShoppNav = () => {

	const { state: { cart }, } = CartState();

	return (

		<nav className="navbar navbar-expand-lg shadow-lg rounded BagNav bg-info">

			<div className="container-fluid">

				<Link className="btn navColor shadow-lg text-white position-absolute top-0 end-0 mt-1 me-2 d-inline d-lg-block"
					type="button" to="/ShoppingCart" >
					<FaShoppingCart className="text-white fs-4" />
					<span className="badge rounded-pill bg-warning text-dark float-end mb-2">{cart.length}</span>
				</Link>
				<Link className="btn navColor shadow-lg text-white position-absolute top-0 start-0 mt-1 ms-2 d-inline d-lg-block"
					type="button" to="/" >
					<FaHome className="text-white fs-4" />
				</Link>

			</div>


		</nav>

	);


}

export default ShoppNav;
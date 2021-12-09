import React from 'react';
import { FaDollarSign, FaStar } from 'react-icons/fa';
import { CartState } from '../context/Context';


const Item = ({prod }) => {

	const { state: { cart }, dispatch,} = CartState();

	return (

		<div className="col-lg-4 ">
			<div className="card m-2 shadow p-3 mb-5 bg-body rounded w-75 ms-5">
				
				<img src={prod.image} alt="product" className='card-img-top shadow-sm  mt-2' />
				<div className="card-body mt-1">

					<div className="border-bottom mb-3">
						<h5 className="lead mt-1 float-end fw-bold"><FaDollarSign className="mb-1"/>{prod.price}</h5>
						<h4 className=" mt-1 fs-5">{prod.name}</h4>
					
						<h4 className="fw-light mt-1 fs-5 text-primary">{prod.category}</h4>

						<h4 className=" mt-1 fs-5 fw-light">Rating: 
							 {[...Array(prod.rating)].map((e, i) =>
								<span className="ms-1" key={i}><FaStar className="text-warning" /></span>)
							}
						</h4>
					</div>
					
					<p className="card-text mt-2 fw-light">{prod.description}</p>

				</div>
				<div className="card-footer">
					<div className="d-grid gap-2">
						{cart.find((p) => p.id === prod.id) ? (<button className="btn btn-danger shadow-sm" onClick={() => dispatch({
							type: "REMOVE_FROM_CART",
							payload: prod,
						})}>
							Remove from Bag
						</button>) : (<button className="btn btn-warning shadow-sm" onClick={() => {

							dispatch({ type: "ADD_TO_CART", payload: prod, });
						}}>
							Add to Bag
						</button>)}
						
					</div>
				</div>

			</div>
		</div>
		
	);
}

export default Item;


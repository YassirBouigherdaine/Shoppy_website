import React from 'react';
import { CartState } from '../context/Context';
import { FaTimesCircle} from 'react-icons/fa';


const BagItem = ({ prod }) => {

	const { dispatch, } = CartState();

	return (

		<div className="col-lg-4 ">
			<div className="m-4 card mb-3 shadow-lg p-2 d-flex" key={prod.id} style={{ maxWidth: `440px` }}>

				<div className="row g-0 ">
					<span className="hand-icon mt-1 mb-1" onClick={() => dispatch({
						type: "REMOVE_FROM_CART",
						payload: prod,
					})} >
						<FaTimesCircle className=" text-danger float-end" />
					</span>

					<div className="col-md-6">
						<img src={prod.image} className="img-fluid rounded-start" alt="Product" />
					</div>

					<div className="col-md-6">

						<div className="card-body">
							<h5 className="card-title">{prod.name}</h5>
							<h4 className="fw-light mt-1 fs-5">{prod.category}</h4>
						</div>

						<span className="badge text-dark float-end fw-light fs-5">Amount: {prod.qty}</span>
						<div className="btn-group ms-4">

							<h5 className="btn btn-outline-warning" onClick={() => {
								if (prod.qty < 5)
									dispatch({
										type: "INCREASE_QTY", payload: {
											id: prod.id, qty: prod.qty,
										}
									});
							}} >+</h5>

							<h5 className="btn btn-outline-warning" onClick={() => {
								dispatch({
									type: "DECREASE_QTY", payload: {
										id: prod.id, qty: prod.qty,
									}
								});
							}}>-</h5>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
}

export default BagItem;


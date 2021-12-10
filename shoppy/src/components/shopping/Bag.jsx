import React, { useState, useEffect } from 'react';
import { CartState } from '../context/Context';
import BagItem from './BagItem';
import BagNav from './BagNav';


const Bag = () => {

	const { state: { cart },} = CartState();
	const [total, setTotal] = useState(0);

	useEffect(() => {
		setTotal(cart.reduce((accm, currn) => accm + currn.price * currn.qty, 0));
	}, [cart]);

    return (
		<>
			<BagNav/>
		
			<div className="container-fluid mb-5 mt-5">

				<div className="row shadow-lg p-3 mb-5 bg-body rounded ms-3 me-3 mt-5">

					<h1 className="display-6 myTitle ms-2 mt-5 mb-5">MY BAG</h1>
					<div className="d-inline" />

						{cart.length > 0 ? (<>
							{cart.map(prod => {

								return < BagItem

									key={prod.id}
									prod={prod}

								/>;

							})}
						</>) : (<h1 className="display-6 text-center mt-2 mb-5 ">Your Bag is Empty</h1>)}

					
					<div className="row mt-5 float-end">
						<div className="col-lg-4 mx-3">
							<ul className="list-group fw-bold">
								<li className="list-group-item bg-info text-white ">Subtotal : {cart.length} items</li>
								<li className="list-group-item bg-info text-white ">Total : ${total}</li>
							</ul>
						</div>
					</div>

					

				</div>
			</div>
        </>

        );
    
};

export default Bag;
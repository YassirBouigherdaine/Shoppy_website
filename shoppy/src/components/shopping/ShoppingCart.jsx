import React, { useState } from 'react';
import ShoppNav from './ShoppNav';
import { CartState } from '../context/Context';
import Item from './Item';


const ShoppingCart = () => {

    const { state: { products }, } = CartState();
    const [filter, setFilter] = useState("all");

    return (

        <div className="">

            <ShoppNav />

            <div className="container-fluid mb-5 mt-5">

                <div className="row shadow-lg p-3 mb-5 bg-body rounded ms-3 me-3">

                    <h1 className="display-6 myTitle ms-3 mt-5 mb-5">SHOPPING CART</h1>

                    <div className="underline d-inline d-none d-lg-block"></div>

                    <div class="grid d-flex justify-content-center ms-2 mb-5">
                        <div class="g-col-6 p-2 m-2"><button className="btn btn-outline-warning" onClick={() => { setFilter("all") }}>All</button></div>
                        <div class="g-col-6 p-2 m-2"><button className="btn btn-outline-warning" onClick={() => { setFilter("Shirt") }}>Shirt</button></div>

                        <div class="g-col-6 p-2 m-2"><button className="btn btn-outline-warning" onClick={() => { setFilter("Jacket") }}>Jacket</button></div>
                        <div class="g-col-6 p-2 m-2"><button className="btn btn-outline-warning" onClick={() => { setFilter("Jean") }}>Jean</button></div>
                    </div>

                    
                   
                    {products.map((prod) => {

                        if (prod.category === filter) return < Item

                            key={prod.id} 
                            prod={prod}
                        
                        />;
                        else if (filter === "all") return < Item

                            key={prod.id}
                            prod={prod}

                        />;


                    })}


                </div>


            </div>


        </div>

    );


}

export default ShoppingCart;
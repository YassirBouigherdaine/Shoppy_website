import React from 'react';
import { FaPaperPlane} from 'react-icons/fa';

const Newsletter = () => {

    return (

        <section className="col-lg-12 py-1 text-center">

            <form className="container-fluid w-75 py-5 px-5 shadow-lg p-3 mb-5 mt-5 bg-body rounded">

                <h1 className="display-6  mb-3 ">Newsletter</h1>

                <div className="fw-light mb-3">Get timely updates from your favorite products.</div>

                
                <div className="input-group mb-3 px-3 py-3">
                    <input type="text" className="form-control" placeholder="Enter your email" aria-label="Recipient's username" />
                    <span className="input-group-text bg-info text-white" ><FaPaperPlane/></span>
                </div>
               
                
            </form>

        </section>
       
    );


}

export default Newsletter;
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaUserEdit } from 'react-icons/fa';



const Sing_in = () => {


    return (
        <>
            <form className="container-fluid w-75 py-5 px-5 shadow-lg p-3 mb-5 mt-5 bg-body rounded">
                
                <h1 className="display-4 text-center "><FaUserEdit /></h1>
                <h1 className="display-6 text-center mb-5 ">Sing-in</h1>

                <div className=" mx-auto col-lg-6 mb-5">
                    <div className="mb-4 mt-5">
                        <label className="form-label">Name</label>
                        <input type="email" className="form-control" />
                        <div className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-4 mt-5">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" />
                        <div className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" />

                    </div>
                    <div className="mb-4">
                        <label className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" />

                    </div>

                </div>
                
                <div className="vstack gap-2 col-lg-6 mx-auto mb-3 px-2">
                    <button type="submit" className="btn btn-info text-white">Sing in</button>
                    <Link className="btn btn-info text-white" to="/Login"><FaArrowLeft/></Link >
                </div>
            </form>
           
        </>
    );


}

export default Sing_in;
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser } from 'react-icons/fa';


const Login =()=> {

   
    return (
        <>
            <Link className="btn navColor shadow-lg text-white position-absolute top-0 start-0 mt-1 ms-2 d-inline d-lg-block"
                type="button" to="/" >
                <FaHome className="text-white fs-4" />
            </Link>

            <div className="col py-1 ">

                <form className="container-fluid w-75  py-5  shadow-lg mb-5 mt-5 bg-body rounded">
                    <h1 className="display-4 text-center"><FaUser/></h1>
                    <h1 className="display-6 text-center mb-5 ">Login</h1>

                    <div className="mt-5 mx-auto col-lg-6 mb-5 px-2">
                        <div className="mb-2">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control " />
                            <div className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" />

                        </div>
                    </div>
                   

                    <div className="vstack gap-2 col-lg-6 mx-auto mb-3 px-2">
                        <button type="submit" className="btn btn-info text-white">Log in</button>
                        <Link className="btn btn-info text-white" to="/Sing_in">Sing in</Link >
                    </div>

                </form>

            </div>
        </>
    );


}

export default Login;
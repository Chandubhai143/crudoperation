import React from "react";
import { Link } from "react-router-dom";
import logo from "../src/images/logo.png"; // Import the logo image

function Todolist() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={logo} className="images_fixed" alt="this is logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse hv" id="navbarNav">
                        <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services" className="nav-link">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                        <Link to="/signup" className="btn btn btn-outline-dark">Sign up</Link>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default Todolist;

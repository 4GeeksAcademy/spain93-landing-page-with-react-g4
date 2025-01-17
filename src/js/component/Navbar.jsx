import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid mx-5 ps-5 pe-5">
                <a className="navbar-brand  text-white" href="#">Start Boostrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="d-flex navbar-nav ms-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <a className="nav-link active  text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  text-secondary" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  text-secondary" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  text-secondary" href="#">Contact</a>
                        </li>                                                
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
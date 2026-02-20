import React from 'react'
import logo from '../../assets/PneumaticInflatorSystem3d.png'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg nav-clr">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="PneumaticInflatorSytem" className="d-inline-block align-text-top kg-img " />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active fw-bold fs-5" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active fw-bold fs-5" aria-current="page" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active fw-bold fs-5" aria-current="page" href="#">Contact Us</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle fw-bold fs-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Account
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Login</a></li>
                                    <li><a class="dropdown-item" href="#">Registration</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success cust-btn" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

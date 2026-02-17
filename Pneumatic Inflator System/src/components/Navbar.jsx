import React from 'react'
import Logo from '../components/img/Pneumatic Logo.png'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg custom-color custom-navbar">
                <div className="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={Logo} alt="Logo" className="d-inline-block align-text-top"
                        />

                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link active fst-italic fw-bold kg-fs" aria-current="page" href="#">Home</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle  fst-italic fw-bold kg-fs"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Inquiry
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Login</a></li>
                                    <li><a className="dropdown-item" href="#">Register</a></li>
                                </ul>
                            </li>

                        </ul>

                        <form className="d-flex cust-form" role="search">
                            <input
                                className="form-control me-2 cust-input"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn-color me-5 " type="submit">
                                Search
                            </button>
                        </form>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

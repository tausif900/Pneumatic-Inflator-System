import React from 'react'
import logo from '../../assets/PneumaticInflatorSystem3d.png'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg nav-clr">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-evenly list-unstyled" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active fw-bold fs-5" aria-current="page" to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fw-bold fs-5" aria-current="page" to={'about'}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fw-bold fs-5" aria-current="page" to={'contact'}>Contact Us</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle fw-bold fs-5" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Account
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to={'login'}>Login</Link></li>
                                    <li><Link class="dropdown-item" to={'registration'}>Registration</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-dark bg-dark px-4 ${styles.navbarCustom}`}>
        <Link className="navbar-brand" to="/">
          Pneumatic Inflator System
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">

            <li className="nav-item">
              <Link className={`nav-link ${styles.link}`} to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${styles.link}`} to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${styles.link}`} to="/contact">Contact</Link>
            </li>

          </ul>

          <ul className="navbar-nav">

            <li className="nav-item">
              <Link className={`nav-link ${styles.link}`} to="/login">Login</Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${styles.link}`} to="/register">Register</Link>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

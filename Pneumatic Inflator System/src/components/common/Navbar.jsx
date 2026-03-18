import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Navbar.module.css";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
  return (
    <>
      <nav className={`${styles.navbarContainer}`}>
        <div className={`${styles.navbarBrand}`}>Pneumatic Inflator System</div>
        <div className={`${styles.navbarContent}`}>
          <Link className={`${styles.link}`} to={'/'}>Home</Link>
          <Link className={`${styles.link}`} to={'/about'}>About</Link>
          <Link className={`${styles.link}`} to={'/Contact'}>Contact</Link>
          <Link className={`${styles.link}`} to={'/login'}><VscAccount /></Link>
          <Link className={`${styles.link}`} to={'/register'}>Register</Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar

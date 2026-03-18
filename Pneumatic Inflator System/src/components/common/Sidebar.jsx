import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div class={`text-bg-dark ${styles.sidebarContainer}`}>
      <ul className={`${styles.listContainer}`}>
        <li>
          <Link to="/" class={` ${styles.sidebarlink}`}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin" class={` ${styles.sidebarlink}`}>
            Admin
          </Link>
        </li>
        <li>
          <Link to="/sales" class={` ${styles.sidebarlink}`}>
            Sales
          </Link>
        </li>
        <li>
          <Link to="/purchase" class={` ${styles.sidebarlink}`}>
            Purchase
          </Link>
        </li>
        <li>
          <Link to="/products" class={`${styles.sidebarlink}`}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/reports" class={`${styles.sidebarlink}`}>
            Reports
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar

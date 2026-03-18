import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div class={`text-bg-dark ${styles.sidebarContainer}`}>
      <ul className={`${styles.listContainer}`}>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? `${styles.sidebarlink} ${styles.active}` : styles.sidebarlink
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sales"
            end
            className={({ isActive }) =>
              isActive ? `${styles.sidebarlink} ${styles.active}` : styles.sidebarlink
            }
          >
            Sales
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/purchase"
            end
            className={({ isActive }) =>
              isActive ? `${styles.sidebarlink} ${styles.active}` : styles.sidebarlink
            }
          >
            Purchase
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            end
            className={({ isActive }) =>
              isActive ? `${styles.sidebarlink} ${styles.active}` : styles.sidebarlink
            }
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reports"
            end
            className={({ isActive }) =>
              isActive ? `${styles.sidebarlink} ${styles.active}` : styles.sidebarlink
            }
          >
            Reports
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar

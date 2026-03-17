import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: "200px", height: "100vh" }}>
      <ul class="nav nav-pills flex-column mb-auto">
        <li> <Link to="/" class="nav-link text-white"> <svg class="bi pe-none me-2" width="16" height="16" aria-hidden="true"><use xlink:href="#speedometer2"></use></svg>
          Dashboard
        </Link>
        </li>
         <li>
          <Link to="/admin" class="nav-link text-white"> <svg class="bi pe-none me-2" width="16" height="16" aria-hidden="true"><use xlink:href="#table"></use></svg>
            Admin
          </Link>
        </li>
        <li>
          <Link to="/sales" class="nav-link text-white"> <svg class="bi pe-none me-2" width="16" height="16" aria-hidden="true"><use xlink:href="#table"></use></svg>
            Sales
          </Link>
        </li>
        <li>
          <Link to="/purchase" class="nav-link text-white"> <svg class="bi pe-none me-2" width="16" height="16" aria-hidden="true"><use xlink:href="#grid"></use></svg>
            Purchase
          </Link>
        </li>
        <li>
          <Link to="/products" class="nav-link text-white"> <svg class="bi pe-none me-2" width="16" height="16" aria-hidden="true"><use xlink:href="#grid"></use></svg>
            Products
          </Link>
        </li>
        <li>
          <Link to="/reports" class="nav-link text-white"> <svg class="bi pe-none me-2" width="16" height="16" aria-hidden="true"><use xlink:href="#people-circle"></use></svg>
            Reports
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar

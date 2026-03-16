import React from 'react'
import { Outlet } from 'react-router-dom'

const Sales = () => {
  return (
    <div>
      <h2>Sales Department</h2>
      <Outlet />
    </div>
  )
}

export default Sales

import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import "./Layout.css";

const Layout = () => {
    return (
        <div className="appBg">
            <Navbar />
            <div style={{ display: "flex" }}>
                <Sidebar />
                <div style={{ flex: 1, padding: "20px" }}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout

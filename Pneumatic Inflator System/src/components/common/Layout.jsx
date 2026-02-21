import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from "react-router-dom";

function Layout() {


    return (
        <div>

            {/* Navbar */}
            <Navbar />
            {/* Placeholder */}
            <Outlet />
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Layout


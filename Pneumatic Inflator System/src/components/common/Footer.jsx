import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="cust-footer">
        <div className="row py-4 m-0">
          {/* <!-- Store Address --> */}
          <div className="col mb-3 ps-5">
            <h6 className="text-decoration-underline">STORE INFO.</h6>
            <p className="mb-1 text-clr">Grnd Floor, BCC Mall,</p>
            <p className="mb-1 text-clr">Near Toyota Showroom,</p>
            <p className="mb-1 text-clr">Road No 22, Bandra-West</p>
            <p className="mb-1 text-clr">9004510238</p>
            <p className="mb-1 text-clr">Email-pneumaticinflatorsystems@gmail.com</p>
          </div>

          {/* <!-- Customer Support --> */}
          <div className="col mb-3">
            <h5 className="text-decoration-underline">Customer Support</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><Link to={''} className="nav-link p-0 text-clr">FAQs</Link></li>
              <li className="nav-item mb-2"><Link to={''} className="nav-link p-0 text-clr">Return & Refund Policy</Link>
              </li>
              <li className="nav-item mb-2"><Link to={''} className="nav-link p-0 text-clr">Warranty Information</Link></li>
              <li className="nav-item mb-2"><Link to={''} className="nav-link p-0 text-clr">Service / Repair Support</Link>
              </li>
            </ul >
          </div >

          {/* <!-- Policies --> */}
          < div className="col mb-3" >
            <h5 className="text-decoration-underline">Policies</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><Link to={''} className="nav-link p-0 text-clr">Privacy Policy</Link></li>
              <li className="nav-item mb-2"><Link to={''} className="nav-link p-0 text-clr">Terms & Conditions</Link></li >
              <li className="nav-item mb-2"><Link to={''} className="nav-link p-0 text-clr">Cancellation Policy</Link></li >
              <li className="nav-item mb-2"><Link to={''} className="nav-link p-0 text-clr">Cookie Policy</Link></li >
            </ul >
          </div >

          {/* <!-- Social Media --> */}
          < div className="col mb-3" >
            <h5 className="text-decoration-underline">Social Media</h5>
            <div className="d-flex flex-column gap-2">
              <Link to={''} className="text-clr"><i className="bi bi-facebook"></i></Link>
              <Link to={''} className="text-clr"><i className="bi bi-instagram"></i></Link >
              <Link to={''} className="text-clr"><i className="bi bi-linkedin"></i></Link >
              <Link to={''} className="text-clr"><i className="bi bi-twitter"></i></Link >
            </div >
          </div >

          {/* <!-- Copyright --> */}
          <div className="col mb-3" >
            <h5 className="text-decoration-underline">Copyright</h5>
            <p className="mb-0 text-clr">© 2026 Pneumatic Inflator System. <br />All Rights Reserved</p>
          </div >
        </div >
      </footer >
    </>
  )
}

export default Footer

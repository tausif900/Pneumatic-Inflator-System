import React from 'react'
import { Link } from 'react-router-dom'

function Registration() {
  return (
    <div>
       {/* <!-- Registration page --> */}
        <div class="container d-flex justify-content-center align-items-center vh-100">
            <div class="card p-4  p-3 mb-5 bg-white rounded cust-register">
                <h3 class="text-center mb-4">Registration</h3>
                <form>
                    <div class="mb-3">
                        <label for="userInput" class="form-label">USERNAME:</label>
                        <input type="username" class="form-control input-login" id="userInput" placeholder="Enter username"/>
                    </div>
                    <div class="mb-3">
                        <label for="emailInput" class="form-label">EMAIL ID:</label>
                        <input type="email" class="form-control input-login" id="emailInput" aria-describedby="emailHelp"
                            placeholder="Enter a valid email address"/>
                    </div>
                    <div class="mb-3">
                        <label for="passwordInput" class="form-label">PASSWORD</label>
                        <input type="password" class="form-control input-login" id="passwordInput"
                        placeholder='password'/>
                    </div>
                    <div class="mb-3">
                        <label for="passwordInput" class="form-label ">CONFIRM PASSWORD</label>
                        <input type="password" class="form-control  input-login " id="passwordInput"
                        placeholder='Confirm Password'/>
                    </div>
                    <button type="login" class="btn btn-primary w-25 kg-cust-Register-btn">Register</button>
                    <div class="form-text text-start">Already User?
                        <Link class="text-decoration-underline" to={'login'}>Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Registration

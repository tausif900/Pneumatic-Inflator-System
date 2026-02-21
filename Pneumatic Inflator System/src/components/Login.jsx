import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const submitHandler = (data) => {
    console.log(data);

  }
  return (
    <div>
      {/* <!-- login page --> */}
      <div className="container d-flex justify-content-center align-items-center vh-100 ">
        <div className="card p-4  p-3 mb-5 bg-white rounded cust-login">
          <h3 className="text-center mb-4">Login</h3>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">EMAIL</label>
              <input type="email" className="form-control input-login" id="emailInput" aria-describedby="emailHelp"
                placeholder="Enter username"{...register('email', { required: 'email is required', minLength: { value: 10, message: 'email must contain atleast 10 character long' } })} />
                {errors.email && <p className='error-msg'>{errors.email.message}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="passwordInput" className="form-label">PASSWORD</label>
              <input type="password" className="form-control
                        input-login"
                placeholder='Enter Password'
                id="passwordInput" />
            </div>
            <button type="login" className="kg-cust-login-btn w-25">Login</button>
            <div className="form-text text-start">Not a user?
              <Link className="text-decoration-underline" to={'registration'}>Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

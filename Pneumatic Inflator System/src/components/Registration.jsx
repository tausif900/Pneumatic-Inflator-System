import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

function Registration() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const password = watch('password')
    const submitHandler = (data) => {
        console.log(data);

    }
    return (
        <div>
            {/* <!-- Registration page --> */}
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="card p-4  p-3 mb-5 bg-white rounded cust-register">
                    <h3 className="text-center mb-4">Registration</h3>
                    <form onSubmit={handleSubmit(submitHandler)}>
                        <div className="mb-3">
                            <label for="userInput" className="form-label">USERNAME:</label>
                            <input type="username" className="form-control input-login" id="userInput" placeholder="Enter username"{...register('username', { required: 'username is required', minLength: { value: 5, message: 'Username must be at least 5 characters long' } })} />
                            {errors.username && <p className='error-msg'>{errors.username.message}</p>}
                        </div>
                        <div className="mb-3">
                            <label for="emailInput" className="form-label">EMAIL ID:</label>
                            <input type="email" className="form-control input-login" id="emailInput" aria-describedby="emailHelp"
                                placeholder="Enter email address" {...register('email', { required: 'email is required', minLength: { value: 10, message: 'email must be 10 character long' } })} />
                            {errors.email && <p className='error-msg'>{errors.email.message}</p>}
                        </div>
                        <div className="mb-3">
                            <label for="passwordInput" className="form-label">PASSWORD</label>
                            <input type="password" className="form-control input-login" id="passwordInput"
                                placeholder='password'{...register('password', { required: 'Enter Password is essential', pattern: { value: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/, message: "Password has a minimum of 6 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 number with no spaces." } })} />
                            {errors.password && <p className='error-msg'>{errors.password.message}</p>}
                        </div>
                        <div className="mb-3">
                            <label for="passwordInput" className="form-label ">CONFIRM PASSWORD</label>
                            <input type="password" className="form-control  input-login " id="passwordInput"
                                placeholder='Confirm Password'{...register('ConfirmPassword', { required: 'Enter the correct password', validate: (value) => value === password || "Confirm Password doesn't match the actual password" })} />
                            {errors.ConfirmPassword && <p className='error-msg'>{errors.ConfirmPassword.message}</p>}
                        </div>
                        <button type="login" className="btn btn-primary w-25 kg-cust-Register-btn">Register</button>
                        <div className="form-text text-start">Already User?
                            <Link className="text-decoration-underline" to={'login'}>Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration

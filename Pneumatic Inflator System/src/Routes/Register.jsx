import React from 'react'
import styles from './Register.module.css';
import { useForm, Watch } from 'react-hook-form';

const Register = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const password = watch('password')

  const submitHandler = (data) => {
    console.log(data);
  }

  return (
    <section className={styles.pageShell}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-5">
            <div className={`card shadow border-0 rounded-4 ${styles.loginCard}`}>
              <div className="card-body p-4 p-md-5">
                <div className="text-center mb-4">
                  <h2 className={`fw-bold mb-2 ${styles.heading}`}>Register</h2>
                  <p className={`mb-0 ${styles.subHeading}`}>Register to access the pneumatic inflator System.</p>
                </div>

                <form onSubmit={handleSubmit(submitHandler)}>
                  <div className="mb-3">
                    <label htmlFor="username" className={`form-label fw-semibold ${styles.input}`}>
                      Username
                    </label>
                    <input
                      type="text"
                      {...register('username', { required: 'username is required' })}
                      className="form-control form-control-lg"
                      id="email"
                      placeholder="Enter your username"
                    />
                    {errors.username && <p className='text-warning'>{errors.username.message}</p>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className={`form-label fw-semibold ${styles.input}`}>
                      Email address
                    </label>
                    <input
                      type="email"
                      {...register('email', { required: 'Email is required' })}
                      className="form-control form-control-lg"
                      id="email"
                      placeholder="Enter your Email here"
                    />
                    {errors.email && <p className='text-warning'>{errors.email.message}</p>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className={`form-label fw-semibold ${styles.input}`}>
                      Password
                    </label>
                    <input
                      type="password"
                      {...register('password', { required: 'Password is required', pattern: { value: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/, message: "Password has a minimum of 6 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 number with no spaces." } })}
                      className="form-control form-control-lg"
                      id="password"
                      placeholder="Enter your password"
                    />
                    {errors.password && <p className='text-warning'>{errors.password.message}</p>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className={`form-label fw-semibold ${styles.input}`}>
                      Confirm Password
                    </label>
                    <input
                      type='password'
                      {...register('ConfirmPassword', { required: 'Enter the  Password', validate: (value) => value === password || "Confirm Password doesn't match the actual password" })}
                      className="form-control form-control-lg"
                      id="password"
                      placeholder="Enter Confirm password" />
                    {errors.ConfirmPassword && <p className='text-warning'>{errors.ConfirmPassword.message}</p>}
                  </div>

                  <button type="submit" className={`btn btn-primary btn-lg w-100 ${styles.loginButton}`}>
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register

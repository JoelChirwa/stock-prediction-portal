import React from 'react'

const Login = () => {
  return (
   <div className="text-light container">
      <div className="row justify-content-center mt-4">
        <div className="col-md-6 bg-light-dark p-4 rounded">
          <h2 className='text-light text-center'>Login</h2>
          <form>
            <div>
              <input type="email" placeholder="Enter your email" className="form-control mb-3" />
            </div>
            <div>
              <input type="password" placeholder="Enter your password" className="form-control mb-3" />
            </div>
            <button type="submit" className="btn btn-info d-block mx-auto">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

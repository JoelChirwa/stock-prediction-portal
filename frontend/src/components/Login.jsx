import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

const Login = () => {
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const [loading, setLoading] = useState(false)
   const navigate = useNavigate()
   const [error, setError] = useState(null)
   const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

   const handleLogin = async (e) => {
      e.preventDefault()
      setLoading(true)

      const userData = {username, password}
      console.log('userData==>', userData);
     
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', userData)
        localStorage.setItem('accesstoken', response.data.access)
        localStorage.setItem('refreshtoken', response.data.refresh)
        console.log("Login successful");
        setIsLoggedIn(true)
        navigate('/')
       
      } catch (error) {
        console.error("Invalid credentials")
        setError("Invalid credentials. Please try again.")
      } finally {
        setLoading(false)
      }
   }

  return (
   <div className="text-light container">
      <div className="row justify-content-center mt-4">
        <div className="col-md-6 bg-light-dark p-4 rounded">
          <h2 className='text-light text-center mb-4'>Login to our Portal</h2>
          <form onSubmit={handleLogin}>
            <div>
              <input type="text" placeholder="Enter your username" className="form-control mb-3" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
              <input type="password" placeholder="Enter your password" className="form-control mb-3" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {error && <p className="text-danger text-center">{error}</p>}

             {loading ? (
                          <button type="submit" className="btn btn-info d-block mx-auto" disabled>
                            <FontAwesomeIcon icon={faSpinner} spin /> Logging in...
                          </button>
                        ) : (
                          <button type="submit" className="btn btn-info d-block mx-auto">
                            Login
                          </button>
                        )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

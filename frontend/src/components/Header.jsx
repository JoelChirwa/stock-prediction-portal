import React from 'react'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../AuthProvider'

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('accesstoken')
    localStorage.removeItem('refreshtoken')
    setIsLoggedIn(false)
    console.log("Logged out")
    navigate('/login')
  }

  return (
   <>
    <nav className="navbar container align-items-start">
        <Link to="/" className="navbar-brand text-light">Stock Prediction Portal</Link>
        <div>
           <div>
           {isLoggedIn ? (
              <button class="btn btn-danger" onClick={handleLogout}>Logout</button>
           ) : (
             <>
               <Button text="Login" class="btn-outline-info" url="/login" />
               &nbsp; &nbsp;
               <Button text="Register" class="btn-info" url="/register" />
             </>
           )}
           </div>
        </div>
    </nav>
   </>
  )
}

export default Header

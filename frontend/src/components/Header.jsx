import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <>
    <nav className="navbar container align-items-start">
        <Link to="/" className="navbar-brand text-light">Stock Prediction Portal</Link>
        <div>
           <div>
             <Button text="Login" class="btn-outline-info" url="/login" />
             &nbsp; &nbsp;
             <Button text="Register" class="btn-info" url="/register" />
           </div>
        </div>
    </nav>
   </>
  )
}

export default Header

import React from 'react'
import Button from './Button'

const Header = () => {
  return (
   <>
    <nav className="navbar container align-items-start">
        <a href="/" className="navbar-brand text-light">Stock Prediction Portal</a>
        <div>
           <div>
             <Button text="Login" class="btn-outline-info" />
             &nbsp; &nbsp;
             <Button text="Register" class="btn-info" />
           </div>
        </div>
    </nav>
   </>
  )
}

export default Header

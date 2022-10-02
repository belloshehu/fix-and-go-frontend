import React from 'react'
import logo from '../images/logo.png'
import {Link} from 'react-router-dom'

export const Header = () => {
  return (
    <>
        <header className='main-header'>
           <div>
                <img src={logo} alt='logo'/>
                <ul>
                    <li className="nav-item">
                        <Link to='/' className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="services" className="nav-link">Services</Link>                
                    </li>
                    <li className="nav-item">
                        <Link to="support" className="nav-link">Support</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="protection" className="nav-link">Protection</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="aboutus" className="nav-link">About Us</Link>
                    </li>
                </ul>
           </div>
           <div className='auth-wrapper'>
                <Link className='btn bg-secondary text-white' to="/register">Register</Link>
                <Link className='btn bg-primary text-white' to='/login'>Sign In</Link>
           </div>
        </header>
    </>
  )
}

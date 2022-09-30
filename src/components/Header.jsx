import React from 'react'
import logo from '../images/logo.png'

export const Header = () => {
  return (
    <>
        <header className='main-header'>
           <div>
                <img src={logo} alt='logo'/>
                <ul>
                    <li className="nav-item">
                        <a href="/" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/services" className="nav-link">Services</a>                
                    </li>
                    <li className="nav-item">
                        <a href="/support" className="nav-link">Support</a>
                    </li>
                    <li className="nav-item">
                        <a href="/protection" className="nav-link">Protection</a>
                    </li>
                    <li className="nav-item">
                        <a href="/aboutus" className="nav-link">About Us</a>
                    </li>
                </ul>
           </div>
           <div className='auth-wrapper'>
                <a className='btn bg-secondary text-white' href="/register">Register</a>
                <a className='btn bg-primary text-white' href='/login'>Sign In</a>
           </div>
        </header>
    </>
  )
}

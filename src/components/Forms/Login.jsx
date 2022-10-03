import React from 'react'
import logo from '../../images/logo-white.png'
import google from '../../images/google.png'
import blobLeft from '../../images/lines-blob-left.png'
import blobRight from '../../images/lines-blob-right.png'
import {Link} from 'react-router-dom'
import './Form.css'
import {TbLockOpen} from 'react-icons/tb'
import {HiOutlineMail} from 'react-icons/hi'

const Login = () => {
  return (
    <div className='form-wrapper'>
        <img src={blobRight} alt='blob-right' className='blob right-top-blob' />
        <img src={blobLeft} alt='blob-left' className='blob left-bottom-blob' />

        <Link to='/'><img src={logo} alt="logo" className='logo' /></Link>
        <h2 className='text-white'>Login into your account</h2>

        <form action="">
          <div className='form-group'>
              <HiOutlineMail  className='input-icon'/>
              <input type='email' id='email' placeholder='Email Address'/>
          </div>

          <div className='form-group'>
            <TbLockOpen className='input-icon'/>
            <input type='password' id='password' placeholder='Email Address' />
          </div>

          <div className='form-password-actions'>
            <div>
              <input type="checkbox" id='rememberme'/> 
              <label htmlFor='rememberme'>Remember me</label>
            </div>
            <div><Link to='password-reset' className='nav-link text-primary'>Forgotten password?</Link></div>
          </div>

          <div className='form-group'>
              <input type='submit' value='Sign In' />
          </div>

          <div>
            <h3>OR</h3>
          </div>

          <div className='social-login'>
              <img src={google} alt="google" />
              <h4>Sign In with Google</h4>
          </div>
          <p>Don't have an account? <Link to='signup' className='text-primary'>Sign Up</Link></p>
          
        </form>
    </div>
  )
}

export default Login
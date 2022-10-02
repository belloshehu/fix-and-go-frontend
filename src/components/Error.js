import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <div className='error'>
        <h1>Error! Page not found</h1>
        <Link to='/' className='btn bg-primary nav-link text-white'>Home</Link>
    </div>
  )
}

export default Error
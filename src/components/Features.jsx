import React from 'react'
import {Link} from 'react-router-dom'
import resourcesImage from '../images/resources.png'
import engineersImage from '../images/engineers.png'

export const Features = () => {
  return (
    <div className='features'>
        <article className='feature'>
            <p className='align-left'>
                For a good usability of your vehicles, We have provided you helpful tips on best practices in vehicle maintenance. 
                All you need to do is Register with your personal details and email on our web app.
            </p>
            <div className='flex'>
                {/* <Link to='services' className='link-item'>Join Today</Link>
                <Link to='home'  className='link-item'>Contact Us</Link> */}
                <a href="/" className='btn btn-large nav-link bg-primary text-white'>Join Today</a>
                <a href='/' className='btn btn-large nav-link bg-secondary text-white small-margin-left'>Contact Us</a>
            </div>
        </article>
        <article className='feature'>
            <div>
                <h2 className='align-left'>Qualified Engineers</h2>
                <p className='align-left'>
                    Our Engineers are well vetted and all have a strong technical background
                    with long term experience in good service delivery.
                </p>
            </div>
            <img src={engineersImage} alt="engineers" />
        </article>
        <article className='feature'>
            <img src={resourcesImage} alt="resources" />
            <div>
                <h2 className='align-left'>Helpful Resources</h2>
                <p className='align-left'>
                    For a good usability of your vehicles,we have provided you helpful tips on best practices in vehicle maintenance.
                </p>
            </div>
        </article>
    </div>
  )
}

import React from 'react'
import logo from '../images/logo-white.png'
import {Link} from 'react-router-dom'
import {FaLinkedinIn, FaInstagram} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'
import { useState, useEffect } from 'react'

const socialLinks = [
    {
        icon: <FaInstagram className='text-white'/>,
        link: 'https://www.instagram.com'
    },
    {
        icon: <FiTwitter className='text-white'/>,
        link: 'https://www.twitter.com'
    },
    {
        icon: <FaLinkedinIn className='text-white'/>,
        link: 'https://www.linkedin.com'
    },
]


export const Footer = () => {
    const [year, setYear] = useState('')

    useEffect(() => {
        let presentYear = new Date().getFullYear().toString()
        setYear(presentYear)
    }, [])
    

    return (
        <footer className='footer bg-primary'>
            <div className='footer-main'>
                <article className='align-left'>
                    <div>
                        <img className='logo' src={logo} alt="logo" />
                    </div>
                    <div className='social-wrapper'>
                        {
                            socialLinks.map((socialLink, index) =>{
                                const {icon, link} = socialLink  
                                return(
                                    <Link className='nav-link text-white' to={link}>{icon}</Link>
                                )
                            })
                        }
                    </div>
                </article>
                <article className='align-left'>
                    <h5 className='text-white'>Our Products</h5>
                    <ul className='nav-items'>
                        <li className=''>
                            <Link className='nav-link text-gray4' to='#'>why Fix'n Go</Link>
                        </li>
                        <li>
                            <Link className='nav-link text-gray4' to='#'>how does it work</Link>
                        </li>
                    </ul>
                </article>
                <article className='align-left'>
                    <h5 className='text-white'>Support</h5>
                    <ul className='nav-items'>
                        <li>
                            <Link className='nav-link text-gray4' to='#'>FAQs</Link>
                        </li>
                        <li>
                            <Link className='nav-link text-gray4' to='#'>Terms of use</Link>
                        </li>
                        <li>
                            <Link className='nav-link text-gray4' to='#'>privacy policy</Link>
                        </li>
                    </ul>
                </article>
                <article className='align-left'>
                    <h5 className='text-white'>Company</h5>
                    <ul className='nav-items'>
                        <li>
                            <Link className='nav-link text-gray4' to='#'>about us</Link>
                        </li>
                        <li>
                            <Link className='nav-link text-gray4' to='#'>contact us</Link>
                        </li>
                        <li>
                            <Link className='nav-link text-gray4' to='#'>join our team</Link>
                        </li>
                    </ul>
                </article>
                <article className='align-left'>
                    <h5 className='text-white'>Contact Us</h5>
                    <p className='text-gray4'>send an email to get a reply from us</p>
                    <form >
                        <input type="email" placeholder='Enter your email here' />
                        <input type="submit" value='Send' className='bg-secondary text-white' />
                    </form>
                </article>
            </div>
            <div className='footer-foot'>
                <p className='text-gray4'>&#169; {year} Fix'n Go |Terms |Privacy</p>
            </div>
        </footer>
    )
}

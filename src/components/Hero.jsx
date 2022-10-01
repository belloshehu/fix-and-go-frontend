import React from 'react'
import heroMechanic from '../images/hero-mechanic.png'
import heroCar from '../images/hero-car.png'
import blob1 from '../images/blob-left.png'
import blob2 from '../images/blob-right.png'

import {useState, useRef, useEffect} from 'react'

export const Hero = () => {
    const [active, setActive] = useState(null)
    const heroPhotosDiv = useRef(null)
    const indicatorWrapper = useRef(null)

    const switchActive = () =>{

    }
    useEffect(() => {
        const timeOut = setTimeout(()=>{
            heroPhotosDiv.current.childNodes.forEach((element, index) => {
                if(element.classList.contains('active')){
                    indicatorWrapper.current.childNodes[index].classList.remove('active')
                    element.classList.replace('active', 'next')
                    setActive(element)
                }else{
                    indicatorWrapper.current.childNodes[index].classList.add('active')
                    element.classList.replace('next', 'active')
                    setActive('next')
                }
            });
        }, 5000)
        return () => {
            clearTimeout(timeOut)
        }
    }, [active])

    return (
        <>
            <div className='hero-section'>
            <img className='blob-left-middle' src={blob1} alt="blob-left" />
            <img className='blob-right-bottom' src={blob2} alt="blob-rght" />
                <div className='hero-text'>
                    <h1>Automobile Technology Made Simple</h1>
                    <p>
                        Your automobile vehicles need adequate 
                        maintenace and we have a team of well trained 
                        and qualified professional engineers onboard to get 
                        your vehicles fixed always!
                    </p>
                </div>
                <div className='hero-photo-items' ref={heroPhotosDiv}>
                    <article className='hero-photo-item active'>
                        <img src={heroMechanic} alt='mechanic'/>
                    </article>
                    <article className='hero-photo-item next'>
                        <img src={heroCar} alt='car' />
                    </article>
                </div>
            </div>
            <div className='indicator-wrapper' ref={indicatorWrapper}>
                <div className='indicator active'></div>
                <div className='indicator'></div>
            </div>
        </>
    )
    }

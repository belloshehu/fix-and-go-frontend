import React from 'react'
import data from '../trusted-data'

export const Trust = () => {
  return (
    <div className='trusted-by-wrapper  bg-secondary'>
        <h1 className='text-primary'>We are trusted by</h1>
        <div className='trusted-by-items'>
            {
                data.map((data, index)=>{
                    return(
                        <img key={index} src={data.image} alt={data.name}/>
                    )
                })
            }
        </div>
    </div>
  )
}

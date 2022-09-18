import React from 'react'
import loader from '../images/Loading.gif'

export default function Loading() {
  return (
    <div className='text-center'  style ={{marginTop:"50px"}}>
        <img src={loader} alt=""/> 
    </div>
  )
}

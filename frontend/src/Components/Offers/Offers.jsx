import React from 'react'
import './Offers.css'
import p_img5 from '../Assets/p_img5.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
        <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>Only on best seller products</p>
            <button>Check now</button>
        </div>
        <div className="offers-right">
            <img src={p_img5 } alt="" />
            
        </div>

    </div>
  )
}

export default Offers
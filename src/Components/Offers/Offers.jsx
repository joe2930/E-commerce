import React from 'react'
import './Offers.css'
import ex_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className='off-left'>
            <h2>Exclusive</h2>
            <h2>Offers For You</h2>
            <p>ONLY ON BEST SELLERS PRODUCT</p>
            <button>Check now</button>
      </div>
      <div className='off-right'>
            <img src={ex_image} alt='girl_image'></img>
      </div>
    </div>
  )
}

export default Offers

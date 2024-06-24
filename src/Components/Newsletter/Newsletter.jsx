import React from 'react'
import    './Newsletter.css' 

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h2>Get Exclusive Offers On Your Email</h2>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className='news_input'>
            <input type='email' placeholder='E-mail_id'></input>
            <button>Subscribe</button>
        </div>
    </div>

  )
}

export default Newsletter

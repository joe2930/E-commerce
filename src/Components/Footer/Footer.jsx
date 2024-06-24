import React from 'react'
import logo from '../Assets/logo.png'
import '../Footer/Footer.css'
import insta_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import wtsp_icon from '../Assets/whatsapp_icon.png'




const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logo} alt='logo_icon'></img>
        <h1>SHOPPER</h1>
      </div>
       <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
       </ul>
       <div className="footer-social-icon">
               <img src={insta_icon} alt="" />
                <img src={pintester_icon} alt="" />
                <img src={wtsp_icon} alt="" />
            
       </div>
       <hr/>
       <div className="cpyrit">
           <p> Copyright @ 20 - All Right Reserverd.</p>
       </div>
    </div>
  )
}

export default Footer

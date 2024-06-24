import React, { useState, useContext } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { Shopcontext } from '../../Context/Shopcontext'


const Navbar=()=>
 {
  const {totalCart} = useContext(Shopcontext)
    //use state variable
    const [menu,setMenu]=useState("shop")    //---for red line--
    //whenever user click what item that item store it in menu variable

    //if menu is shop then hr should be also below shop
  return (
    <div className='navbar'>

      <div className='nav-logo'>
            <img src={logo} alt='product_image'></img>
            <p>SHOPPER</p>
      </div>

     <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none"}} to='/'>SHOP</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:"none"}}to='/mens'>MEN</Link>{menu==="men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:"none"}}to='/womens'>WOMEN</Link>{menu==="women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}}to='/kids'>KIDS</Link>{menu==="kids"?<hr/>:<></>}</li>
     </ul>

      <div className='nav-login-cart'>
      <Link style={{textDecoration:"none"}} to='/login' ><button >LOGIN</button></Link>
      <Link to='/cart'>   <img src={cart_icon} alt='cart_icon'></img></Link>
          <div className='nav-cart-count'> {totalCart()}</div>
      </div>
    </div>
  )
}

export default Navbar

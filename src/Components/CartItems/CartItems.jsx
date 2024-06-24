import React, { useContext } from 'react'
import './CartItems.css'
import { Shopcontext } from '../../Context/Shopcontext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {getotal,all_product,cartItems,removeFromCart} = useContext(Shopcontext)
  return (
    <div className='cartitems'>
      <div className="format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
    {all_product.map((e)=>
    {
        if(cartItems[e.id]>0) 
        {
            return <div>
                        <div className="format format-main">
                            <img src={e.image} alt="" className='icon'/>
                            <p>{e.name}</p> 
                            <p className='price'>${e.new_price}</p>
                            <button className='quantity'>{cartItems[e.id]}</button>
                            <p className='price'>${e.new_price*cartItems[e.id]}</p> 
                            <img className='remove-icon' src={remove_icon} onClick={()=>
                            {
                                removeFromCart(e.id) 
                            }} alt="" />
                        </div>
                        <hr />
                    </div>
        }
        else{
            return null
        }
    })}
    <div className="down">
        <div className="total">
            <h1>Cart Total</h1>
            <div>
                <div className="total-items">
                    <p>Sub Total</p>
                    <p>${getotal()}</p>
                </div>
                <hr/>
                <div className="total-items">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="total-items">
                    <h3>Total</h3>
                    <h3>${getotal()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
            <div className="promo">
                <p>If you have a promo code, Enter it here</p>
                <div className="promo-box">
                    <input type="text" placeholder='PROMO CODE' />
                    <button>SUBMIT</button>
                </div>
            </div>
    </div>

     
    </div>
  )
}

export default CartItems

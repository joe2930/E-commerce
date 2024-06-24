import React, { useContext } from 'react'
import './ProductDisp.css'
import star_icon from '../Assets/star_icon.png'
import dull_star from '../Assets/star_dull_icon.png'
import { Shopcontext } from '../../Context/Shopcontext'

const ProductDisp = (props) => {
    const {product}=props;
    const {addToCart} =useContext(Shopcontext)
  return (
    <div className='display'>
        <div className="p-left">
            <div className="image-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="p-image">
                <img className='main-image'  src={product.image} alt="" />
            </div>
        </div>
        <div className="p-right">
            <h1>{product.name}</h1> 
            <div className="star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={dull_star} alt="" />
                <p>(122)</p>
            </div>
            <div className="prices">
                <div className="old-price">
                    ${product.old_price}
                </div>
                <div className="new-price">
                    ${product.new_price}
                </div>
            </div>
            <div className="descrptn">
               <h1> A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment..</h1>

            </div>
            <div className="size">
                <h1>Select size</h1>
                <div className="size2">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>
            {
                addToCart(product.id) 
            }}>ADD TO CART</button>
            <p className='right-category'>
                <span>Category :</span>
                Women , T-shirt, Crop Top
            </p>
            <p className='right-category'>
                <span>Tags :</span>
                Modern, Latest
            </p>

        </div>
    </div>
  )
}

export default ProductDisp

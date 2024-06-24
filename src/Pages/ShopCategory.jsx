import React,{useContext} from 'react'
import './CSS/ShopCategory.css'
import {Shopcontext} from '../Context/Shopcontext'
import Item from '../Components/Item/Item'
const ShopCategory = (props) => {
  const {all_product} = useContext (Shopcontext) 

  return (
    <div className='shop-category'>
        <img className='s-banner' src={props.banner} alt='men_banner'></img>
        <div className="shop-products">
            {all_product.map((item,i) =>
            {
              if(props.category===item.category)
              {
                return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.new_price} new_price={item.new_price}/> 
              }
              else
              {
                return null
              }
            })}
        </div>
    </div>
  )
}

export default ShopCategory

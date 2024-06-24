import React from 'react'
import './Relateproducts.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
        <h1>RELATED PRODUCTS</h1>
        <hr />
        <div className="items">
            {data_product.map((item,i)=>
            {
                return <Item key={i} id={item.id} name={item.name} old_price={item.old_price} new_price={item.new_price} image={item.image}/>
            })}
        </div>

    </div>
  )
}

export default RelatedProducts

import React, { useContext } from 'react'
import { Shopcontext } from '../Context/Shopcontext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Components/Breadcrums/Breadcrums.jsx'
import ProductDisp from '../Components/ProductDisp/ProductDisp.jsx'
import Description from '../Components/Description/Description.jsx'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts.jsx'

const Product = () => {
  const {all_product} = useContext(Shopcontext) 
  const {productId}=useParams();
  const product = all_product.find((e)=>e.id === Number(productId));
  return (
    <div> 
      <Breadcrums product={product}/> 
      <ProductDisp product={product}/> 
      <Description />
      <RelatedProducts/>
    </div>
  )
}

export default Product

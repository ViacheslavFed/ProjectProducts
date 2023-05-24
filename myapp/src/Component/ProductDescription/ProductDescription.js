import React, { useEffect, useState } from 'react'
import { getProductById } from '../../Rikwest'
import Rating from '../Rating/Rating'
import s from './ProductDescription.module.css'

function ProductDescription({id}) {
    const [product,setProduct] = useState({})
    useEffect(()=>{getProductById(id.id,(product)=>setProduct(product))},[])
    const {title,image,price,description,rating} = product
    const rate = rating ? rating.rate : "";
  return (
    <div className={s.product_description}>
        <h2 className={s.product_description_title}>{title}</h2>
        <img src={image} className={s.product_description_image}/>
        <p>{price} €</p>
        <p className={s.product_description_title}>{description}</p>
        <Rating rate={rate}/>
    </div>
  )
}

export default ProductDescription
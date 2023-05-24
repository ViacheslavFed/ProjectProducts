import React from 'react'
import { NavLink } from 'react-router-dom'
import Rating from '../Rating/Rating'
import s from './ProductItem.module.css'

function ProductItem({image,title,price,rating,id}) {
    const rate = rating.rate
    const link = `/products/${id}`
  return (
    <div className={s.product_item}>
        <div className={s.product_image}>
            <NavLink to={link}><img src={image} className={s.image}/></NavLink>
        </div>
        <h2 className={s.product_title}>{title}</h2>
        <p>{price} $</p>
        <Rating rate={rate}/>
    </div>
  )
}

export default ProductItem
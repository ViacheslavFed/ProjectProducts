import React, { useEffect, useState } from 'react'
import ProductList from '../../Component/ProductList/ProductList'
import { getProducts } from '../../Rikwest'

function ProduktListPage() {
    const [products,setProducts] = useState([])
    useEffect(()=>getProducts(setProducts),[])
    console.log(products)
  return (
    <div>
        <ProductList products={products}/>
    </div>
  )
}

export default ProduktListPage
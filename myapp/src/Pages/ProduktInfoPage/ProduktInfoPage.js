import React from 'react'
import { useParams } from 'react-router-dom'
import ProductDescription from '../../Component/ProductDescription/ProductDescription'

function ProduktInfoPage() {
    const id = useParams()
    console.log(id)
  return (
    <div>
        <ProductDescription id={id}/>
    </div>
  )
}

export default ProduktInfoPage
import { json } from "react-router-dom"

const url = 'https://fakestoreapi.com/products'

export const getProducts = (callBack)=>{
    fetch(url)
    .then(res=>res.json())
    .then(json=>callBack(json))
}

export const getProductById = (id,callBack)=>{
    console.log(`${url}${id}`)
    fetch(`${url}/${id}`)
    .then(res=>res.json())
    .then(json=>callBack(json))
}
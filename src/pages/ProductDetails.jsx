import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const {name} = useParams()
    console.log(name)
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails
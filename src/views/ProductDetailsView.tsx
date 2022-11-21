import React, {useContext, useState, useEffect } from 'react'
import NavbarSection from '../section/NavbarSection'
import { useParams } from 'react-router-dom'
import { RelatedProductContext } from '../contexts/contexts'
import ProductDetails from '../section/ProductDetails'
import { IProduct } from '../models/ProductModel'

interface props {
  items?: IProduct[]
}

const ProductDetailsView: React.FC<props> = ({items}) => {

  const realatedProduct = useContext(RelatedProductContext)

  const {id} = useParams()
  const [product, setProduct] = useState({})

  useEffect (() => {
    const fetchData = async () => {
      const result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/${id}`)
      setProduct(await result.json())
    }
    fetchData()
  }, [])

  return (
    <>
    <NavbarSection />
    <ProductDetails product={product} items={realatedProduct}/>


    </>
  )
}

export default ProductDetailsView
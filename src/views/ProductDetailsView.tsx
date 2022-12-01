import React, {useContext, useEffect } from 'react'
import NavbarSection from '../section/NavbarSection'
import { useParams } from 'react-router-dom'
import ProductDetails from '../section/ProductDetails'
import { ProductContextType, useProductContext } from '../contexts/productContext'



const ProductDetailsView: React.FC = () => {

  const {id} = useParams<string>()
  const productContext = useProductContext() as ProductContextType
  useEffect(() => {
    productContext.getProduct(id)
  }, [])


  const {realatedProduct, getRealatedProducts} = useProductContext() as ProductContextType;
  useEffect(() => {
    getRealatedProducts(3)
  }, [])


  return (
    <>
    <NavbarSection />
    <ProductDetails product={productContext.product} items={realatedProduct}/>


    </>
  )
}

export default ProductDetailsView
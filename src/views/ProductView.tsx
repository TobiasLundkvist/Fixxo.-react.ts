import React, { useContext, useEffect } from 'react'
import { ProductContextType, useProductContext } from '../contexts/productContext';
import NavbarSection from '../section/NavbarSection'
import ProductGridSection from '../section/ProductGridSection';

const ProductView: React.FC = () => {

  const {products, getProducts} = useProductContext() as ProductContextType;

  useEffect(() => {
    getProducts()
  }, [])


  return (
    <>
      <NavbarSection />
      <ProductGridSection items={products} />

    </>
    
  )
}

export default ProductView
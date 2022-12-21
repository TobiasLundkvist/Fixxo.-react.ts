import React, { useEffect } from 'react'
import { ProductContextType, useProductContext } from '../contexts/productContext';
import AllProductSection from '../section/AllProductSection';
import NavbarSection from '../section/NavbarSection'

const ProductView: React.FC = () => {

  const { getProducts } = useProductContext() as ProductContextType;

  useEffect(() => {
    getProducts()
  }, [])


  return (
    <>
      <NavbarSection />
      <AllProductSection />
    </>
    
  )
}

export default ProductView
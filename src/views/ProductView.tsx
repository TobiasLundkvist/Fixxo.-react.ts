import React, { useContext } from 'react'
import { ProductContext } from '../contexts/contexts';
import NavbarSection from '../section/NavbarSection'
import ProductGridSection from '../section/ProductGridSection';

const ProductView: React.FC = () => {

  const products = useContext(ProductContext);


  return (
    <>
      <NavbarSection />
      { products && <>
        <ProductGridSection items={products} />
      </>}
    </>
    
  )
}

export default ProductView
import React from 'react'
import ProductCard from '../components/ProductCard'
import { IProduct } from '../models/ProductModel'

interface ProductGridProps {
  items: IProduct[]
}

const ProductGridSection: React.FC<ProductGridProps> = ({items}) => {
  return (
    <section>
      <div className="product-grid">
        <h1>Featured Products</h1>
        <div className="grid container">
          {
            items.map(product => <ProductCard key={product.articleNumber} product={product} />)
          }
        </div>
      </div>
    </section>
  )
}

export default ProductGridSection
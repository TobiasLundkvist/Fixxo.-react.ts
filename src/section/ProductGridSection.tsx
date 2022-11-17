import React from 'react'
import ProductCard from '../components/ProductCard'

const ProductGridSection: React.FC = ({items=[]}:any) => {
  return (
    <section>
      <div className="product-grid">
        <h1>Featured Products</h1>
        <div className="grid container">
          {
            items.map((product:any) => <ProductCard key={product.articleNumber} item={product} />)
          }
        </div>
      </div>
    </section>
  )
}

export default ProductGridSection
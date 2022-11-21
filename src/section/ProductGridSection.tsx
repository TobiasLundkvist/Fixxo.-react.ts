import React from 'react'
import ProductCard from '../components/ProductCard'
import { IProduct } from '../models/ProductModel'

interface props {
items: IProduct[]
}

const ProductGridSection: React.FC<props> = ({items}) => {
  return (
    <section>
      <div className="product-grid">
        <h1>Featured Products</h1>
        <div className="grid container">
          {
            items.map((product:any) => <ProductCard key={product.articleNumber} product={product} />)
          }
        </div>
      </div>
    </section>
  )
}

export default ProductGridSection
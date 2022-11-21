import React from 'react'
import { IProduct } from '../models/ProductModel'
import ProductCard from './ProductCard'

interface props {
    items: IProduct[]
    sectionTitle: string;
}

const RankingProduct: React.FC<props> = ({items, sectionTitle}) => {
  return (
    <div className='ranking container'>
        <h1>{sectionTitle}</h1>
        <div className='test'>
            {items.map((product:any) => <ProductCard key={product.articleNumber} product={product} />)}
        </div>
    </div>  )
}

export default RankingProduct
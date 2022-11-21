import React from 'react'
import { IProduct } from '../models/ProductModel'
import ProductCard from './ProductCard'

interface props {
    items: IProduct[]
}

const TwoFor29: React.FC<props> = ({items}) => {
  return (
    <div className='twofor29 container'>
        <div className="twofor-body">
            <div className="twofor-text">
                2 FOR USD $29
            </div>
            <button className="btn-white">
                <div className="corner-top-left"></div>
                <div className="corner-bottom-right"></div>
            FLASH SALE</button>
        </div> 
        <div className="card-grid">
        {
            items.map((product:any) => <ProductCard key={product.articleNumber} product={product} />)
        }
        </div>
    </div>
  )
}

export default TwoFor29
import React from 'react'
import { IProduct } from '../models/ProductModel'
import ProductCard from './ProductCard'

interface props {
    items: IProduct[]
}

const TwoFor49: React.FC<props> = ({items}) => {
  return (
    <div className='twofor49 container'>
        <div className="card-grid">
            {
                items.map((product:any) => <ProductCard key={product.articleNumber} product={product} />)
            }
        </div>
        <div className="twofor-body49">
            <div className="twofor-text">
                2 FOR USD $49
            </div>
            <button className="btn-white">
                <div className="corner-top-left"></div>
                <div className="corner-bottom-right"></div>
                FLASH SALE
            </button>
        </div> 
    </div>
  )
}

export default TwoFor49
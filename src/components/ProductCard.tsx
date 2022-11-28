import React from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContextProps, useShoppingCartContext } from '../contexts/shoppingCartContext'
import { IProduct } from '../models/ProductModel'
import { currencyFormatter } from '../utilities/currencyFormat'

interface ProductCardProps {
  product: IProduct
}


const ProductCard: React.FC<ProductCardProps> = ({product}) => {
  const {increment} = useShoppingCartContext() as ShoppingCartContextProps


  return (
    <div className="the-product">
      <div className="product-card">
      <img src={product.imageName} alt={product.name}/>
          <div className="card-img">
              <div className="card-menu">
                  <button className='card-icon'><i className="fa-light fa-heart"></i></button> 
                  <button className='card-icon'><i className="fa-light fa-code-compare"></i></button> 
                  <button onClick={() => increment({articleNumber: product.articleNumber, product: product, quantity: 1})} className='card-icon'><i className="fa-light fa-bag-shopping"></i></button> 
                  {/* <button className='card-icon'><i className="fa-light fa-bag-shopping"></i></button>  */}
              </div>
              <NavLink to={`/product/${product.articleNumber}`} className='btn-red'>
                  <div className="corner-top-left"></div>
                  <div className="corner-bottom-right"></div>
                  QUICK VIEW
              </NavLink>
          </div>
      </div>
      <div className="card-body">
          <div className='body-rubrik'>{product.category}</div>
          <p className='body-text'>{product.name}</p>
          <div className='body-rating'>
              <i className="rating fa-solid fa-star"></i>
              <i className="rating fa-solid fa-star"></i>
              <i className="rating fa-solid fa-star"></i>
              <i className="rating fa-solid fa-star"></i>
              <i className="rating fa-solid fa-star"></i>
          </div>
          <p className="price">{currencyFormatter(product.price)}</p>
      </div>
    </div>
  )
}

export default ProductCard
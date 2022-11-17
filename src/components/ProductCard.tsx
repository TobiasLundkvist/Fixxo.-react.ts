import React from 'react'
import { NavLink } from 'react-router-dom'


const ProductCard = ({product}:any) => {
  return (
    <div className="the-product">
      <div className="product-card">
      <img src={product.imageName} alt={product.name}/>
          <div className="card-img">
              <div className="card-menu">
                  <button className='card-icon'><i className="fa-light fa-heart"></i></button> 
                  <button className='card-icon'><i className="fa-light fa-code-compare"></i></button> 
                  <button className='card-icon'><i className="fa-light fa-bag-shopping"></i></button> 
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
          <p className="price">{product.price}</p>
      </div>
    </div>
  )
}

export default ProductCard
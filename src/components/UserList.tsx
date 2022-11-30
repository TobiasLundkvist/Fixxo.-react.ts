import React, { useEffect } from 'react'
import {IProductContext, ProductContext} from '../contexts/UserContext'
import { IProduct } from '../models/UserModels'


const UserList = () => {
  const { products, getAll, remove, update } = React.useContext(ProductContext) as IProductContext

  useEffect (() => {
    getAll()
  }, [getAll])


  return (
    <>
      <section className='list container'>
        <h5 className='product-list'>Products List</h5>
        <div className='listed-product'>
          {
            products.map((product: IProduct) => (
            <div 
              key={product.id} className='list-product'>id: {product.id} <br></br> {product.articleNumber} <br></br> {product.name} <br></br> {product.category} <br></br> {product.price} <br></br> {product.rating} <br></br> {product.imageName}
              <button className='btn' onClick={() => remove(product.id)}><i className='fa-regular fa-trash'></i></button>
              <button className='btn' onClick={() => (product.id)}><i className='fa-regular fa-gear'></i></button>
            </div>))
          }
        </div>
      </section>
    </>
  )
}

export default UserList
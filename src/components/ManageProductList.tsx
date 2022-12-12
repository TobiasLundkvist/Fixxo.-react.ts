import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import {IProductContext, ProductContext} from '../contexts/manageProductContext'
import { IProduct } from '../models/ManageProductModels'


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
              key={product.articleNumber} className='list-product'>tag: {product.tag} {product.id} <br></br> {product.articleNumber} <br></br> {product.name} <br></br> {product.category} <br></br> {product.price} <br></br> {product.rating} <br></br> {product.imageName}
              <button className='btn' onClick={() => remove(product.articleNumber)}><i className='fa-regular fa-trash'></i></button>
              <NavLink to={`/update/${product.articleNumber}`}>
                <button className='btn'><i className='fa-regular fa-gear'></i></button>
              </NavLink>
            </div>))
          }
        </div>
      </section>
    </>
  )
}

export default UserList
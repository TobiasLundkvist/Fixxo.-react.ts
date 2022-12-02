import React from 'react'
import { IProductContext, ProductContext } from '../contexts/UserContext'
import NavbarSection from '../section/NavbarSection'

const UpdateProductView: React.FC = () => {
  const { product, setProduct, update } = React.useContext(ProductContext) as IProductContext


  return (
    <>
    <NavbarSection />
    <div className='product-form container'>
      <div className='product-form-body'>
        <form onSubmit={update}>
          <h3 className='create-product'>Update Product</h3>
          <input value={product.id} onChange={(e) => setProduct({...product, id:Number (e.target.value)})} type="text" className='form-control py-2 mb-3' placeholder='Articlenumber' />
          <input value={product.articleNumber} onChange={(e) => setProduct({...product, articleNumber: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Articlenumber' />
          <input value={product.category} onChange={(e) => setProduct({...product, category: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Product name' />
          <input value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Product name' />
          <input value={product.price} onChange={(e) => setProduct({...product, price: Number(e.target.value)})} type="text" className='form-control py-2 mb-3' placeholder='Product name' />
          <input value={product.rating} onChange={(e) => setProduct({...product, rating: Number(e.target.value)})} type="text" className='form-control py-2 mb-3' placeholder='Product name' />
          <input value={product.imageName} onChange={(e) => setProduct({...product, imageName: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Product name' />
          
          <button type="submit" className='btn-red'>UPDATE PRODUCT</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default UpdateProductView
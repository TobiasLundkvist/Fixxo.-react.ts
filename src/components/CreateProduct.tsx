import React, { useState } from 'react'
import { IProductContext, ProductContext} from '../contexts/UserContext'

const CreateProduct: React.FC = () => {

    // const [errors, setErrors] = useState({ articleNumber:any })

    const { createProductRequest, setCreateProductRequest, create, product, setProduct, update } = React.useContext(ProductContext) as IProductContext

  return (
    <section>
      <div className='product-form container'>
        <div className='product-form-body'>    
          <form onSubmit={create}>
            <h3 className='create-product'>Create Product</h3>
            <input value={createProductRequest.articleNumber} onChange={(e) => setCreateProductRequest({...createProductRequest, articleNumber: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Articlenumber' />
              {/* <div className="errorMessage">{errors.name}</div> */}
            <input value={createProductRequest.category} onChange={(e) => setCreateProductRequest({...createProductRequest, category: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Category' />
            <input value={createProductRequest.name} onChange={(e) => setCreateProductRequest({...createProductRequest, name: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Product name' />
            <input value={createProductRequest.price} onChange={(e) => setCreateProductRequest({...createProductRequest, price:Number(e.target.value)})} type="text" className='form-control py-2 mb-3' placeholder='Price' />
            <input value={createProductRequest.rating} onChange={(e) => setCreateProductRequest({...createProductRequest, rating:Number(e.target.value)})} type="text" className='form-control py-2 mb-3' placeholder='Rating' />
            <input value={createProductRequest.imageName} onChange={(e) => setCreateProductRequest({...createProductRequest, imageName: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Product image' />

            <button type="submit" className='btn-red'>CREATE PRODUCT</button>
          </form>
        </div>
        {/* <div className='product-form-body'>
          <form onSubmit={update}>
            <h3 className='create-product'>Update Product</h3>
            <input value={product.id} onChange={(e) => setProduct({...product, id:Number (e.target.value)})} type="text" className='form-control py-2 mb-3' placeholder='Articlenumber' />
            <input value={product.articleNumber} onChange={(e) => setProduct({...product, articleNumber: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Articlenumber' />
            <input value={product.category} onChange={(e) => setProduct({...product, category: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Product name' />
            <input value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Product name' />
            
            <button type="submit" className='btn-red'>UPDATE PRODUCT</button>
          </form>
        </div> */}
      </div>
    </section>
  )
}

export default CreateProduct
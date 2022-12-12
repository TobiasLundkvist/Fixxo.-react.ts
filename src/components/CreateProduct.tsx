import React from 'react'
import { IProductContext, ProductContext} from '../contexts/manageProductContext'

const CreateProduct: React.FC = () => {
    const { createProductRequest, setCreateProductRequest, create, product, setProduct, update } = React.useContext(ProductContext) as IProductContext

  return (
    <section>
      <div className='product-form container'>
        <div className='product-form-body'>    
          <form onSubmit={create}>
            <h3 className='create-product'>Create Product</h3>
            <input value={createProductRequest.tag} onChange={(e) => setCreateProductRequest({...createProductRequest, tag: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Product tag' />
            <input value={createProductRequest.category} onChange={(e) => setCreateProductRequest({...createProductRequest, category: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Category' />
            <input value={createProductRequest.name} onChange={(e) => setCreateProductRequest({...createProductRequest, name: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Product name' />
            <input value={createProductRequest.price || ''} onChange={(e) => setCreateProductRequest({...createProductRequest, price:Number(e.target.value)})} type="number" className='form-control py-2 mb-3' placeholder='Price'/>
            <input value={createProductRequest.rating || ''} onChange={(e) => setCreateProductRequest({...createProductRequest, rating:Number(e.target.value)})} type="number" className='form-control py-2 mb-3' placeholder='Rating' />
            <input value={createProductRequest.imageName} onChange={(e) => setCreateProductRequest({...createProductRequest, imageName: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Product image' />

            <button type="submit" className='btn-red'>CREATE PRODUCT</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CreateProduct
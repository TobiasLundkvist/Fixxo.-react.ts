import React, { useEffect } from 'react'
import { IProductContext, ProductContext } from '../contexts/manageProductContext'
import NavbarSection from '../section/NavbarSection'
import { useParams, useNavigate } from 'react-router-dom'

const UpdateProductView: React.FC = () => {
  const { product, setProduct, update, get, error, setError } = React.useContext(ProductContext) as IProductContext
  const { id } = useParams()
  const navigate = useNavigate()
 
  useEffect (() => {
    if(id) {
      get(id)
    }
  }, [id])

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()

  if(product.name.length <= 2 || product.price <= 0) {
    setError(true)
  } else {
    setError(false)
    update()
    navigate('/manage')
  }
}
  

  return (
    <>
    <NavbarSection />
    <div className='product-form container'>
      <div className='product-form-body'>
        <form onSubmit={handleSubmit}>
          <h3 className='create-product'>Update Product</h3>
          <input value={product.tag} onChange={(e) => setProduct({...product, tag: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Product tag' />
          <input value={product.category} onChange={(e) => setProduct({...product, category: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Category' />
          {error && product.name.length <= 2 ?<label>Product name is required!</label>:""}
          <input value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Product name' />
          {error && product.price <= 0 ?<label>Price is required!</label>:""}
          <input value={product.price} onChange={(e) => setProduct({...product, price: Number(e.target.value)})} type="text" className='form-control py-2 mb-3' placeholder='Price' />
          <input value={product.rating } onChange={(e) => setProduct({...product, rating: Number(e.target.value)})} type="text" className='form-control py-2 mb-3' placeholder='Rating' />
          <input value={product.imageName} onChange={(e) => setProduct({...product, imageName: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Image name' />
          
          <button type="submit" className='btn-red'>UPDATE PRODUCT</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default UpdateProductView
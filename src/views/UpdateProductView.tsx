import React, { useEffect } from 'react'
import { IProductContext, ProductContext } from '../contexts/manageProductContext'
import NavbarSection from '../section/NavbarSection'
import { useParams, useNavigate } from 'react-router-dom'

const UpdateProductView: React.FC = () => {
  const { product, setProduct, update, get } = React.useContext(ProductContext) as IProductContext
  const { id } = useParams()
  const navigate = useNavigate()
 
  useEffect (() => {
    if(id) {
      get(id)
    }
  }, [id])

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  update()
    navigate('/manage')
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
          <input value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Product name' />
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
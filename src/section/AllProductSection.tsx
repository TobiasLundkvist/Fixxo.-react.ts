import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useQuery, gql } from '@apollo/client'

const GET_PRODUCT_QUERY = gql `
{
  products {
   _id, tag, name, description, category, price, rating, imageName
  }
}` 

const AllProductSection:React.FC = () => {
    const [products, setProducts] = useState([])
    const { loading, error, data } =  useQuery(GET_PRODUCT_QUERY)
    useEffect(() => { 
        if(data) {
            setProducts(() => data.products.map((product:any) => ({
                articleNumber: product._id,
                tag: product.tag,
                name: product.name,
                description: product.description,
                category: product.category,
                price: product.price,
                rating: product.rating,
                imageName: product.imageName
            })))
        }
    },[data])

    if(loading) return <h1 className='text-center'>Loading...</h1>
    if(error) return <h1 className='text-center'>Something went wrong... : {error.message}</h1>

  return (
    <section>
      <div className="product-grid">
        <h1>Products</h1>
        <div className="grid container">
          {
            products.map((product: any) => <ProductCard key={product.articleNumber} product={product} />)
          }
        </div>
      </div>
    </section>
  )
}

export default AllProductSection
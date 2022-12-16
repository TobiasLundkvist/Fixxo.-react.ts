import React, {useState, useContext, createContext} from 'react'
import { IProduct, ICreateProduct } from '../models/ManageProductModels'
import { ProductProviderProps } from '../models/ManageProviderPropsModel'

export interface IProductContext {
  product: IProduct
  setProduct: React.Dispatch<React.SetStateAction<IProduct>>
  createProductRequest: ICreateProduct
  setCreateProductRequest: React.Dispatch<React.SetStateAction<ICreateProduct>>
  products: IProduct[]
  error: any
  setError: any
  create: (e: React.FormEvent) => void
  get: (id:string | number) => void
  getAll: () => void
  update: () => Promise<void>
  remove: (articleNumber: any) => void
}


export const ProductContext = createContext<IProductContext | null>(null)
export const useManageProductContext = () => { return useContext(ProductContext) }

const ManageProductProvider = ({children}: ProductProviderProps) => {
    const baseUrl = 'http://localhost:5000/api/products'
    const product_default: IProduct = {tag: '', id: 0, imageName: '', name: '', category: '', price: 0, articleNumber: '', rating: 0}
    const createProductRequest_default: ICreateProduct = { tag: '', imageName: '', name: '', category: '', price: 0, articleNumber: '', rating: 0}

    const [product, setProduct] = useState<IProduct>(product_default)
    const [createProductRequest, setCreateProductRequest] = useState<ICreateProduct>(createProductRequest_default)
    const [products, setProducts] = useState<IProduct[]>([])
    const [error, setError] = useState(false)

    //säkrad
    //Skapa en produkt till API/funkar
    const create = async (e: React.FormEvent) => {

      const result = await fetch(`${baseUrl}`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(createProductRequest)
      })

      if (result.status === 201) { 
        setCreateProductRequest(createProductRequest_default)
      } else {
        console.log('error')
      } 
    }

    //säkrad
    //Uppdatera en produkt/funkar
    const update = async () => {

      const result = await fetch(`${baseUrl}/${product.articleNumber}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(product)

      })

      if (result.status === 200) {
        const data = await result.json()
        setProduct(data) 
      }

    }

    //säkrad
    //Ta bort en produkt/funkar
    const remove = async (articleNumber: any) => {
      const result = await fetch(`${baseUrl}/${articleNumber}`, { 
        method: 'delete', 
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })

      if (result.status === 204) 
        setProduct(product_default) 
    }

    //osäkrad
    //Hämta ut en Produkt
    const get = async (id: string | number) => {
      const result = await fetch(`${baseUrl}/product/details/${id}`)
      if (result.status === 200)
        setProduct(await result.json())
    }

    //osäkrad
    //Hämta ut alla produkter
    const getAll = async () => {
      const result = await fetch(`${baseUrl}`)
      if (result.status === 200)
        setProducts(await result.json())
    }



  return (
    <ProductContext.Provider value={{ error, setError, product, setProduct, createProductRequest, setCreateProductRequest, products, create, get, getAll, update, remove }}>
        {children}
    </ProductContext.Provider>
  )
}

export default ManageProductProvider
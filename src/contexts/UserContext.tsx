import React, {useState, useContext, createContext} from 'react'
import { IProduct, ICreateProduct } from '../models/UserModels'
import { ProductProviderProps } from '../models/UserProviderPropsModel'

export interface IProductContext {
  product: IProduct
  setProduct: React.Dispatch<React.SetStateAction<IProduct>>
  createProductRequest: ICreateProduct
  setCreateProductRequest: React.Dispatch<React.SetStateAction<ICreateProduct>>
  products: IProduct[]
  create: (e: React.FormEvent) => void
  get: (id:number) => void
  getAll: () => void
  update: (e: React.FormEvent) => void
  remove: (id: number) => void
}


export const ProductContext = createContext<IProductContext | null>(null)
export const useUserContext = () => { return useContext(ProductContext) }

const UserProvider = ({children}: ProductProviderProps) => {
    const baseUrl = 'http://localhost:5000/api/manageproducts'
    const product_default: IProduct = {id: 0, imageName: '', name: '', category: '', price: 0, articleNumber: '', rating: 0}
    const createProductRequest_default: ICreateProduct = {imageName: '', name: '', category: '', price: 0, articleNumber: '', rating: 0}

    const [product, setProduct] = useState<IProduct>(product_default)
    const [createProductRequest, setCreateProductRequest] = useState<ICreateProduct>(createProductRequest_default)
    const [products, setProducts] = useState<IProduct[]>([])


    const create = async (e: React.FormEvent) => {
      e.preventDefault()

      const result = await fetch(`${baseUrl}`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(createProductRequest)
      })

      if (result.status === 201) { 
        setCreateProductRequest(createProductRequest_default)
      } else {
        console.log('error')
      }



    }
    const get = async (id:number) => {
      const result = await fetch(`${baseUrl}/${id}`)
      if (result.status === 200)
        setProduct(await result.json())
    }
    const getAll = async () => {
      const result = await fetch(`${baseUrl}`)
      if (result.status === 200)
        setProducts(await result.json())
    }
    const update = async (e: React.FormEvent) => {
      e.preventDefault()

      const result = await fetch(`${baseUrl}/${product.id}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      })

      if (result.status === 200) 
        setProduct(await result.json()) 
    }
    const remove = async (id: number) => {
      const result = await fetch(`${baseUrl}/${id}`, { 
        method: 'delete' 
      })

      if (result.status === 204) 
        setProduct(product_default) 
    }


  return (
    <ProductContext.Provider value={{ product, setProduct, createProductRequest, setCreateProductRequest, products, create, get, getAll, update, remove }}>
        {children}
    </ProductContext.Provider>
  )
}

export default UserProvider
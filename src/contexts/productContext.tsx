import { useState, useContext, createContext } from "react"
import { IProduct } from "../models/ProductModel"

interface ProductProviderProps {
    children: any
}

export interface ProductContextType {
    product: IProduct
    products: IProduct[]
    featured: IProduct[]
    twoFor: IProduct[]
    productsRank: IProduct[]
    realatedProduct: IProduct[]
    getProduct: (articleNumber?: string) => void
    getProducts: (take?: number) => void
    getFeatured: (take?: number) => void
    getTwoFor: (take?: number) => void
    getProductsRank: (take?: number) => void
    getRealatedProducts: (take?: number) => void
}

export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext) }



const ProductProvider: React.FC<ProductProviderProps> =({children}) => {
    const baseUrl: string = 'https://win22-webapi.azurewebsites.net/api/products'
    const emptyValues: IProduct = { articleNumber: '', name: '', category: '', price: 0, imageName: '', rating: 0, description:''  }

    const [product, setProduct] = useState<IProduct>(emptyValues)
    const [products, setProducts] = useState<IProduct[]>([])
    const [featured, setFeatured] = useState<IProduct[]>([])
    const [twoFor, setTwoFor] = useState<IProduct[]>([])
    const [productsRank, setProductsRank] = useState<IProduct[]>([])
    const [realatedProduct, setRealatedProduct] = useState<IProduct[]>([])

    const getProduct = async (articleNumber?: string) => {
        if(articleNumber !== undefined) {
            const res = await fetch(baseUrl + `/${articleNumber}`)
            setProduct(await res.json())
        }
    }

    const getProducts = async (take:number = 0) => {
        let url = baseUrl

        if(take !== 0 )
            url = baseUrl + `?take=${take}`

        const res = await fetch(url)
        setProducts(await res.json())
    }

    const getFeatured = async (take:number = 8) => {
        let url = baseUrl + `?tag=featured`

        if(take !== 0 )
            url += `&take=${take}`

        const res = await fetch(url)
        setFeatured(await res.json())
    }

    const getTwoFor = async (take:number = 4) => {
        let url = baseUrl + `?tag=twofor`

        if(take !== 0 )
            url += `&take=${take}`

        const res = await fetch(url)
        setTwoFor(await res.json())
    }

    const getProductsRank = async (take:number = 3) => {
        let url = baseUrl + `?tag=twofor`

        if(take !== 0 )
            url += `&take=${take}`

        const res = await fetch(url)
        setProductsRank(await res.json())
    }

    const getRealatedProducts = async (take:number = 4) => {
        let url = baseUrl + `?tag=twofor`

        if(take !== 0 )
            url += `&take=${take}`

        const res = await fetch(url)
        setRealatedProduct(await res.json())
    }


    return <ProductContext.Provider value={{product, products, featured, twoFor, productsRank, realatedProduct, getProduct, getProducts, getFeatured, getTwoFor, getProductsRank, getRealatedProducts}}>
        {children}
    </ProductContext.Provider>
}

export default ProductProvider
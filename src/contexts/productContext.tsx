import { useState, useContext, createContext } from "react"
import { IProduct } from "../models/ProductModel"

interface ProductProviderProps {
    children: any
}

export interface ProductContextType {
    product: IProduct
    products: IProduct[]
    featured: IProduct[]
    twoFor29: IProduct[]
    twoFor49: IProduct[]
    productsRank: IProduct[]
    realatedProduct: IProduct[]
    getProduct: (articleNumber?: string) => void
    getProducts: () => void
    getFeatured: (take?: number) => void
    getTwoFor29: (take?: number) => void
    getTwoFor49: (take?: number) => void
    getProductsRank: (take?: number) => void
    getRealatedProducts: (take?: number) => void
}

export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext) }



const ProductProvider: React.FC<ProductProviderProps> =({children}) => {
    const baseUrl: string = 'http://localhost:5000/api/products'
    const emptyValues: IProduct = { tag: '', articleNumber: '', name: '', category: '', price: 0, imageName: '', rating: 0, description:''  }

    const [product, setProduct] = useState<IProduct>(emptyValues)
    const [products, setProducts] = useState<IProduct[]>([])
    const [featured, setFeatured] = useState<IProduct[]>([])
    const [twoFor29, setTwoFor29] = useState<IProduct[]>([])
    const [twoFor49, setTwoFor49] = useState<IProduct[]>([])
    const [productsRank, setProductsRank] = useState<IProduct[]>([])
    const [realatedProduct, setRealatedProduct] = useState<IProduct[]>([])

    // Hämtar en produkt baserat på articleNumber
    const getProduct = async (articleNumber?: string) => {
        if(articleNumber !== undefined) {
            const res = await fetch(`${baseUrl}/details/${articleNumber}`)
            setProduct(await res.json())
        }
    }
    // Hämtar alla produkter
    const getProducts = async () => {
        const res = await fetch(baseUrl)
        setProducts(await res.json())
    }

    // Hämtar produkter med tag: featured
    const getFeatured = async (take:number = 0) => {
        let url = `${baseUrl}/featured`

        if(take !== 0 )
            url += `/${take}`

        const res = await fetch(url)
        setFeatured(await res.json())
    }

    // Hämtar produkter med tag: twofor29
    const getTwoFor29 = async (take:number = 0) => {
        let url = `${baseUrl}/twofor29`

        if(take !== 0 )
            url += `/${take}`

        const res = await fetch(url)
        setTwoFor29(await res.json())
    }

    // Hämtar produkter med tag: twofor49
    const getTwoFor49 = async (take:number = 0) => {
        let url = `${baseUrl}/twofor49`

        if(take !== 0 )
            url += `/${take}`

        const res = await fetch(url)
        setTwoFor49(await res.json())
    }
    // Hämtar produkter med tag: ranked
    const getProductsRank = async (take:number = 0) => {
        let url = `${baseUrl}/ranked`

        if(take !== 0 )
            url += `/${take}`

        const res = await fetch(url)
        setProductsRank(await res.json())
    }
    // Hämtar produkter med tag: realated
    const getRealatedProducts = async (take:number = 0) => {
        let url = `${baseUrl}/realated`

        if(take !== 0 )
            url += `/${take}`

        const res = await fetch(url)
        setRealatedProduct(await res.json())
    }


    return <ProductContext.Provider value={{product, products, featured, twoFor29, twoFor49, productsRank, realatedProduct, getProduct, getProducts, getFeatured, getTwoFor29, getTwoFor49, getProductsRank, getRealatedProducts}}>
        {children}
    </ProductContext.Provider>
}

export default ProductProvider
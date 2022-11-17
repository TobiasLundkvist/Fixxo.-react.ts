import { createContext, useState, useContext } from 'react'

export const ProductContext = createContext()
export const FeaturedProductsContext = createContext()

// interface IProductContext {
//   items: items[]
// }

// interface IProductContextProvider {
//   children: any;
// }

// const ProductContext = createContext<IProductContext | null>(null);

// export const useProductContext = () => {
//   return useContext(ProductContext)
// }
// export const ProductProvider = ({ children } : IProductContextProvider) => {
//   const [products, setProducts] = useState([])
//   const [featured, setFeatured] = useState([])


//   return <ProductContext.Provider value={{items, featured}}>
//     {children}
//   </ProductContext.Provider>
// }


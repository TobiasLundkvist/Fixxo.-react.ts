import React, { createContext } from 'react'
import {IProduct} from '../models/ProductModel'

export const ProductContext = createContext<IProduct[] | null>(null)
export const FeaturedProductsContext = createContext<IProduct[] | null>(null)
export const TwoForProductsContext = createContext<IProduct[] | null>(null)
export const ProductsRankContext = createContext<IProduct[] | null>(null)
export const RelatedProductContext = createContext<IProduct[] | null>(null)


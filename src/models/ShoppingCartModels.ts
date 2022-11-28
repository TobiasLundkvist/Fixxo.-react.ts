import { IProduct } from "./ProductModel"

export interface CartItem {
    articleNumber: string
    product: IProduct
    quantity: number
}
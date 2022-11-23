import { createContext, useContext, useState } from "react";
import ShoppingCart from '../components/ShoppingCart';

// interface IShoppingCartContext {
//     cartItems: CartItem[];
//     cartQuantity: (any);
//     incrementQuantity: (cartItem:any) => void;
//     decrementQuantity: (cartItem:any) => void;
//     getItemQuantity: (articleNumber:any) => void;
//     removeItem: (articleNumber:any) => void;
// }

// interface CartItem {
//     quantity: number;
//     imageName: string;
//     name: string;
//     category: string;
//     price: number;
//     articleNumber: string;
//     rating: number;
//     description: string;

// }

// interface ShoppingCartProvider {
//     children: any;
// }

// export const ShoppingCartContext = createContext<IShoppingCartContext | null>(null);

// export const useShoppingCart = () => {
//     return useContext(ShoppingCartContext)
// }

// export const ShoppingCartProvider = ({children}: ShoppingCartProvider) => {
//     const [cartItems, setCartItems] = useState<CartItem[]>([])

//     const cartQuantity = cartItems.reduce(
//         (quantity, item) => item.quantity + quantity, 0
//     )

//     const getItemQuantity = (articleNumber: any) => {
//         return cartItems.find(item => item.articleNumber === articleNumber)?.quantity || 0
//     }

//     const incrementQuantity = (cartItem: any) => {
//         const {articleNumber, product} = cartItem

//         setCartItems(items => {
//             if(items.find(item => item.articleNumber === articleNumber) == null) {
//                 return [...items, { articleNumber, product, quantity: 1}]
//             } else {
//                return items.map(item => {
//                 if (item.articleNumber === articleNumber) {
//                     return {...item, quantity: item.quantity + 1}
//                 } else {
//                     return item
//                 }
//                })
//             }
//         })
//     }

//     const decrementQuantity = (cartItem: any) => {
//         const {articleNumber} = cartItem

//         setCartItems(items => {
//             if(items.find(item => item.articleNumber === articleNumber).quantity === 1) {
//                 return items.filter(item => item.articleNumber !== articleNumber)
//             } else {
//                return items.map(item => {
//                 if (item.articleNumber === articleNumber) {
//                     return {...item, quantity: item.quantity - 1}
//                 } else {
//                     return item
//                 }
//                })
//             }
//         })
//     }

//     const removeItem = (articleNumber: any) => {
//         setCartItems(items => {
//             return items.filter(item => item.articleNumber !== articleNumber)
//         })
//     }





//     return <ShoppingCartContext.Provider value={{cartItems, cartQuantity, getItemQuantity, incrementQuantity, decrementQuantity, removeItem}}>
//         {children}
//         <ShoppingCart />
//     </ShoppingCartContext.Provider>
// }
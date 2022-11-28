import React from 'react'
import { ShoppingCartContextProps, useShoppingCartContext } from '../contexts/shoppingCartContext'
import { CartItem } from '../models/ShoppingCartModels'
import { currencyFormatter } from '../utilities/currencyFormat'

interface ShoppingCartItemType {
  item: CartItem
}


const ShoppingCartItem: React.FC<ShoppingCartItemType> = ({item}) => {
  const {increment, decrement, remove} = useShoppingCartContext() as ShoppingCartContextProps

  console.log(item.quantity)

  return (
    <div className='shoppingcart-item'>
      <div className='item-image'>
        <img src={item.product.imageName} alt={item.product.name} />
      </div>
      <div className='item-info'>
        <div className='item-info-name'>{item.product.name}</div>
        <div className='item-info-quantity'>
          <button className='button-left' onClick={() => increment(item)}>+</button>
          <span>{item.quantity}</span>
          <button className='button-right' onClick={() => decrement(item)}>-</button>
        </div>
      </div>
      <div className='item-price'>
        <div>{currencyFormatter(item.product.price * item.quantity)}</div>
        <button onClick={() => remove(item.articleNumber)}><i className='fa-regular fa-trash'></i></button>
      </div>
    </div>
  )
}

export default ShoppingCartItem
'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

interface CartItem {
  productId: number
  quantity: number
}

interface CartContextProps {
  items: CartItem[]
  addToCart: (productId: number) => void
}

type CartProviderProps = { children: ReactNode }

const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([])

  function addToCart(productId: number) {
    setItems((state) => {
      const productInCart = state.some((item) => item.productId === productId)

      if (productInCart) {
        return state.map((item) => {
          if (item.productId === productId) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      } else {
        return [...state, { productId, quantity: 1 }]
      }
    })
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  return useContext(CartContext)
}

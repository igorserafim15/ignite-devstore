'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

interface CartItem {
  productId: string
  quantity: number
}

interface CartContextProps {
  items: CartItem[]
  addToCart: (productId: string) => void
}

type CartProviderProps = { children: ReactNode }

const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([])

  function addToCart(productId: string) {}

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

'use client'
import { useCartContext } from '@/context/cart-context'

export interface AddToCartButtonProps {
  productId: number
}

export function AddToCartButtonWidget({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCartContext()

  function handleAddToCart() {
    addToCart(productId)
  }

  return (
    <button
      type="button"
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
      onClick={handleAddToCart}
    >
      Adicionar ao carrinho
    </button>
  )
}

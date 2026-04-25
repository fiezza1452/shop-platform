import type { Product } from '~/data/products'

interface CartItem extends Product {
  quantity: number
}

export function useCart() {
  const cartItems = useState<CartItem[]>('cart', () => [])
  const totalItems = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.quantity, 0)
  )

  const totalPrice = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  )

  function addToCart(product: Product) {
    const existing = cartItems.value.find((i) => i.id === product.id)
    if (existing) {
      existing.quantity++
    } else {
      cartItems.value.push({ ...product, quantity: 1 })
    }
  }

  function removeFromCart(productId: number) {
    cartItems.value = cartItems.value.filter((i) => i.id !== productId)
  }

  function updateQuantity(productId: number, quantity: number) {
    const item = cartItems.value.find((i) => i.id === productId)
    if (item) {
      if (quantity <= 0) {
        removeFromCart(productId)
      } else {
        item.quantity = quantity
      }
    }
  }

  function clearCart() {
    cartItems.value = []
  }

  return { cartItems, totalItems, totalPrice, addToCart, removeFromCart, updateQuantity, clearCart }
}

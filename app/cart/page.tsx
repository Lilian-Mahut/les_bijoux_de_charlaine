'use client'

import { useCart } from '@/context/CartContext'

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart()

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Panier</h1>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item, i) => (
              <li key={i} className="border p-4 rounded">
                <p className="font-semibold">{item.title}</p>
                <pre className="text-sm text-gray-500">{JSON.stringify(item.config, null, 2)}</pre>
                <button onClick={() => removeFromCart(i)} className="text-red-600 mt-2">Supprimer</button>
              </li>
            ))}
          </ul>
          <button onClick={clearCart} className="mt-6 bg-black text-white px-4 py-2 rounded">
            Vider le panier
          </button>
        </>
      )}
    </div>
  )
}

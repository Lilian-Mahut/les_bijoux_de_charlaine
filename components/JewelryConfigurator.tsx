'use client'

import { useState } from 'react'
import { useCart } from '@/context/CartContext'

const stones = ['Diamant', 'Émeraude', 'Saphir']
const metals = ['Or', 'Argent', 'Platine']

export default function JewelryConfigurator({ productId }) {
    const { addToCart } = useCart()
  const [stone, setStone] = useState(stones[0])
  const [metal, setMetal] = useState(metals[0])

  const config = {
    productId,
    stone,
    metal,
    // Ajoute d'autres composants plus tard
  }

  const handleAddToCart = () => {
    addToCart({
      id: productId,
      title: `Bijou personnalisé`,
      config,
      quantity: 1
    })
    alert('Produit ajouté au panier !')
  }

  return (
    <div className="border rounded-xl p-4 shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">Personnalise ton bijou</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Pierre</label>
        <select
          className="border rounded w-full p-2"
          value={stone}
          onChange={e => setStone(e.target.value)}
        >
          {stones.map(s => <option key={s}>{s}</option>)}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Métal</label>
        <select
          className="border rounded w-full p-2"
          value={metal}
          onChange={e => setMetal(e.target.value)}
        >
          {metals.map(m => <option key={m}>{m}</option>)}
        </select>
      </div>

      <button
        onClick={handleAddToCart}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        Ajouter au panier
      </button>
    </div>
  )
}

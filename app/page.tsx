'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-6">Bienvenue dans ma boutique</h1>
      <Link href="/product/1" className="text-blue-600 underline">
        Voir un produit exemple
      </Link>
    </main>
  )
}
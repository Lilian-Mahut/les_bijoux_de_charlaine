import '@/styles/globals.css'
import { ReactNode } from 'react'
import { CartProvider } from '@/context/CartContext'

export const metadata = {
  title: 'Ma boutique',
  description: 'Création de bijoux personnalisés',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}

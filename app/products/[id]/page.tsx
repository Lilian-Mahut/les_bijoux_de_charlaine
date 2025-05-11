'use client'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import JewelryConfigurator from '@/components/JewelryConfigurator'

export default function ProductPage() {
  const router = useRouter()
  const { slug } = router.query
  const [product, setProduct] = useState(null)

  useEffect(() => {
    if (!slug) return
    axios.get(`http://localhost:1337/api/products?filters[slug][$eq]=${slug}&populate=*`)
      .then(res => {
        const data = res.data.data[0]
        setProduct(data)
      })
      .catch(console.error)
  }, [slug])

  if (!product) return <p>Chargement...</p>

  const { title, description, image } = product.attributes

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <img
        src={`http://localhost:1337${image.data.attributes.url}`}
        alt={title}
        className="w-full max-w-md my-4 rounded"
      />
      <p className="mb-4">{description}</p>

      <JewelryConfigurator productId={product.id} />
    </div>
  )
}

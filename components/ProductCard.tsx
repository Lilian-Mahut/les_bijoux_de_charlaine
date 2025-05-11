export default function ProductCard({ product }) {
  return (
    <div className="border rounded-xl shadow p-4 hover:scale-105 transition">
      <img src={`http://localhost:1337${product.image.data.attributes.url}`} alt={product.title} className="w-full h-40 object-cover rounded" />
      <h2 className="text-xl mt-2">{product.title}</h2>
      <p className="text-sm text-gray-500">{product.price} €</p>
    </div>
  )
}
import { getProduct } from "@/lib/products";


export default function ProductDetails({ params }) {
  const product = getProduct(params.id);
  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl">{product.name}</h1>
      <p>{product.description}</p>
      <p className="font-bold">${product.price}</p>
    </div>
  );
}

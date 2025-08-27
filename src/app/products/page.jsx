"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products").then(res => res.json()).then(setProducts);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Products</h1>
      <ul className="space-y-4">
        {products.map((p) => (
          <li key={p.id} className="border p-4 rounded">
            <h2 className="text-xl">{p.name}</h2>
            <p>{p.description}</p>
            <p className="font-bold">${p.price}</p>
            <Link href={`/products/${p.id}`} className="text-blue-600 underline">
              Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

"use client";
// src/app/dashboard/add-product/page.jsx
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";


export default function AddProductPage() {
  const { data: session, status } = useSession();
  const [form, setForm] = useState({ name: "", description: "", price: "" });

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return signIn();

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Product added!");
      setForm({ name: "", description: "", price: "" });
    } else {
      alert("Error: " + data.error);
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong");
  }
};


  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 space-y-4">
      <input
        type="text"
        placeholder="Name"
        className="border p-2 w-full"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <textarea
        placeholder="Description"
        className="border p-2 w-full"
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        className="border p-2 w-full"
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />
      <button className="bg-green-600 text-white px-4 py-2 rounded">
        Add Product
      </button>
    </form>
  );
}

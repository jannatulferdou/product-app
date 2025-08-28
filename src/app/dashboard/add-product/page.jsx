"use client";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import Swal from 'sweetalert2';

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    specs: {
      ram: "",
      storage: "",
      processor: "",
      graphics: "",
      display: "",
      features: "",
      battery: "",
      connectivity: "",
    },
  });

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
        Swal.fire({
          title: 'Success!',
          text: 'Product added successfully!',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#2563eb',
        });
        setForm({
          name: "",
          description: "",
          price: "",
          image: "",
          specs: {
            ram: "",
            storage: "",
            processor: "",
            graphics: "",
            display: "",
            features: "",
            battery: "",
            connectivity: "",
          },
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: data.error || 'Something went wrong',
          icon: 'error',
          confirmButtonText: 'Try Again',
          confirmButtonColor: '#dc2626',
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#dc2626',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">Add New Product</h2>
            <p className="mt-1 text-sm text-gray-600">Fill in the details below to add a new product to your catalog</p>
          </div>
          
          <form onSubmit={handleSubmit} className="px-6 py-6 space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Basic Information</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="e.g., Gaming Laptop Pro"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                
                <div className="sm:col-span-2">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows={3}
                    placeholder="Describe the product features and benefits..."
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                    Price ($)
                  </label>
                  <input
                    type="number"
                    id="price"
                    placeholder="0.00"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                    Image URL
                  </label>
                  <input
                    type="text"
                    id="image"
                    placeholder="https://example.com/image.jpg"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                    value={form.image}
                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Product Specifications</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {Object.keys(form.specs).map((key) => (
                  <div key={key}>
                    <label htmlFor={key} className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                      {key}
                    </label>
                    <input
                      id={key}
                      type="text"
                      placeholder={`Enter ${key} details`}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                      value={form.specs[key]}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          specs: { ...form.specs, [key]: e.target.value },
                        })
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-6 flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
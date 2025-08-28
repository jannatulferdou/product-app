"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [visibleCount, setVisibleCount] = useState(8); // শুরুতে ৮টা কার্ড দেখাবে

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const toggleDescription = (productId) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const truncateDescription = (text, wordLimit = 20) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  const formatKey = (key) => {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/_/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Premium Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our curated collection of high-quality tech products
            designed to enhance your digital lifestyle.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.slice(0, visibleCount).map((product) => {
            const isExpanded = expandedDescriptions[product.id];
            const wordCount = product.description.split(" ").length;
            const shouldTruncate = wordCount > 20;
            const displayText = isExpanded
              ? product.description
              : truncateDescription(product.description, 20);

            return (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group flex flex-col"
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 p-4"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h2>

                  {/* Description with Read More */}
                  <div className="mb-4 flex-1">
                    <p className="text-gray-600 text-sm">{displayText}</p>
                    {shouldTruncate && (
                      <button
                        onClick={() => toggleDescription(product.id)}
                        className="text-primary hover:text-primary/80 text-sm font-medium mt-2 transition-colors"
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                    )}
                  </div>

                  {/* Dynamic Specs  */}
                  {product.specs && (
                    <div className="mb-4 space-y-1">
                      {Object.entries(product.specs)
                        .slice(0, 2)
                        .map(([key, value]) => (
                          <div
                            key={key}
                            className="flex items-center justify-between text-sm text-gray-500"
                          >
                            <span>{formatKey(key)}</span>
                            <span className="font-medium">{value}</span>
                          </div>
                        ))}
                    </div>
                  )}

                  {/* Price & Details Button */}
                  <div className="flex items-center justify-between mt-auto pt-4">
                    <span className="text-2xl font-bold text-primary">
                      ${product.price}
                    </span>
                    <Link
                      href={`/products/${product.id}`}
                      className="text-sm bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors shadow-md"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More Button */}
        {visibleCount < products.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount(products.length)} 
              className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-md"
            >
              View More
            </button>
          </div>
        )}

        {/* Empty State */}
        {products.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">😢</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              No Products Found
            </h2>
            <p className="text-gray-600">
              We couldn't find any products at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const toggleDescription = (productId) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const truncateDescription = (text, wordLimit = 20) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
  };

  const handleImageError = (productId) => {
    setImageErrors(prev => ({
      ...prev,
      [productId]: true
    }));
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our curated collection of high-quality tech products designed to enhance your digital lifestyle.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => {
            const isExpanded = expandedDescriptions[product.id];
            const wordCount = product.description.split(' ').length;
            const shouldTruncate = wordCount > 20;
            const displayText = isExpanded 
              ? product.description 
              : truncateDescription(product.description, 20);
            const hasImageError = imageErrors[product.id];

            return (
              <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group flex flex-col">
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  {hasImageError ? (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                      <div className="text-center text-gray-500">
                        <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm">Image not available</p>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 p-4"
                      onError={() => handleImageError(product.id)}
                      loading="lazy"
                    />
                  )}
                  
                  
                </div>

                {/* Product Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h2>
                  
                  {/* Description with Read More */}
                  <div className="mb-4 flex-1">
                    <p className="text-gray-600 text-sm">
                      {displayText}
                    </p>
                    {shouldTruncate && (
                      <button
                        onClick={() => toggleDescription(product.id)}
                        className="text-primary hover:text-primary/80 text-sm font-medium mt-2 transition-colors"
                      >
                        {isExpanded ? 'Read Less' : 'Read More'}
                      </button>
                    )}
                  </div>

                  {/* Specs Preview */}
                  {product.specs && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-1">
                        <span>RAM</span>
                        <span className="font-medium">{product.specs.ram || "N/A"}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>Storage</span>
                        <span className="font-medium">{product.specs.storage || "N/A"}</span>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-auto pt-4">
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
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

        {/* Empty State */}
        {products.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">😢</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">No Products Found</h2>
            <p className="text-gray-600">We couldn't find any products at the moment.</p>
          </div>
        )}
      </div>

      <style jsx>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
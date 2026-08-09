import React from "react";
import { useStore } from "../context/Context";

export default function ProductCard({ product }) {
  const { addToCart } = useStore();

  // Calculate original price from discount
  const originalPrice = product.discountPercentage
    ? product.price / (1 - product.discountPercentage / 100)
    : product.price;

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-100">

        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Discount Badge */}
        {product.discountPercentage && (
          <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white shadow-md">
            -{Math.round(product.discountPercentage)}%
          </span>
        )}

        {/* Category Badge */}
        {product.category && (
          <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold capitalize text-gray-700 shadow-sm backdrop-blur">
            {product.category}
          </span>
        )}

        {/* Image Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition group-hover:opacity-100" />
      </div>

      {/* Product Content */}
      <div className="p-5">

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-sm text-orange-500">
            <span>★</span>
            <span className="font-semibold">
              {product.rating ? product.rating.toFixed(1) : "4.5"}
            </span>
          </div>

          <span className="text-xs text-gray-400">
            Excellent
          </span>
        </div>

        {/* Product Title */}
        <h2 className="mt-2 line-clamp-1 text-lg font-bold capitalize text-gray-900">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 line-clamp-2 min-h-[40px] text-sm leading-5 text-gray-500">
          {product.description}
        </p>

        {/* Price + Cart */}
        <div className="mt-5 flex items-center justify-between gap-3">

          {/* Price */}
          <div>
            <div className="flex items-center gap-2">

              <span className="text-xl font-bold text-orange-500">
                ${product.price}
              </span>

              {product.discountPercentage && (
                <span className="text-sm text-gray-400 line-through">
                  ${originalPrice.toFixed(0)}
                </span>
              )}

            </div>

            <p className="mt-1 text-xs text-gray-400">
              Free shipping
            </p>
          </div>

          {/* Add To Cart */}
          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-orange-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.43m0 0L6.75 14.25a2.25 2.25 0 0 0 2.182 1.75h7.886a2.25 2.25 0 0 0 2.182-1.75l1.32-5.25H5.106Zm3.75 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm9 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
              />
            </svg>

            Add
          </button>
        </div>
      </div>
    </div>
  );
}


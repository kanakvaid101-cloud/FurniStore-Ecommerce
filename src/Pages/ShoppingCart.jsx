
import React from "react";
import {
  FiMinus,
  FiPlus,
  FiTrash2,
  FiShoppingBag,
  FiArrowRight,
  FiTruck,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import { useStore } from "../context/Context";

export default function ShoppingCart() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    subtotal,
    shipping,
    total,
  } = useStore();

  return (
    <div className="min-h-screen bg-[#F8F6F2] py-12">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mb-10">

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link
              to="/"
              className="transition hover:text-orange-500"
            >
              Home
            </Link>

            <span>/</span>

            <span className="text-gray-900">
              Shopping Cart
            </span>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white">
              <FiShoppingBag className="text-xl" />
            </div>

            <div>
              <h1 className="text-3xl font-extrabold text-gray-900">
                Shopping Cart
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Review your selected furniture before checkout.
              </p>
            </div>
          </div>

        </div>

        {/* ================= EMPTY CART ================= */}
        {cart.length === 0 ? (
          <div className="rounded-3xl border border-gray-200 bg-white px-6 py-16 text-center shadow-sm">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-orange-500">
              <FiShoppingBag className="text-3xl" />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-gray-900">
              Your Cart Is Empty
            </h2>

            <p className="mx-auto mt-2 max-w-md text-gray-500">
              You haven't added any furniture to your cart yet.
              Explore our collection and find something perfect for
              your home.
            </p>

            <Link
              to="/Store"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 font-semibold text-white transition hover:bg-orange-600"
            >
              Continue Shopping
              <FiArrowRight />
            </Link>

          </div>
        ) : (

          /* ================= CART CONTENT ================= */
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

            {/* ================= LEFT SIDE ================= */}
            <div className="space-y-5 lg:col-span-2">

              {/* Cart Count */}
              <div className="flex items-center justify-between">

                <h2 className="text-lg font-bold text-gray-900">
                  Your Items
                </h2>

                <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-600">
                  {cart.length}{" "}
                  {cart.length === 1 ? "Item" : "Items"}
                </span>

              </div>

              {/* Products */}
              {cart.map((item) => (

                <div
                  key={item.id}
                  className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5"
                >

                  <div className="flex flex-col gap-5 sm:flex-row">

                    {/* Image */}
                    <div className="relative h-40 w-full overflow-hidden rounded-xl bg-gray-100 sm:h-32 sm:w-32 sm:flex-shrink-0">

                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />

                    </div>

                    {/* Product Details */}
                    <div className="flex flex-1 flex-col justify-between">

                      <div>

                        <div className="flex items-start justify-between gap-4">

                          <div>
                            <h3 className="text-lg font-bold text-gray-900">
                              {item.title}
                            </h3>

                            <p className="mt-1 line-clamp-2 text-sm leading-5 text-gray-500">
                              {item.description}
                            </p>
                          </div>

                          {/* Delete */}
                          <button
                            onClick={() =>
                              removeFromCart(item.id)
                            }
                            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                            aria-label="Remove product"
                          >
                            <FiTrash2 className="text-lg" />
                          </button>

                        </div>

                      </div>

                      {/* Bottom */}
                      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">

                        {/* Quantity */}
                        <div className="flex items-center rounded-lg border border-gray-200 bg-gray-50">

                          <button
                            onClick={() =>
                              decreaseQty(item.id)
                            }
                            className="flex h-9 w-9 items-center justify-center text-gray-600 transition hover:bg-orange-50 hover:text-orange-500"
                          >
                            <FiMinus />
                          </button>

                          <span className="w-10 text-center text-sm font-bold text-gray-900">
                            {item.qty}
                          </span>

                          <button
                            onClick={() =>
                              increaseQty(item.id)
                            }
                            className="flex h-9 w-9 items-center justify-center text-gray-600 transition hover:bg-orange-50 hover:text-orange-500"
                          >
                            <FiPlus />
                          </button>

                        </div>

                        {/* Price */}
                        <div className="text-right">

                          <p className="text-xs text-gray-400">
                            Price
                          </p>

                          <p className="text-xl font-bold text-orange-500">
                            $
                            {(item.price * item.qty).toFixed(2)}
                          </p>

                        </div>

                      </div>

                    </div>
                  </div>

                </div>

              ))}

              {/* Continue Shopping */}
              <Link
                to="/Store"
                className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-gray-700 transition hover:text-orange-500"
              >
                ← Continue Shopping
              </Link>

            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="lg:col-span-1">

              <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

                <h2 className="text-xl font-bold text-gray-900">
                  Order Summary
                </h2>

                <div className="mt-6 space-y-4">

                  {/* Subtotal */}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                      Subtotal
                    </span>

                    <span className="font-semibold text-gray-900">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>

                  {/* Shipping */}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                      Shipping
                    </span>

                    <span className="font-semibold text-gray-900">
                      {shipping === 0
                        ? "Free"
                        : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>

                  {/* Free Shipping */}
                  {shipping > 0 && (
                    <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 text-xs text-orange-600">
                      <FiTruck />

                      <span>
                        Add more items to unlock free shipping.
                      </span>
                    </div>
                  )}

                  <div className="border-t border-gray-200 pt-4">

                    <div className="flex items-center justify-between">

                      <span className="text-lg font-bold text-gray-900">
                        Total
                      </span>

                      <span className="text-2xl font-extrabold text-orange-500">
                        ${total.toFixed(2)}
                      </span>

                    </div>

                    <p className="mt-1 text-right text-xs text-gray-400">
                      Taxes included where applicable
                    </p>

                  </div>

                </div>

                {/* Coupon */}
                <div className="mt-7">

                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Have a coupon?
                  </label>

                  <div className="flex overflow-hidden rounded-xl border border-gray-200">

                    <input
                      type="text"
                      placeholder="Coupon code"
                      className="min-w-0 flex-1 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:bg-white"
                    />

                    <button
                      type="button"
                      className="bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-500"
                    >
                      Apply
                    </button>

                  </div>

                </div>

                {/* Checkout */}
                <button
                  disabled={cart.length === 0}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-4 font-bold text-white shadow-lg shadow-orange-100 transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:shadow-none"
                >
                  Proceed to Checkout
                  <FiArrowRight />
                </button>

                {/* Secure Checkout */}
                <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-400">
                  🔒 Secure & Safe Checkout
                </div>

              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}


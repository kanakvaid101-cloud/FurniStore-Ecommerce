import React from "react";
import { Link } from "react-router-dom";

export default function Hero({
  title = "Premium Furniture for Modern Living",
  subtitle = "Discover beautifully crafted furniture designed to make your home more comfortable, stylish, and timeless.",
  children,
  className = "",
}) {
  return (
    <section
      className={`overflow-hidden bg-[#F8F6F2] ${className}`}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">

        {/* Left Content */}
        <div className="max-w-xl">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            <span>✨</span>
            <span>New Collection 2026</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="mt-6 max-w-lg text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              {subtitle}
            </p>
          )}

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {children ? (
              children
            ) : (
              <>
                <Link
                  to="/Store"
                  className="rounded-xl bg-orange-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-200 transition duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl"
                >
                  Shop Now
                </Link>

                <Link
                  to="/categories"
                  className="rounded-xl border border-gray-300 bg-white px-7 py-3.5 font-semibold text-gray-800 transition duration-300 hover:-translate-y-0.5 hover:border-orange-500 hover:text-orange-500"
                >
                  Explore Collection
                </Link>
              </>
            )}
          </div>

          {/* Features / Stats */}
          <div className="mt-10 grid grid-cols-2 gap-5 border-t border-gray-200 pt-8 sm:grid-cols-3">

            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                10+
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                5K+
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Happy Customers
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                100%
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Quality Products
              </p>
            </div>

          </div>
        </div>

        {/* Right Image */}
        <div className="relative">

          {/* Decorative Background */}
          <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-orange-200/60 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80"
              alt="Modern furniture sofa"
              className="h-[400px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[500px]"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Floating Product Card */}
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-white/90 p-4 shadow-xl backdrop-blur-md sm:left-auto sm:right-5 sm:w-72">

              <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                Featured Collection
              </p>

              <div className="mt-2 flex items-center justify-between gap-4">

                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Modern Sofa
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    Premium comfort & design
                  </p>
                </div>

                <span className="whitespace-nowrap text-lg font-bold text-orange-500">
                  $399
                </span>

              </div>
            </div>
          </div>

          {/* Small Floating Badge */}
          <div className="absolute -bottom-5 -left-3 hidden rounded-2xl bg-white px-5 py-3 shadow-xl sm:block">
            <p className="text-xs text-gray-500">
              Trusted by
            </p>

            <p className="text-sm font-bold text-gray-900">
              5,000+ Customers
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}


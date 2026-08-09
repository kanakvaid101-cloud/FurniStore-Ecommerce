
import React from "react";
import { Link } from "react-router-dom";
import Herosection from "../Components/Herosection";
import ProductCard from "../Components/ProductCard";

export default function Home() {
  return (
    <div className="bg-[#F8F6F2]">

      {/* Hero Section */}
      <Herosection
        title="Premium Furniture for Modern Living"
        subtitle="We have been designing premium furniture for modern living since 2010."
      >
        <Link
          to="/Store"
          className="rounded-xl bg-orange-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-200 transition duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl"
        >
          Shop Furniture
        </Link>

        <Link
          to="/categories"
          className="rounded-xl border border-gray-300 bg-white px-7 py-3.5 font-semibold text-gray-800 transition duration-300 hover:border-orange-500 hover:text-orange-500"
        >
          Explore Categories
        </Link>
      </Herosection>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
              Why FurniStore
            </span>

            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              Furniture Made for Your Home
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              From elegant sofas to stylish bedroom furniture, we bring
              comfort, quality, and modern design together.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {/* Feature 1 */}
            <div className="rounded-2xl border border-gray-100 bg-[#F8F6F2] p-7 text-center transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🛋️
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                Modern Designs
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Beautiful furniture designed to match modern lifestyles
                and elegant interiors.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-2xl border border-gray-100 bg-[#F8F6F2] p-7 text-center transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-2xl">
                ⭐
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                Premium Quality
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Carefully selected materials and craftsmanship you can
                trust for years.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-2xl border border-gray-100 bg-[#F8F6F2] p-7 text-center transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🚚
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                Fast Delivery
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Get your favorite furniture delivered safely and
                conveniently to your doorstep.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-[#F8F6F2] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
                Our Collection
              </span>

              <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                Featured Furniture
              </h2>

              <p className="mt-3 max-w-xl text-gray-500">
                Explore some of our most popular furniture pieces,
                selected especially for modern homes.
              </p>
            </div>

            <Link
              to="/Store"
              className="font-semibold text-orange-500 transition hover:text-orange-600"
            >
              View All Products →
            </Link>

          </div>

          {/* Product Cards */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* Example products */}
            <ProductCard
              product={{
                id: 1,
                title: "Modern Lounge Sofa",
                description:
                  "Comfortable and stylish sofa designed for modern living rooms.",
                price: 399,
                rating: 4.8,
                discountPercentage: 15,
                category: "Furniture",
                thumbnail:
                  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
              }}
            />

            <ProductCard
              product={{
                id: 2,
                title: "Elegant Wooden Chair",
                description:
                  "Premium wooden chair with a timeless and comfortable design.",
                price: 149,
                rating: 4.7,
                discountPercentage: 10,
                category: "Chairs",
                thumbnail:
                  "https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80",
              }}
            />

            <ProductCard
              product={{
                id: 3,
                title: "Minimal Coffee Table",
                description:
                  "A clean and modern coffee table perfect for contemporary homes.",
                price: 199,
                rating: 4.9,
                discountPercentage: 12,
                category: "Tables",
                thumbnail:
                  "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&q=80",
              }}
            />

            <ProductCard
              product={{
                id: 4,
                title: "Modern Armchair",
                description:
                  "Soft, elegant and comfortable armchair for your living space.",
                price: 249,
                rating: 4.8,
                discountPercentage: 18,
                category: "Chairs",
                thumbnail:
                  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
              }}
            />

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">

          <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            Create Your Space
          </span>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Make Your Home Beautiful
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Find furniture that combines comfort, quality and style.
            Start creating the home you have always imagined.
          </p>

          <Link
            to="/Store"
            className="mt-8 inline-block rounded-xl bg-orange-500 px-8 py-3.5 font-semibold text-white transition hover:bg-orange-600"
          >
            Start Shopping
          </Link>

        </div>
      </section>

    </div>
  );
}


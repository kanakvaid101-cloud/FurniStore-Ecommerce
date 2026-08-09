import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import Herosection from "../Components/Herosection";
import ProductCard from "../Components/ProductCard";
import ProductCardSkeleton from "../Components/ProductCardSkeleton";

export default function Store() {
  const { slug } = useParams();

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryLoading, setCategoryLoading] = useState(true);

  // ================= FETCH PRODUCTS =================
  const fetchProducts = async () => {
    try {
      setLoading(true);

      let API = "https://dummyjson.com/products";

      if (slug) {
        API = `https://dummyjson.com/products/category/${slug}`;
      }

      const response = await axios.get(API);

      setProducts(response.data.products || []);
    } catch (error) {
      console.error("Products Error:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  // ================= FETCH CATEGORIES =================
  const fetchCategories = async () => {
    try {
      setCategoryLoading(true);

      const response = await axios.get(
        "https://dummyjson.com/products/categories"
      );

      setCategories(response.data || []);
    } catch (error) {
      console.error("Categories Error:", error);
      setCategories([]);
    } finally {
      setCategoryLoading(false);
    }
  };

  // Categories only once
  useEffect(() => {
    fetchCategories();
  }, []);

  // Products whenever category changes
  useEffect(() => {
    fetchProducts();
  }, [slug]);

  return (
    <div className="min-h-screen bg-[#F8F6F2]">

      {/* ================= HERO ================= */}
      <Herosection
        title={
          slug
            ? `${slug.replaceAll("-", " ")} Collection`
            : "Premium Furniture Collection"
        }
        subtitle={
          slug
            ? "Explore our carefully selected furniture pieces from this collection."
            : "Discover premium furniture designed to bring comfort, elegance, and modern style to your home."
        }
      >
        <Link
          to="/Store"
          className="rounded-xl bg-orange-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-600"
        >
          View All Furniture
        </Link>

        <Link
          to="/categories"
          className="rounded-xl border border-gray-300 bg-white px-7 py-3.5 font-semibold text-gray-800 transition hover:border-orange-500 hover:text-orange-500"
        >
          Explore Categories
        </Link>
      </Herosection>

      {/* ================= STORE ================= */}
      <section className="py-12 sm:py-16">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Store Heading */}
          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
                Our Collection
              </span>

              <h2 className="mt-2 text-3xl font-extrabold capitalize text-gray-900 sm:text-4xl">
                {slug
                  ? slug.replaceAll("-", " ")
                  : "All Furniture"}
              </h2>

              <p className="mt-2 text-gray-500">
                {loading
                  ? "Finding the perfect furniture for you..."
                  : `${products.length} products available`}
              </p>
            </div>

            {/* Collection Badge */}
            <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-sm">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 text-orange-500">
                🛋️
              </span>

              <div>
                <p className="text-xs text-gray-400">
                  FurniStore
                </p>

                <p className="text-sm font-bold text-gray-900">
                  Modern Living
                </p>
              </div>
            </div>

          </div>

          {/* ================= CONTENT ================= */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">

            {/* ================= SIDEBAR ================= */}
            <aside className="lg:col-span-1">

              <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

                <div className="flex items-center justify-between">

                  <h3 className="text-lg font-bold text-gray-900">
                    Categories
                  </h3>

                  <span className="rounded-full bg-orange-100 px-2.5 py-1 text-xs font-semibold text-orange-600">
                    {categories.length}
                  </span>

                </div>

                <p className="mt-2 text-sm text-gray-500">
                  Find furniture that fits your space.
                </p>

                {/* Category List */}
                <div className="mt-5 space-y-2">

                  {/* All Products */}
                  <Link
                    to="/Store"
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      !slug
                        ? "bg-orange-500 text-white shadow-md shadow-orange-100"
                        : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                    }`}
                  >
                    <span>All Furniture</span>

                    {!slug && <span>✓</span>}
                  </Link>

                  {/* Categories */}
                  {categoryLoading ? (
                    Array.from({ length: 7 }).map((_, index) => (
                      <div
                        key={index}
                        className="h-11 animate-pulse rounded-xl bg-gray-100"
                      />
                    ))
                  ) : (
                    categories.map((cat) => (
                      <Link
                        key={cat.slug}
                        to={`/Store/${cat.slug}`}
                        className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium capitalize transition ${
                          slug === cat.slug
                            ? "bg-orange-500 font-semibold text-white shadow-md shadow-orange-100"
                            : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                        }`}
                      >
                        <span>{cat.name}</span>

                        {slug === cat.slug && (
                          <span>✓</span>
                        )}
                      </Link>
                    ))
                  )}

                </div>

                {/* Sidebar CTA */}
                <div className="mt-7 rounded-2xl bg-gray-900 p-5">

                  <div className="text-2xl">
                    🏠
                  </div>

                  <h4 className="mt-3 font-bold text-white">
                    Make Your Home Beautiful
                  </h4>

                  <p className="mt-2 text-xs leading-5 text-gray-400">
                    Discover furniture made for comfort,
                    style and modern living.
                  </p>

                  <Link
                    to="/about"
                    className="mt-4 inline-block text-sm font-semibold text-orange-500 hover:text-orange-400"
                  >
                    Learn More →
                  </Link>

                </div>

              </div>
            </aside>

            {/* ================= PRODUCTS ================= */}
            <div className="lg:col-span-3">

              {/* Top Bar */}
              <div className="mb-5 flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3">

                <p className="text-sm text-gray-500">
                  Showing{" "}
                  <span className="font-bold text-gray-900">
                    {products.length}
                  </span>{" "}
                  furniture products
                </p>

                <div className="hidden items-center gap-2 text-sm text-gray-500 sm:flex">
                  <span>Sort:</span>

                  <span className="font-semibold text-gray-900">
                    Featured
                  </span>
                </div>

              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">

                {loading ? (
                  Array.from({ length: 6 }).map((_, index) => (
                    <ProductCardSkeleton key={index} />
                  ))
                ) : products.length > 0 ? (
                  products.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                    />
                  ))
                ) : (
                  <div className="col-span-full rounded-2xl border border-gray-200 bg-white px-6 py-16 text-center">

                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-3xl">
                      🛋️
                    </div>

                    <h2 className="mt-5 text-2xl font-bold text-gray-900">
                      No Furniture Found
                    </h2>

                    <p className="mx-auto mt-2 max-w-md text-gray-500">
                      We couldn't find products in this collection.
                      Try exploring another category.
                    </p>

                    <Link
                      to="/Store"
                      className="mt-6 inline-flex rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
                    >
                      View All Furniture
                    </Link>

                  </div>
                )}

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="bg-gray-900 py-16">

        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">

          <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            FurniStore Collection
          </span>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Find Furniture You’ll Love
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Bring comfort and character to your home with our
            collection of carefully selected modern furniture.
          </p>

          <Link
            to="/Store"
            className="mt-8 inline-flex items-center rounded-xl bg-orange-500 px-8 py-3.5 font-semibold text-white transition hover:bg-orange-600"
          >
            Explore All Products →
          </Link>

        </div>

      </section>

    </div>
  );
}


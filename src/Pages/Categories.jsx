
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // ================= FETCH CATEGORIES =================
  const fetchCategories = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "https://dummyjson.com/products/categories"
      );

      setCategories(response.data || []);
    } catch (error) {
      console.error("Category Error:", error);
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F6F2]">

      {/* ================= HERO ================= */}
      <section className="bg-gray-900 py-16 sm:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm text-gray-400">
            <Link
              to="/"
              className="transition hover:text-orange-500"
            >
              Home
            </Link>

            <span>/</span>

            <span className="text-white">
              Categories
            </span>
          </div>

          <div className="max-w-3xl">

            <span className="inline-flex rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
              ✨ Explore Our Collection
            </span>

            <h1 className="mt-5 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
              Shop by
              <span className="text-orange-500">
                {" "}Category
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
              Explore our carefully selected furniture and
              lifestyle collections. Find the perfect pieces for
              every room in your home.
            </p>

          </div>

        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="py-14 sm:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-orange-500">
                Browse Collection
              </span>

              <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Find Your Perfect Style
              </h2>

              <p className="mt-2 text-gray-500">
                Choose a category and discover products you'll love.
              </p>
            </div>

            <div className="rounded-xl bg-white px-5 py-3 shadow-sm">
              <span className="text-sm text-gray-500">
                Categories
              </span>

              <span className="ml-2 font-bold text-orange-500">
                {loading ? "..." : categories.length}
              </span>
            </div>

          </div>

          {/* Loading */}
          {loading ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="h-48 animate-pulse rounded-2xl bg-white shadow-sm"
                />
              ))}

            </div>
          ) : categories.length > 0 ? (

            /* Category Grid */
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {categories.map((category, index) => (

                <Link
                  key={category.slug || index}
                  to={`/Store/${category.slug}`}
                  className="group"
                >

                  <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl">

                    {/* Icon */}
                    <div className="flex items-center justify-between">

                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-2xl transition group-hover:bg-orange-500 group-hover:scale-105">
                        🛋️
                      </div>

                      <span className="text-2xl text-gray-300 transition group-hover:translate-x-1 group-hover:text-orange-500">
                        →
                      </span>

                    </div>

                    {/* Category Name */}
                    <h3 className="mt-6 text-xl font-bold capitalize text-gray-900 transition group-hover:text-orange-500">
                      {category.name}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      Explore our collection of{" "}
                      {category.name.toLowerCase()} products.
                    </p>

                    {/* Bottom Line */}
                    <div className="mt-6 h-1 w-10 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-full" />

                  </div>

                </Link>

              ))}

            </div>

          ) : (

            /* Empty State */
            <div className="rounded-3xl border border-gray-200 bg-white px-6 py-16 text-center">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-3xl">
                🛋️
              </div>

              <h2 className="mt-5 text-2xl font-bold text-gray-900">
                No Categories Found
              </h2>

              <p className="mt-2 text-gray-500">
                We couldn't load our product categories.
              </p>

              <button
                onClick={fetchCategories}
                className="mt-6 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Try Again
              </button>

            </div>
          )}

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-orange-500 py-14 sm:py-16">

        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">

          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Can't Decide What You Need?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-orange-100">
            Explore all our furniture products and find something
            that fits your home perfectly.
          </p>

          <Link
            to="/Store"
            className="mt-7 inline-flex items-center rounded-xl bg-white px-7 py-3.5 font-bold text-orange-500 transition hover:bg-gray-100"
          >
            View All Products →
          </Link>

        </div>

      </section>

    </div>
  );
}


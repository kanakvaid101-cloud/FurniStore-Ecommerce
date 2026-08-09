import React from "react";
import { Link } from "react-router-dom";
import {
  FiAward,
  FiHeart,
  FiHome,
  FiShield,
  FiTruck,
  FiUsers,
} from "react-icons/fi";

export default function About() {
  return (
    <div className="min-h-screen bg-[#F8F6F2]">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gray-900 py-20 sm:py-28">

        {/* Background Decoration */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl">

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
                About Us
              </span>
            </div>

            <span className="inline-flex rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
              ✨ About FurniStore
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Furniture That Makes
              <span className="block text-orange-500">
                Your House Feel Like Home
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              We believe great furniture is more than just beautiful.
              It should make your everyday life more comfortable,
              meaningful, and enjoyable.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/Store"
                className="rounded-xl bg-orange-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-900/30 transition hover:bg-orange-600"
              >
                Explore Collection
              </Link>

              <Link
                to="/contact"
                className="rounded-xl border border-gray-700 px-7 py-3.5 font-semibold text-white transition hover:border-orange-500 hover:text-orange-500"
              >
                Contact Us
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="py-16 sm:py-20">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

          {/* Image */}
          <div className="relative">

            <div className="absolute -left-5 -top-5 h-32 w-32 rounded-3xl bg-orange-200/60" />

            <div className="relative overflow-hidden rounded-3xl">

              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200"
                alt="Modern furniture"
                className="h-[450px] w-full object-cover sm:h-[550px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur">
                <p className="text-3xl font-extrabold text-orange-500">
                  10+
                </p>

                <p className="mt-1 text-sm font-medium text-gray-600">
                  Years of Experience
                </p>
              </div>

            </div>

          </div>

          {/* Content */}
          <div>

            <span className="text-sm font-bold uppercase tracking-widest text-orange-500">
              Our Story
            </span>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
              Creating Beautiful Spaces,
              <span className="block text-orange-500">
                One Home at a Time
              </span>
            </h2>

            <p className="mt-6 leading-7 text-gray-600">
              FurniStore was created with a simple idea: everyone
              deserves furniture that looks beautiful, feels
              comfortable, and lasts for years.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              From modern sofas and elegant tables to practical
              storage solutions, we carefully select products that
              combine timeless design with everyday functionality.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-5">

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <FiHome className="text-2xl text-orange-500" />

                <h3 className="mt-3 text-xl font-bold text-gray-900">
                  5K+
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Homes Furnished
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <FiUsers className="text-2xl text-orange-500" />

                <h3 className="mt-3 text-xl font-bold text-gray-900">
                  10K+
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Happy Customers
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="bg-white py-16 sm:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-orange-500">
              Why Choose Us
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Designed Around You
            </h2>

            <p className="mt-4 leading-7 text-gray-500">
              Everything we do is focused on making your furniture
              shopping experience simple, reliable, and enjoyable.
            </p>

          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {/* Card 1 */}
            <div className="rounded-2xl border border-gray-100 bg-[#F8F6F2] p-7 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                <FiAward className="text-2xl" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Premium Quality
              </h3>

              <p className="mt-3 leading-6 text-gray-500">
                We carefully select products that meet our
                standards for quality, comfort, and durability.
              </p>

            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-gray-100 bg-[#F8F6F2] p-7 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                <FiHeart className="text-2xl" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Customer First
              </h3>

              <p className="mt-3 leading-6 text-gray-500">
                Your satisfaction matters to us. We work hard to
                make every shopping experience better.
              </p>

            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-gray-100 bg-[#F8F6F2] p-7 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                <FiShield className="text-2xl" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Trusted Shopping
              </h3>

              <p className="mt-3 leading-6 text-gray-500">
                Shop with confidence through a secure and
                transparent online shopping experience.
              </p>

            </div>

            {/* Card 4 */}
            <div className="rounded-2xl border border-gray-100 bg-[#F8F6F2] p-7 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                <FiTruck className="text-2xl" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Fast Delivery
              </h3>

              <p className="mt-3 leading-6 text-gray-500">
                We work to get your favorite furniture delivered
                safely and as quickly as possible.
              </p>

            </div>

            {/* Card 5 */}
            <div className="rounded-2xl border border-gray-100 bg-[#F8F6F2] p-7 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                <FiHome className="text-2xl" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Modern Design
              </h3>

              <p className="mt-3 leading-6 text-gray-500">
                Discover modern furniture pieces created to fit
                beautifully into contemporary homes.
              </p>

            </div>

            {/* Card 6 */}
            <div className="rounded-2xl border border-gray-100 bg-[#F8F6F2] p-7 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                <FiUsers className="text-2xl" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Growing Community
              </h3>

              <p className="mt-3 leading-6 text-gray-500">
                Thousands of customers trust FurniStore to help
                create spaces they love.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="py-16 sm:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="overflow-hidden rounded-3xl bg-gray-900">

            <div className="grid lg:grid-cols-2">

              <div className="p-8 sm:p-12 lg:p-16">

                <span className="text-sm font-bold uppercase tracking-widest text-orange-500">
                  Our Mission
                </span>

                <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
                  Better Furniture.
                  <span className="block text-orange-500">
                    Better Living.
                  </span>
                </h2>

                <p className="mt-6 leading-7 text-gray-400">
                  Our mission is to make beautiful, high-quality
                  furniture accessible to everyone. We want to help
                  you create spaces where you can relax, connect,
                  work, and make memories.
                </p>

                <Link
                  to="/Store"
                  className="mt-8 inline-flex rounded-xl bg-orange-500 px-7 py-3.5 font-semibold text-white transition hover:bg-orange-600"
                >
                  Shop Our Collection
                </Link>

              </div>

              <div className="min-h-[350px]">

                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200"
                  alt="Beautiful modern interior"
                  className="h-full w-full object-cover"
                />

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-orange-500 py-16">

        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">

          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Transform Your Home?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-orange-100">
            Explore our furniture collection and discover pieces
            that bring comfort, personality, and style into your
            everyday life.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              to="/Store"
              className="rounded-xl bg-white px-7 py-3.5 font-bold text-orange-500 transition hover:bg-gray-100"
            >
              Start Shopping
            </Link>

            <Link
              to="/contact"
              className="rounded-xl border border-white/50 px-7 py-3.5 font-bold text-white transition hover:bg-white/10"
            >
              Get In Touch
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}


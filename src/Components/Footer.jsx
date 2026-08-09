import React from "react";
import { Link } from "react-router-dom";

const shopLinks = [
  { name: "All Products", href: "/Store" },
  { name: "Categories", href: "/categories" },
  { name: "New Arrivals", href: "/new-arrivals" },
  { name: "Best Deals", href: "/deals" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "FAQ", href: "/faq" },
  { name: "Shipping Information", href: "/shipping" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-xl font-bold">
                F
              </div>

              <span className="text-2xl font-bold">
                Furni<span className="text-orange-500">Store</span>
              </span>

            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-gray-400">
              Discover stylish, comfortable and modern furniture
              designed to make your home beautiful.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 font-bold text-gray-400 transition hover:bg-orange-500 hover:text-white"
              >
                f
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-gray-400 transition hover:bg-orange-500 hover:text-white"
              >
                IG
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 font-bold text-gray-400 transition hover:bg-orange-500 hover:text-white"
              >
                X
              </a>

            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-base font-semibold">
              Shop
            </h3>

            <ul className="mt-5 space-y-3">

              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 transition hover:text-orange-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base font-semibold">
              Company
            </h3>

            <ul className="mt-5 space-y-3">

              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 transition hover:text-orange-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* Newsletter */}
          <div>

            <h3 className="text-base font-semibold">
              Stay Updated
            </h3>

            <p className="mt-5 text-sm leading-6 text-gray-400">
              Subscribe to get the latest furniture deals,
              offers and new arrivals.
            </p>

            <form className="mt-5 flex">

              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 rounded-l-lg border border-gray-800 bg-gray-900 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-orange-500"
              />

              <button
                type="submit"
                className="rounded-r-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Subscribe
              </button>

            </form>

          </div>

        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 gap-6 border-y border-gray-800 py-8 sm:grid-cols-3">

          {/* Quality */}
          <div className="flex items-center gap-4">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-900 text-orange-500">
              ✓
            </div>

            <div>
              <h4 className="text-sm font-semibold">
                Quality Products
              </h4>

              <p className="mt-1 text-xs text-gray-500">
                Premium furniture
              </p>
            </div>

          </div>

          {/* Delivery */}
          <div className="flex items-center gap-4">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-900 text-orange-500">
              🚚
            </div>

            <div>
              <h4 className="text-sm font-semibold">
                Fast Delivery
              </h4>

              <p className="mt-1 text-xs text-gray-500">
                Safe & secure delivery
              </p>
            </div>

          </div>

          {/* Returns */}
          <div className="flex items-center gap-4">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-900 text-orange-500">
              ↩
            </div>

            <div>
              <h4 className="text-sm font-semibold">
                Easy Returns
              </h4>

              <p className="mt-1 text-xs text-gray-500">
                Hassle-free returns
              </p>
            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col justify-between gap-4 pt-7 text-sm text-gray-500 sm:flex-row sm:items-center">

          <p>
            © 2026 FurniStore. All rights reserved.
          </p>

          <div className="flex gap-6">

            <Link
              to="/privacy"
              className="transition hover:text-orange-500"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition hover:text-orange-500"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}


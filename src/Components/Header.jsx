
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../context/Context";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/Store" },
  { name: "Categories", href: "/categories" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const { cart } = useStore();

  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    setLoginSuccess(true);

    setTimeout(() => {
      setLoginSuccess(false);
      setLoginOpen(false);
    }, 1500);
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* ================= LOGO ================= */}
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-xl font-bold text-white shadow-sm">
              F
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-tight text-gray-900">
                Furni<span className="text-orange-500">Store</span>
              </h1>

              <p className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400 sm:block">
                Modern Furniture
              </p>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">

              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="relative text-sm font-medium text-gray-700 transition hover:text-orange-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

            </ul>
          </nav>

          {/* ================= ACTIONS ================= */}
          <div className="flex items-center gap-3">

            {/* Search */}
            <button
              className="hidden h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-orange-50 hover:text-orange-500 sm:flex"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
                />
              </svg>
            </button>

            {/* Desktop Login */}
            <button
              onClick={() => setLoginOpen(true)}
              className="hidden rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-orange-500 hover:bg-orange-50 hover:text-orange-500 sm:block"
            >
              Login
            </button>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative flex h-10 items-center gap-2 rounded-lg bg-gray-900 px-4 text-sm font-semibold text-white transition hover:bg-orange-500"
            >
              {/* Cart Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.43m0 0L6.75 14.25a2.25 2.25 0 0 0 2.182 1.75h7.886a2.25 2.25 0 0 0 2.182-1.75l1.32-5.25H5.106Zm3.75 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm9 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                />
              </svg>

              <span className="hidden sm:inline">
                Cart
              </span>

              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-[11px] font-bold text-white">
                {cart?.length || 0}
              </span>
            </Link>

            {/* Mobile Menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700 lg:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

          </div>
        </div>

        {/* ================= MOBILE NAV ================= */}
        {menuOpen && (
          <div className="border-t border-gray-100 bg-white lg:hidden">

            <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">

              <ul className="space-y-1">

                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-orange-50 hover:text-orange-500"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}

                {/* Mobile Login */}
                <li className="pt-2">
                  <button
                    onClick={() => {
                      setLoginOpen(true);
                      setMenuOpen(false);
                    }}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 transition hover:border-orange-500 hover:bg-orange-50 hover:text-orange-500"
                  >
                    Login
                  </button>
                </li>

              </ul>
            </nav>

          </div>
        )}

      </header>

      {/* ================= LOGIN MODAL ================= */}
      {loginOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
          onClick={() => setLoginOpen(false)}
        >

          {/* Modal */}
          <div
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Top Decoration */}
            <div className="h-2 bg-orange-500" />

            <div className="p-6 sm:p-8">

              {/* Close Button */}
              <button
                onClick={() => setLoginOpen(false)}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-orange-50 hover:text-orange-500"
              >
                ✕
              </button>

              {/* Logo */}
              <div className="flex justify-center">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl font-bold text-white shadow-lg shadow-orange-100">
                  F
                </div>

              </div>

              {/* Heading */}
              <div className="mt-5 text-center">

                <h2 className="text-2xl font-extrabold text-gray-900">
                  Welcome Back!
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Login to continue shopping with FurniStore.
                </p>

              </div>

              {/* Success */}
              {loginSuccess ? (
                <div className="mt-8 rounded-xl bg-green-50 p-4 text-center text-green-600">
                  <p className="font-semibold">
                    ✓ Login Successful
                  </p>

                  <p className="mt-1 text-sm">
                    Welcome back to FurniStore!
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleLogin}
                  className="mt-7 space-y-5"
                >

                  {/* Email */}
                  <div>

                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                    />

                  </div>

                  {/* Password */}
                  <div>

                    <div className="mb-2 flex items-center justify-between">

                      <label className="text-sm font-semibold text-gray-700">
                        Password
                      </label>

                      <button
                        type="button"
                        className="text-xs font-semibold text-orange-500 hover:text-orange-600"
                      >
                        Forgot Password?
                      </button>

                    </div>

                    <div className="relative">

                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        required
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 pr-16 text-sm outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword(!showPassword)
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs font-semibold text-gray-500 hover:text-orange-500"
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>

                    </div>

                  </div>

                  {/* Remember */}
                  <div className="flex items-center gap-2">

                    <input
                      id="remember"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 accent-orange-500"
                    />

                    <label
                      htmlFor="remember"
                      className="text-sm text-gray-500"
                    >
                      Remember me
                    </label>

                  </div>

                  {/* Login Button */}
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-orange-500 py-3.5 font-bold text-white shadow-lg shadow-orange-100 transition hover:bg-orange-600"
                  >
                    Login
                  </button>

                  {/* Register */}
                  <p className="text-center text-sm text-gray-500">
                    Don't have an account?{" "}
                    <button
                      type="button"
                      className="font-bold text-orange-500 hover:text-orange-600"
                    >
                      Create Account
                    </button>
                  </p>

                </form>
              )}

            </div>
          </div>
        </div>
      )}
    </>
  );
}


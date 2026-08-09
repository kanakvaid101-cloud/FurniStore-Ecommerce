
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiClock,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

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
              Contact
            </span>
          </div>

          <div className="max-w-3xl">

            <span className="inline-flex rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
              ✨ We'd Love to Hear From You
            </span>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Let's Talk About
              <span className="block text-orange-500">
                Your Furniture Needs
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
              Have a question about a product, your order, delivery,
              or anything else? Our team is here to help.
            </p>

          </div>

        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="py-14 sm:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-3">

            {/* ================= CONTACT INFO ================= */}
            <div className="space-y-5">

              <div>
                <span className="text-sm font-bold uppercase tracking-widest text-orange-500">
                  Contact Us
                </span>

                <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
                  Get In Touch
                </h2>

                <p className="mt-3 leading-6 text-gray-500">
                  We're always happy to help. Reach out to us
                  through any of the options below.
                </p>
              </div>

              {/* Email */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                    <FiMail className="text-xl" />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      Email Us
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      support@furnistore.com
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      We reply within 24 hours
                    </p>
                  </div>

                </div>

              </div>

              {/* Phone */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                    <FiPhone className="text-xl" />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      Call Us
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      +91 98765 43210
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      Mon - Sat, 9:00 AM - 7:00 PM
                    </p>
                  </div>

                </div>

              </div>

              {/* Location */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                    <FiMapPin className="text-xl" />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      Visit Us
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      123 Furniture Street,
                      <br />
                      Jaipur, Rajasthan, India
                    </p>
                  </div>

                </div>

              </div>

              {/* Business Hours */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                    <FiClock className="text-xl" />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      Business Hours
                    </h3>

                    <div className="mt-2 space-y-1 text-sm text-gray-500">
                      <p className="flex justify-between gap-8">
                        <span>Monday - Friday</span>
                        <span className="font-medium text-gray-700">
                          9 AM - 7 PM
                        </span>
                      </p>

                      <p className="flex justify-between gap-8">
                        <span>Saturday</span>
                        <span className="font-medium text-gray-700">
                          10 AM - 6 PM
                        </span>
                      </p>

                      <p className="flex justify-between gap-8">
                        <span>Sunday</span>
                        <span className="font-medium text-red-500">
                          Closed
                        </span>
                      </p>
                    </div>
                  </div>

                </div>

              </div>

            </div>

            {/* ================= CONTACT FORM ================= */}
            <div className="lg:col-span-2">

              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

                <div>
                  <span className="text-sm font-bold uppercase tracking-widest text-orange-500">
                    Send a Message
                  </span>

                  <h2 className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                    How Can We Help?
                  </h2>

                  <p className="mt-2 text-gray-500">
                    Fill out the form and our team will get back
                    to you as soon as possible.
                  </p>
                </div>

                {/* Success Message */}
                {submitted && (
                  <div className="mt-6 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-700">

                    <FiCheckCircle className="flex-shrink-0 text-xl" />

                    <div>
                      <p className="font-semibold">
                        Message sent successfully!
                      </p>

                      <p className="text-sm">
                        Thank you for contacting FurniStore.
                      </p>
                    </div>

                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  className="mt-7 space-y-5"
                >

                  {/* Name + Email */}
                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        required
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Email Address
                      </label>

                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                      />
                    </div>

                  </div>

                  {/* Phone + Subject */}
                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Subject
                      </label>

                      <select
                        name="subject"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-700 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                      >
                        <option>Product Inquiry</option>
                        <option>Order Support</option>
                        <option>Delivery Question</option>
                        <option>Return & Refund</option>
                        <option>Other</option>
                      </select>
                    </div>

                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Your Message
                    </label>

                    <textarea
                      name="message"
                      rows="6"
                      placeholder="Tell us how we can help..."
                      required
                      className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-bold text-white shadow-lg shadow-orange-100 transition hover:bg-orange-600 sm:w-auto"
                  >
                    Send Message
                    <FiSend />
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= MAP / LOCATION ================= */}
      <section className="pb-16 sm:pb-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="overflow-hidden rounded-3xl bg-gray-900">

            <div className="grid lg:grid-cols-2">

              {/* Location Content */}
              <div className="flex flex-col justify-center p-8 sm:p-12">

                <span className="text-sm font-bold uppercase tracking-widest text-orange-500">
                  Find Us
                </span>

                <h2 className="mt-3 text-3xl font-extrabold text-white">
                  Visit Our Store
                </h2>

                <p className="mt-4 leading-7 text-gray-400">
                  Want to see our furniture in person? Visit our
                  showroom and explore our latest collection.
                </p>

                <div className="mt-6 flex items-start gap-3">

                  <FiMapPin className="mt-1 flex-shrink-0 text-xl text-orange-500" />

                  <p className="text-gray-300">
                    123 Furniture Street,
                    <br />
                    Jaipur, Rajasthan, India
                  </p>

                </div>

                <Link
                  to="/Store"
                  className="mt-7 inline-flex w-fit rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
                >
                  Explore Products
                </Link>

              </div>

              {/* Map Placeholder */}
              <div className="relative min-h-[350px] overflow-hidden bg-[#E7E2D8]">

                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="text-center">

                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white shadow-xl">
                      <FiMapPin className="text-2xl" />
                    </div>

                    <h3 className="mt-4 text-xl font-bold text-gray-900">
                      FurniStore
                    </h3>

                    <p className="mt-1 text-sm text-gray-600">
                      Jaipur, Rajasthan
                    </p>

                  </div>

                </div>

                {/* Decorative Grid */}
                <div className="absolute inset-0 -z-0 opacity-30">
                  <div className="h-full w-full bg-[linear-gradient(#9CA3AF_1px,transparent_1px),linear-gradient(90deg,#9CA3AF_1px,transparent_1px)] bg-[size:50px_50px]" />
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-orange-500 py-14">

        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">

          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Looking for Something Special?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-orange-100">
            Explore our furniture collection or get in touch with
            our team for personalized assistance.
          </p>

          <Link
            to="/Store"
            className="mt-7 inline-flex rounded-xl bg-white px-7 py-3.5 font-bold text-orange-500 transition hover:bg-gray-100"
          >
            Shop Now →
          </Link>

        </div>

      </section>

    </div>
  );
}


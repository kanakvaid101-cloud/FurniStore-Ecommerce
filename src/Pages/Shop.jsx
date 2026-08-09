
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useStore } from "../context/Context";

export default function Shop() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");

  const { id } = useParams();
  const { addToCart } = useStore();
  const navigate = useNavigate();

  // Fetch Product
  async function fetchProduct() {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://dummyjson.com/products/${id}`
      );

      setProduct(response.data);
      setSelectedImage(response.data.thumbnail);
    } catch (error) {
      console.error("Product fetch error:", error);
      setProduct(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [id]);

  // Loading
  if (loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-[#F8F6F2]">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-orange-500" />

          <p className="mt-4 font-medium text-gray-600">
            Loading product...
          </p>
        </div>
      </div>
    );
  }

  // Product Not Found
  if (!product) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-[#F8F6F2] px-4">
        <div className="text-center">
          <div className="text-6xl">🛋️</div>

          <h1 className="mt-5 text-3xl font-bold text-gray-900">
            Product Not Found
          </h1>

          <p className="mt-2 text-gray-500">
            Sorry, we couldn't find the product you're looking for.
          </p>

          <Link
            to="/Store"
            className="mt-6 inline-block rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Back to Store
          </Link>
        </div>
      </div>
    );
  }

  // Original Price
  const originalPrice = product.discountPercentage
    ? product.price / (1 - product.discountPercentage / 100)
    : product.price;

  // Add Cart
  const handleAddToCart = () => {
    addToCart(product);
  };

  // Buy Now
  const handleBuyNow = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div className="bg-[#F8F6F2]">

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link
              to="/"
              className="transition hover:text-orange-500"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              to="/Store"
              className="transition hover:text-orange-500"
            >
              Store
            </Link>

            <span>/</span>

            <span className="line-clamp-1 text-gray-900">
              {product.title}
            </span>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

            {/* ================= IMAGES ================= */}
            <div>

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">

                {/* Discount */}
                {product.discountPercentage > 0 && (
                  <span className="absolute left-6 top-6 z-10 rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-white shadow-md">
                    {Math.round(product.discountPercentage)}% OFF
                  </span>
                )}

                <img
                  src={selectedImage || product.thumbnail}
                  alt={product.title}
                  className="h-[400px] w-full object-contain sm:h-[500px]"
                />
              </div>

              {/* Thumbnail Gallery */}
              <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-5">

                {[product.thumbnail, ...(product.images || [])]
                  .filter(
                    (image, index, array) =>
                      array.indexOf(image) === index
                  )
                  .slice(0, 5)
                  .map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(image)}
                      className={`overflow-hidden rounded-xl border-2 bg-white p-1 transition ${
                        selectedImage === image
                          ? "border-orange-500"
                          : "border-gray-200 hover:border-orange-300"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.title} ${index + 1}`}
                        className="h-20 w-full object-cover"
                      />
                    </button>
                  ))}
              </div>
            </div>

            {/* ================= DETAILS ================= */}
            <div className="flex flex-col justify-center">

              {/* Category */}
              <div className="flex flex-wrap items-center gap-2">
                {product.category && (
                  <span className="rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold capitalize text-orange-600">
                    {product.category}
                  </span>
                )}

                {product.brand && (
                  <span className="rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-600">
                    {product.brand}
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="mt-5 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
                {product.title}
              </h1>

              {/* Rating */}
              <div className="mt-4 flex flex-wrap items-center gap-4">

                <div className="flex items-center gap-1">
                  <span className="text-lg text-orange-500">
                    ★
                  </span>

                  <span className="font-bold text-gray-900">
                    {product.rating?.toFixed(1) || "4.5"}
                  </span>

                  <span className="text-sm text-gray-500">
                    / 5
                  </span>
                </div>

                <span className="h-5 w-px bg-gray-300" />

                <span className="text-sm text-gray-500">
                  {product.stock > 0
                    ? `${product.stock} items available`
                    : "Out of stock"}
                </span>
              </div>

              {/* Description */}
              <p className="mt-6 text-base leading-7 text-gray-600">
                {product.description}
              </p>

              {/* Price */}
              <div className="mt-7 rounded-2xl bg-white p-5 shadow-sm">

                <div className="flex flex-wrap items-center gap-3">

                  <span className="text-3xl font-extrabold text-orange-500">
                    ${product.price}
                  </span>

                  {product.discountPercentage > 0 && (
                    <span className="text-lg text-gray-400 line-through">
                      ${originalPrice.toFixed(2)}
                    </span>
                  )}

                  {product.discountPercentage > 0 && (
                    <span className="rounded-md bg-green-100 px-2.5 py-1 text-xs font-bold text-green-600">
                      SAVE {Math.round(product.discountPercentage)}%
                    </span>
                  )}
                </div>

                <p className="mt-2 text-sm text-gray-500">
                  Free shipping available on this product
                </p>
              </div>

              {/* Product Information */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">

                <div className="rounded-xl bg-white p-4">
                  <p className="text-xs text-gray-400">
                    Availability
                  </p>

                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    {product.availabilityStatus || "In Stock"}
                  </p>
                </div>

                <div className="rounded-xl bg-white p-4">
                  <p className="text-xs text-gray-400">
                    Warranty
                  </p>

                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    {product.warrantyInformation || "1 Year"}
                  </p>
                </div>

                <div className="rounded-xl bg-white p-4">
                  <p className="text-xs text-gray-400">
                    Shipping
                  </p>

                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    {product.shippingInformation || "Fast Delivery"}
                  </p>
                </div>

              </div>

              {/* Buttons */}
              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">

                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="rounded-xl bg-gray-900 px-6 py-3.5 font-semibold text-white transition hover:bg-orange-500 disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  🛒 Add to Cart
                </button>

                <button
                  onClick={handleBuyNow}
                  disabled={product.stock === 0}
                  className="rounded-xl bg-orange-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  Buy Now
                </button>

              </div>

              {/* Tags */}
              {product.tags?.length > 0 && (
                <div className="mt-6">
                  <p className="mb-3 text-sm font-semibold text-gray-900">
                    Tags
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* ================= PRODUCT DETAILS ================= */}
          <div className="mt-14 rounded-3xl bg-white p-6 shadow-sm sm:p-8">

            <h2 className="text-2xl font-bold text-gray-900">
              Product Information
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs text-gray-400">
                  SKU
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {product.sku || "N/A"}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs text-gray-400">
                  Weight
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {product.weight || "N/A"} gm
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs text-gray-400">
                  Minimum Order
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {product.minimumOrderQuantity || 1}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs text-gray-400">
                  Return Policy
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {product.returnPolicy || "Easy Returns"}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs text-gray-400">
                  Shipping
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {product.shippingInformation || "Fast Shipping"}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs text-gray-400">
                  Warranty
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {product.warrantyInformation || "1 Year"}
                </p>
              </div>

            </div>
          </div>

          {/* ================= REVIEWS ================= */}
          {product.reviews?.length > 0 && (
            <div className="mt-10 rounded-3xl bg-white p-6 shadow-sm sm:p-8">

              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Customer Reviews
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    See what our customers are saying
                  </p>
                </div>

                <div className="hidden rounded-xl bg-orange-50 px-4 py-3 text-center sm:block">
                  <p className="text-2xl font-bold text-orange-500">
                    {product.rating?.toFixed(1)}
                  </p>

                  <p className="text-xs text-gray-500">
                    Overall Rating
                  </p>
                </div>
              </div>

              <div className="mt-6 divide-y divide-gray-100">

                {product.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="py-5 first:pt-0 last:pb-0"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {review.reviewerName}
                        </h3>

                        <p className="text-xs text-gray-400">
                          {review.reviewerEmail}
                        </p>
                      </div>

                      <div className="text-sm text-orange-500">
                        {"★".repeat(review.rating)}
                        <span className="ml-2 font-semibold text-gray-700">
                          {review.rating}/5
                        </span>
                      </div>

                    </div>

                    <p className="mt-3 leading-6 text-gray-600">
                      {review.comment}
                    </p>

                    {review.date && (
                      <p className="mt-2 text-xs text-gray-400">
                        {new Date(review.date).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                ))}

              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}


import React from "react";

export default function ProductCardSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-xl border border-gray-200 bg-white">
      {/* Image Skeleton */}
      <div className="relative aspect-square bg-gray-200">
        <div className="absolute left-3 top-3 h-6 w-14 rounded bg-gray-300"></div>
      </div>

      {/* Content Skeleton */}
      <div className="space-y-4 p-4">
        {/* Title */}
        <div className="space-y-2">
          <div className="h-5 w-3/4 rounded bg-gray-300"></div>
          <div className="h-5 w-1/2 rounded bg-gray-300"></div>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <div className="h-6 w-20 rounded bg-gray-300"></div>
          <div className="h-5 w-16 rounded bg-gray-200"></div>
        </div>

        {/* Button */}
        <div className="h-10 w-full rounded-lg bg-gray-300"></div>
      </div>
    </div>
  );
}
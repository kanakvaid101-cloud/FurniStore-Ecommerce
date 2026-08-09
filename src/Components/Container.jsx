import React from "react";

export default function Container({
  children,
  className = "",
  size = "default",
}) {
  console.log(children)
  const sizes = {
    sm: "max-w-3xl",
    default: "max-w-7xl",
    lg: "max-w-screen-2xl",
    full: "max-w-full",
  };

  return (
    <div className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
}
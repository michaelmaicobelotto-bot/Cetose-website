import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  id?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  isLoading = false,
  type = "button",
  onClick,
  className = "",
  id,
}) => {
  const isCurrentlyLoading = loading || isLoading;
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary:
      "bg-emerald-500 hover:bg-emerald-600 text-white focus:ring-emerald-500 shadow-lg shadow-emerald-500/20",
    secondary: "bg-gray-800 hover:bg-gray-700 text-white focus:ring-gray-500",
    outline:
      "border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white focus:ring-emerald-500",
    ghost:
      "text-gray-400 hover:text-white hover:bg-white/10 focus:ring-gray-500",
    danger:
      "bg-red-500 hover:bg-red-600 text-white focus:ring-red-500 shadow-lg shadow-red-500/20",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5",
  };

  return (
    <button
      id={id}
      type={type}
      disabled={disabled || isCurrentlyLoading}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {isCurrentlyLoading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {children}
    </button>
  );
};

import React from "react";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "glass" | "bordered";
  hover?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  id,
  variant = "default",
  hover = false,
  onClick,
}) => {
  const variantStyles = {
    default: "bg-gray-900 border border-gray-800",
    glass:
      "bg-white/5 backdrop-blur-md border border-white/10",
    bordered:
      "bg-transparent border-2 border-emerald-500/30 hover:border-emerald-500/60",
  };

  const hoverStyles = hover
    ? "cursor-pointer transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10"
    : "";

  return (
    <div
      id={id}
      onClick={onClick}
      className={`rounded-2xl p-6 ${variantStyles[variant]} ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
};

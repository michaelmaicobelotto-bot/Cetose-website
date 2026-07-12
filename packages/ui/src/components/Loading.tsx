import React from "react";

export interface LoadingProps {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "white" | "gray";
  label?: string;
  fullscreen?: boolean;
}

export const Loading: React.FC<LoadingProps> = ({
  size = "md",
  color = "primary",
  label,
  fullscreen = false,
}) => {
  const sizeStyles = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-2",
    lg: "h-12 w-12 border-[3px]",
  };

  const colorStyles = {
    primary: "border-emerald-500/30 border-t-emerald-500",
    white: "border-white/20 border-t-white",
    gray: "border-gray-700 border-t-gray-400",
  };

  const spinner = (
    <div className="flex flex-col items-center gap-3">
      <div
        className={`rounded-full animate-spin ${sizeStyles[size]} ${colorStyles[color]}`}
        role="status"
        aria-label={label ?? "Carregando..."}
      />
      {label && (
        <p className="text-sm text-gray-400 animate-pulse">{label}</p>
      )}
    </div>
  );

  if (fullscreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/80 backdrop-blur-sm">
        {spinner}
      </div>
    );
  }

  return spinner;
};

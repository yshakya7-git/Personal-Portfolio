import React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  fullWidth?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  prefixIcon,
  suffixIcon,
  variant = "primary",
  size = "md",
  loading,
  fullWidth,
  ...props
}: ButtonProps) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition !py-3 w-full";

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-3 text-base",
  };

  const variants = {
    primary: "bg-primary text-white hover:bg-secondary",
    secondary: "bg-white text-primary hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-gray-300 hover:bg-gray-100",
  };

  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={`
        ${base}
        ${sizes[size]}
        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}
        ${props.disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {prefixIcon && <span className="flex items-center">{prefixIcon}</span>}

      {loading ? "Loading..." : children}

      {suffixIcon && <span className="flex items-center">{suffixIcon}</span>}
    </button>
  );
};

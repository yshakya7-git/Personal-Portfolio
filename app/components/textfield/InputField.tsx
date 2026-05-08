import React from "react";

type TextFieldProps = {
  label?: string;
  error?: boolean;
  helperText?: string;
  required?: boolean;
  as?: "input" | "textarea" | "select";
  children?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  React.SelectHTMLAttributes<HTMLSelectElement>;

export const InputField = ({
  label,
  error,
  helperText,
  required,
  as = "input",
  children,
  ...props
}: TextFieldProps) => {
  const baseClass = `text-xs bg-neural border  disabled:cursor-not-allowed disabled:bg-gray-100 focus:ring focus:ring-primary focus:outline-none rounded-full px-3 py-2 w-full outline-none placeholder-primary text-primary dark:bg-secondary dark:border-primary dark:text-black 
  ${error ? "border-red-500" : "border-neutral"}`;

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-medium text-secondary dark:text-foreground">
          {label} {required && <span className="text-error">*</span>}
        </label>
      )}

      {as === "textarea" ? (
        <textarea {...props} className={baseClass} />
      ) : as === "select" ? (
        <select {...props} className={baseClass}>
          {children}
        </select>
      ) : (
        <input {...props} className={baseClass} />
      )}

      {helperText && (
        <div className="flex items-center space-x-2">
          {/* <ErrorIcon color="#DC362E" width={12} height={12} /> */}
          <span className="text-xs text-error">{helperText}</span>
        </div>
      )}
    </div>
  );
};

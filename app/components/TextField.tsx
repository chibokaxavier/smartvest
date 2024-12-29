import React, { ReactNode } from "react";

const formClasses =
  "block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm";

interface LabelProps {
  id: string;
  children: ReactNode;
}
interface TextFieldProps {
  id: string;
  label: string;
  className: string;
  type: string;
  placeholder: string;
  autoComplete: string;
  required: boolean;
}
function Label({ id, children }: LabelProps) {
  return (
    <label
      htmlFor={id}
      className="mb-2 block text-sm font-semibold text-gray-900"
    >
      {children}
    </label>
  );
}
const TextField = ({
  id,
  label,
  type = "text",
  className,
  placeholder,
  autoComplete,
}: TextFieldProps) => {
  return (
    <div>
      {label && <Label id={id}>{label}</Label>}{" "}
      <input
        type={type}
        className={`${formClasses}  ${className}`}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
      />
    </div>
  );
};

export default TextField;

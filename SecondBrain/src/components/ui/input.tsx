import { forwardRef } from "react";

export interface InputProps {
  placeholder: string;
  type?: "text" | "password" | "email";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, type = "text", value, onChange }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="border p-2 rounded-md w-full focus:outline-purple-600"
      />
    );
  }
);

Input.displayName = "Input";

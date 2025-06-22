import React from "react";
import type { UseFormRegister } from "react-hook-form";
import type { CreateExpenseRequest } from "../types";

type FormFieldProps = {
  label: string;
  name: keyof CreateExpenseRequest;
  register: UseFormRegister<CreateExpenseRequest>;
  isRequired: boolean;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  error?: string;
};

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  register,
  isRequired,
  type = "text",
  error,
}) => (
  <div className="flex flex-col space-y-1">
    <label>{label}</label>
    <input
      type={type}
      step={type === "number" ? "any" : undefined}
      {...register(name, {
        required: isRequired ? `${label}は必須です` : false,
        valueAsNumber: type === "number",
      })}
      className={`px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
    {error && <span className="text-red-500 text-sm">{error}</span>}
  </div>
);

import React from "react";
import type { UseFormRegister } from "react-hook-form";
import type { CreateExpenseRequest } from "../types";

type SelectFieldProps = {
  label: string;
  name: keyof CreateExpenseRequest;
  options: { value: string | number; label: string }[];
  register: UseFormRegister<CreateExpenseRequest>;
  isRequired: boolean;
  error?: string;
};

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  options,
  register,
  isRequired,
  error,
}) => (
  <div className="flex flex-col space-y-1">
    <label>{label}</label>
    <select
      {...register(name, { required: isRequired })}
      className={`px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value} label={option.label} />
      ))}
    </select>
    {error && <span className="text-red-500 text-sm">{error}</span>}
  </div>
);

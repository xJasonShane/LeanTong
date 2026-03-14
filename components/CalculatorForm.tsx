"use client";

import { Calculator, ChevronDown } from "lucide-react";
import type { CalculatorField } from "@/lib/calculators";

interface CalculatorFormProps {
  fields: CalculatorField[];
  values: Record<string, string>;
  onChange: (id: string, value: string) => void;
  onSubmit: () => void;
}

export function CalculatorForm({
  fields,
  values,
  onChange,
  onSubmit,
}: CalculatorFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {fields.map((field) => (
        <div key={field.id} className="space-y-2">
          <label
            htmlFor={field.id}
            className="flex items-center gap-2 text-sm font-medium text-slate-700"
          >
            {field.label}
            {field.required && <span className="text-red-500">*</span>}
            {field.unit && (
              <span className="text-slate-400 font-normal">
                (单位: {field.unit})
              </span>
            )}
          </label>
          {field.type === "select" && field.options ? (
            <div className="relative">
              <select
                id={field.id}
                value={values[field.id] || ""}
                onChange={(e) => onChange(field.id, e.target.value)}
                required={field.required}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer transition-all duration-200"
              >
                <option value="">请选择</option>
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
            </div>
          ) : (
            <div className="relative">
              <input
                type={field.type}
                id={field.id}
                value={values[field.id] || ""}
                onChange={(e) => onChange(field.id, e.target.value)}
                placeholder={field.placeholder}
                required={field.required}
                step={field.type === "number" ? "any" : undefined}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          )}
        </div>
      ))}
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg"
      >
        <Calculator className="w-5 h-5" />
        开始计算
      </button>
    </form>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import type { Calculator } from "@/lib/calculators";
import { calculate, type CalculationResult } from "@/lib/calculations";
import { CalculatorForm } from "@/components/CalculatorForm";
import { ResultDisplay } from "@/components/ResultDisplay";

interface CalculatorClientProps {
  calculator: Calculator;
}

export function CalculatorClient({ calculator }: CalculatorClientProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [error, setError] = useState<string>("");

  const handleChange = (id: string, value: string) => {
    setValues((prev) => ({ ...prev, [id]: value }));
    setResult(null);
    setError("");
  };

  const handleSubmit = () => {
    const inputs: Record<string, number> = {};

    for (const field of calculator.fields) {
      const val = values[field.id];
      if (!val || isNaN(Number(val))) {
        setError(`请输入有效的${field.label}`);
        return;
      }
      inputs[field.id] = Number(val);
    }

    const calcResult = calculate(calculator.id, inputs);
    if (calcResult) {
      setResult(calcResult);
      setError("");
    } else {
      setError("计算失败，请检查输入值");
    }
  };

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Link
            href="/calculator"
            className="text-blue-600 hover:text-blue-800 text-sm mb-2 inline-block"
          >
            ← 返回计算器列表
          </Link>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {calculator.name}
              </h1>
              <span className="inline-block px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded mt-2">
                {calculator.category}
              </span>
            </div>
          </div>
          <p className="text-gray-600 mt-3">{calculator.description}</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="p-4 bg-gray-50 rounded-lg mb-6">
            <p className="text-sm text-gray-500 mb-1">计算公式</p>
            <p className="font-mono text-lg text-gray-800">
              {calculator.formula}
            </p>
          </div>

          <CalculatorForm
            fields={calculator.fields}
            values={values}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>

        {(result || error) && (
          <div className="mb-6">
            <ResultDisplay result={result} error={error} />
          </div>
        )}
      </div>
    </main>
  );
}

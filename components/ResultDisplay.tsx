"use client";

import { CheckCircle, AlertCircle, TrendingUp } from "lucide-react";
import type { CalculationResult } from "@/lib/calculations";

interface ResultDisplayProps {
  result: CalculationResult | null;
  error?: string;
}

export function ResultDisplay({ result, error }: ResultDisplayProps) {
  if (error) {
    return (
      <div className="p-5 bg-red-50 border border-red-200 rounded-xl">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-red-800 mb-1">计算错误</p>
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!result) {
    return null;
  }

  return (
    <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
          <CheckCircle className="w-6 h-6 text-emerald-600" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <p className="text-sm font-medium text-emerald-700">计算结果</p>
          </div>
          <p className="text-3xl font-bold text-emerald-800">{result.formatted}</p>
          {result.value !== undefined && (
            <p className="text-sm text-emerald-600 mt-2">
              原始值: {result.value}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

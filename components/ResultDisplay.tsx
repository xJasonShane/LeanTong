"use client";

import { CheckCircle, AlertCircle } from "lucide-react";
import type { CalculationResult } from "@/lib/calculations";

interface ResultDisplayProps {
  result: CalculationResult | null;
}

export function ResultDisplay({ result }: ResultDisplayProps) {
  if (!result) {
    return null;
  }

  if (result.value === null || result.value === undefined || isNaN(result.value)) {
    return (
      <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
        <div className="flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-500" />
          <p className="text-red-700">计算出错，请检查输入参数</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-emerald-700">计算完成</p>
            <p className="text-2xl font-bold text-emerald-800">{result.formatted}</p>
          </div>
        </div>

        {result.details && result.detailLabels && result.details.length > 0 && (
          <div className="mt-4 pt-4 border-t border-emerald-200">
            <p className="text-sm font-medium text-slate-600 mb-3">计算明细：</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {result.details.map((detail, index) => (
                <div key={index} className="bg-white/60 p-3 rounded-lg border border-emerald-100">
                  <p className="text-xs text-slate-500">{result.detailLabels?.[index]}</p>
                  <p className="text-lg font-semibold text-slate-800">{detail.toFixed(2)}%</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

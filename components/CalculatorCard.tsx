import Link from "next/link";
import { Calculator as CalculatorIcon, ArrowRight, Hash } from "lucide-react";
import type { Calculator } from "@/lib/calculators";

interface CalculatorCardProps {
  calculator: Calculator;
}

const categoryStyles: Record<string, { bg: string; text: string; iconBg: string }> = {
  "效率分析": { bg: "bg-blue-50", text: "text-blue-700", iconBg: "bg-blue-100" },
  "时间分析": { bg: "bg-indigo-50", text: "text-indigo-700", iconBg: "bg-indigo-100" },
  "质量管理": { bg: "bg-emerald-50", text: "text-emerald-700", iconBg: "bg-emerald-100" },
  "生产计划": { bg: "bg-amber-50", text: "text-amber-700", iconBg: "bg-amber-100" },
};

export function CalculatorCard({ calculator }: CalculatorCardProps) {
  const categoryStyle = categoryStyles[calculator.category] || { bg: "bg-slate-50", text: "text-slate-700", iconBg: "bg-slate-100" };

  return (
    <Link
      href={`/calculator/${calculator.id}`}
      className="group block p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-200 cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 ${categoryStyle.iconBg} rounded-lg flex items-center justify-center`}>
            <CalculatorIcon className="w-5 h-5 text-slate-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
            {calculator.name}
          </h3>
        </div>
        <span className={`px-3 py-1 text-xs font-medium ${categoryStyle.bg} ${categoryStyle.text} rounded-full`}>
          {calculator.category}
        </span>
      </div>
      <p className="text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed">
        {calculator.description}
      </p>
      <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 mb-4">
        <div className="flex items-center gap-2 text-sm">
          <Hash className="w-4 h-4 text-slate-400" />
          <span className="text-slate-500">公式：</span>
          <span className="font-mono text-slate-700">{calculator.formula}</span>
        </div>
      </div>
      <div className="flex items-center justify-end text-blue-600 font-medium text-sm">
        <span>开始计算</span>
        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}

import Link from "next/link";
import { Calculator as CalculatorIcon, ArrowRight } from "lucide-react";
import type { Calculator } from "@/lib/calculators";

interface CalculatorCardProps {
  calculator: Calculator;
}

const categoryStyles: Record<string, { bg: string; text: string; iconBg: string }> = {
  "效率指标": { bg: "bg-blue-50", text: "text-blue-700", iconBg: "bg-blue-100" },
  "生产计划": { bg: "bg-indigo-50", text: "text-indigo-700", iconBg: "bg-indigo-100" },
  "库存管理": { bg: "bg-amber-50", text: "text-amber-700", iconBg: "bg-amber-100" },
  "生产控制": { bg: "bg-purple-50", text: "text-purple-700", iconBg: "bg-purple-100" },
  "效率改善": { bg: "bg-emerald-50", text: "text-emerald-700", iconBg: "bg-emerald-100" },
  "设备管理": { bg: "bg-teal-50", text: "text-teal-700", iconBg: "bg-teal-100" },
};

export function CalculatorCard({ calculator }: CalculatorCardProps) {
  const categoryStyle = categoryStyles[calculator.category] || { bg: "bg-slate-50", text: "text-slate-700", iconBg: "bg-slate-100" };

  return (
    <Link
      href={`/calculator/${calculator.id}`}
      className="group flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-200 cursor-pointer"
    >
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 ${categoryStyle.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
          <CalculatorIcon className="w-5 h-5 text-slate-600" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
            {calculator.name}
          </h3>
          <span className={`text-xs ${categoryStyle.text}`}>
            {calculator.category}
          </span>
        </div>
      </div>
      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
    </Link>
  );
}

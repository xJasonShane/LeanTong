import Link from "next/link";
import { getAllCalculators } from "@/lib/calculators";
import { CalculatorCard } from "@/components/CalculatorCard";

export default function CalculatorListPage() {
  const calculators = getAllCalculators();

  const categories = [...new Set(calculators.map((c) => c.category))];

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 text-sm mb-2 inline-block"
          >
            ← 返回首页
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">精益计算器</h1>
          <p className="text-gray-600 mt-2">
            选择一个计算器开始计算精益生产相关指标
          </p>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {calculators
                .filter((c) => c.category === category)
                .map((calculator) => (
                  <CalculatorCard key={calculator.id} calculator={calculator} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

import Link from "next/link";
import { BookOpen, Calculator, CheckCircle, ArrowRight, Sparkles, TrendingUp } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: BookOpen,
      title: "知识库",
      description: "系统学习精益生产核心概念，包括5S管理、看板系统、价值流图等经典方法论",
      href: "/wiki",
      color: "blue",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      hoverBg: "group-hover:bg-blue-100",
    },
    {
      icon: Calculator,
      title: "计算器",
      description: "使用OEE、节拍时间、线平衡率等专业计算工具，量化分析生产效率",
      href: "/calculator",
      color: "indigo",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      hoverBg: "group-hover:bg-indigo-100",
    },
  ];

  const highlights = [
    "系统化知识库",
    "专业计算工具",
    "实践导向",
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 via-transparent to-indigo-100/50 animate-gradient" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            精益生产学习平台
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 animate-fade-in stagger-1">
            精通精益
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in stagger-2">
            学习精益生产知识，使用专业计算工具，助力持续改进与效率提升
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500 animate-fade-in stagger-3">
            {highlights.map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
            核心功能
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Link
                key={feature.href}
                href={feature.href}
                className={`group p-8 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-${feature.color}-200 transition-all duration-200 cursor-pointer animate-fade-in stagger-${index + 1}`}
              >
                <div className={`w-14 h-14 ${feature.bgColor} ${feature.hoverBg} rounded-xl flex items-center justify-center mb-5 transition-colors duration-200`}>
                  <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {feature.description}
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                  <span>立即使用</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-center">
            <TrendingUp className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">
              开始您的精益之旅
            </h2>
            <p className="text-slate-300 mb-6 max-w-lg mx-auto">
              通过系统化的知识学习和专业工具，提升生产效率，实现持续改进
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/wiki"
                className="px-6 py-3 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              >
                浏览知识库
              </Link>
              <Link
                href="/calculator"
                className="px-6 py-3 bg-slate-700 text-white font-medium rounded-lg hover:bg-slate-600 transition-colors cursor-pointer"
              >
                使用计算器
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

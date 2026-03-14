import Link from "next/link";
import { FileText, ArrowRight, Tag } from "lucide-react";
import type { WikiArticle } from "@/lib/wiki";

interface WikiCardProps {
  article: WikiArticle;
}

const categoryIcons: Record<string, { bg: string; text: string }> = {
  "基础概念": { bg: "bg-blue-50", text: "text-blue-700" },
  "工具方法": { bg: "bg-indigo-50", text: "text-indigo-700" },
  "案例分析": { bg: "bg-emerald-50", text: "text-emerald-700" },
  "持续改进": { bg: "bg-amber-50", text: "text-amber-700" },
};

export function WikiCard({ article }: WikiCardProps) {
  const categoryStyle = categoryIcons[article.category] || { bg: "bg-slate-50", text: "text-slate-700" };

  return (
    <Link
      href={`/wiki/${article.id}`}
      className="group block p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-200 cursor-pointer"
    >
      <div className="flex items-start justify-between mb-3">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium ${categoryStyle.bg} ${categoryStyle.text} rounded-full`}>
          <FileText className="w-3 h-3" />
          {article.category}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
        {article.title}
      </h3>
      <p className="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">{article.summary}</p>
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {article.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2 py-0.5 text-xs text-slate-500 bg-slate-100 rounded"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>
        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
      </div>
    </Link>
  );
}

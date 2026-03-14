import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, FileText, Tag, Clock } from "lucide-react";
import { getAllWikiArticles, getWikiArticleById } from "@/lib/wiki";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const articles = getAllWikiArticles();
  return articles.map((article) => ({
    id: article.id,
  }));
}

const categoryStyles: Record<string, { bg: string; text: string }> = {
  "基础概念": { bg: "bg-blue-50", text: "text-blue-700" },
  "工具方法": { bg: "bg-indigo-50", text: "text-indigo-700" },
  "案例分析": { bg: "bg-emerald-50", text: "text-emerald-700" },
  "持续改进": { bg: "bg-amber-50", text: "text-amber-700" },
};

export default async function WikiDetailPage({ params }: PageProps) {
  const { id } = await params;
  const article = getWikiArticleById(id);

  if (!article) {
    notFound();
  }

  const categoryStyle = categoryStyles[article.category] || { bg: "bg-slate-50", text: "text-slate-700" };

  return (
    <main className="min-h-screen p-4 md:p-8 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/wiki"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 mb-6 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          返回知识库
        </Link>

        <article className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 md:p-8 border-b border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium ${categoryStyle.bg} ${categoryStyle.text} rounded-full`}>
                <FileText className="w-4 h-4" />
                {article.category}
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{article.title}</h1>
            
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                预计阅读时间: 5 分钟
              </span>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="prose prose-slate max-w-none">
              {article.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-slate-700 leading-relaxed mb-4 text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="p-6 md:p-8 bg-slate-50 border-t border-slate-100">
            <div className="flex items-center gap-2 mb-3">
              <Tag className="w-4 h-4 text-slate-400" />
              <span className="text-sm font-medium text-slate-600">相关标签</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1.5 text-sm text-slate-600 bg-white border border-slate-200 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

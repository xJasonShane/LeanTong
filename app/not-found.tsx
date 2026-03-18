"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="text-center">
        <div className="text-8xl font-bold text-blue-100 mb-4">404</div>
        <h1 className="text-2xl font-bold text-slate-800 mb-2">
          页面不存在
        </h1>
        <p className="text-slate-500 mb-8">
          抱歉，您访问的页面不存在或已被移除
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
          >
            <Home className="w-4 h-4" />
            返回首页
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            返回上页
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { Search, Frown } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  action?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
}

export function EmptyState({
  title = "暂无内容",
  description = "这里还没有内容",
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
        <Search className="w-8 h-8 text-slate-400" />
      </div>
      <h3 className="text-lg font-semibold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-500 mb-6 max-w-sm">{description}</p>
      {action && (
        action.href ? (
          <Link
            href={action.href}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
          >
            {action.label}
          </Link>
        ) : (
          <button
            onClick={action.onClick}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
          >
            {action.label}
          </button>
        )
      )}
    </div>
  );
}

export function NoResults({
  searchQuery,
  onClear,
}: {
  searchQuery: string;
  onClear?: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-4">
        <Frown className="w-8 h-8 text-amber-500" />
      </div>
      <h3 className="text-lg font-semibold text-slate-800 mb-2">未找到相关结果</h3>
      <p className="text-slate-500 mb-2">
        没有找到与 &quot;{searchQuery}&quot; 相关的内容
      </p>
      <p className="text-slate-400 text-sm mb-6">
        尝试使用其他关键词搜索
      </p>
      {onClear && (
        <button
          onClick={onClear}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
        >
          清除搜索
        </button>
      )}
    </div>
  );
}

export const CATEGORY_STYLES: Record<string, { bg: string; text: string; iconBg: string }> = {
  "精益理念": { bg: "bg-blue-50", text: "text-blue-700", iconBg: "bg-blue-100" },
  "现场管理": { bg: "bg-indigo-50", text: "text-indigo-700", iconBg: "bg-indigo-100" },
  "分析工具": { bg: "bg-purple-50", text: "text-purple-700", iconBg: "bg-purple-100" },
  "效率指标": { bg: "bg-cyan-50", text: "text-cyan-700", iconBg: "bg-cyan-100" },
  "生产计划": { bg: "bg-teal-50", text: "text-teal-700", iconBg: "bg-teal-100" },
  "生产控制": { bg: "bg-emerald-50", text: "text-emerald-700", iconBg: "bg-emerald-100" },
  "库存管理": { bg: "bg-amber-50", text: "text-amber-700", iconBg: "bg-amber-100" },
  "质量管理": { bg: "bg-orange-50", text: "text-orange-700", iconBg: "bg-orange-100" },
  "设备管理": { bg: "bg-rose-50", text: "text-rose-700", iconBg: "bg-rose-100" },
  "效率改善": { bg: "bg-green-50", text: "text-green-700", iconBg: "bg-green-100" },
};

export const DEFAULT_CATEGORY_STYLE = { bg: "bg-slate-50", text: "text-slate-700", iconBg: "bg-slate-100" };

export function getCategoryStyle(category: string) {
  return CATEGORY_STYLES[category] || DEFAULT_CATEGORY_STYLE;
}

export const SITE_NAME = "精益通";
export const SITE_DESCRIPTION = "精益管理从业者的知识查阅与计算工具平台";
export const SITE_URL = "https://jingyitong.cn";

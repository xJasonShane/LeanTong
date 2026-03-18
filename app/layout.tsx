import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "精益通 - 精益生产知识学习平台",
    template: "%s | 精益通",
  },
  description: "精益通是精益管理从业者的知识查阅与计算工具平台，提供精益理论知识、公式方法和专业计算工具。",
  keywords: ["精益生产", "精益管理", "OEE", "节拍时间", "5S", "看板", "TPM", "持续改善"],
  authors: [{ name: "精益通" }],
  openGraph: {
    title: "精益通 - 精益生产知识学习平台",
    description: "精益管理从业者的知识查阅与计算工具平台",
    type: "website",
    locale: "zh_CN",
    siteName: "精益通",
  },
  twitter: {
    card: "summary_large_image",
    title: "精益通 - 精益生产知识学习平台",
    description: "精益管理从业者的知识查阅与计算工具平台",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

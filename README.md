# 精益通

[![Next.js](https://img.shields.io/badge/Next.js-15.5.12-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.x-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-GPL3.0-green?style=flat-square)](LICENSE)

为精益管理从业者提供的一站式知识查阅与计算工具平台。

---

## ✨ 功能特性

### 📚 精益知识库

- 系统化的精益理论知识展示
- 分类导航与标签系统
- 实时搜索功能
- 内容通过 JSON 文件管理，便于增删查改

### 🧮 精益计算器

- 设备综合效率 (OEE) 计算器
- 生产节拍时间计算器
- 库存周转率计算器
- 动态表单渲染，支持多种输入类型
- 计算器配置通过 JSON 文件管理

### 🎨 现代化 UI

- 响应式设计，完美适配桌面端和移动端
- 优雅的交互动画效果
- 简洁专业的视觉风格

### 🚀 部署友好

- 静态站点生成 (SSG)
- 支持部署到 Cloudflare Pages、腾讯 EdgeOne 等平台

---

## 🚀 快速开始

### 环境要求

- Node.js 18+
- npm 或 pnpm 或 yarn

### 本地运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm start
```

开发服务器将在 http://localhost:3000 启动。

---

## 📁 项目结构

```
leantong/
├── app/                    # Next.js App Router
│   ├── page.tsx           # 首页
│   ├── layout.tsx         # 根布局
│   ├── globals.css        # 全局样式
│   ├── wiki/              # 知识库模块
│   │   ├── page.tsx       # 知识列表
│   │   └── [id]/page.tsx  # 知识详情
│   └── calculator/        # 计算器模块
│       ├── page.tsx       # 计算器列表
│       └── [id]/          # 计算器详情
├── components/            # 可复用组件
├── data/                  # 数据文件
│   ├── wiki/              # 知识库数据
│   └── calculators/       # 计算器配置
├── lib/                   # 工具函数
├── out/                   # 静态导出目录
└── package.json
```

---

## 📝 内容管理

### 添加/修改知识库内容

编辑 `data/wiki/wiki-data.json` 文件：

```json
{
  "articles": [
    {
      "id": "article-id",
      "title": "文章标题",
      "category": "分类名称",
      "summary": "简介摘要",
      "content": "详细内容",
      "tags": ["标签1", "标签2"]
    }
  ]
}
```

### 添加/修改计算器

编辑 `data/calculators/calculators.json` 文件：

```json
{
  "calculators": [
    {
      "id": "calculator-id",
      "name": "计算器名称",
      "description": "描述",
      "category": "分类",
      "formula": "公式说明",
      "fields": [
        {
          "id": "field-id",
          "label": "字段标签",
          "type": "number",
          "unit": "单位",
          "placeholder": "占位文本",
          "required": true
        }
      ],
      "calculation": "字段1 * 字段2",
      "resultUnit": "结果单位"
    }
  ]
}
```

---

## 🌐 部署指南

### Cloudflare Pages

1. 将项目推送到 GitHub/GitLab
2. 在 Cloudflare Pages 中连接仓库
3. 配置构建设置：
   - 框架预设：Next.js (Static Export)
   - 构建命令：`npm run build`
   - 输出目录：`out`
4. 部署！

### 腾讯 EdgeOne Pages

1. 将项目推送到 GitHub/GitLab
2. 在 EdgeOne Pages 中创建项目
3. **重要配置**：
   - 框架预设：**Other** 或 **Next.js (Static)**
   - 构建命令：`npm run build`
   - 输出目录：`out`
4. 部署！

**EdgeOne 常见问题排查**：

如果遇到 404 错误，请检查：

1. 输出目录是否设置为 `out`（不是 `.next` 或 `dist`）
2. 确保构建成功后 `out` 目录下有 `index.html` 文件
3. 项目已配置 `trailingSlash: true` 以兼容静态托管

### Vercel 部署

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel
```

### 本地静态部署

```bash
npm run build
```

将 `out/` 目录中的文件上传到任何静态托管服务。

---

## 🛠️ 技术栈

- **框架**: Next.js 15 (App Router, SSG)
- **UI 库**: React 19
- **类型安全**: TypeScript 5
- **样式**: Tailwind CSS 4
- **图标**: Lucide React
- **代码规范**: ESLint

---

## 📄 许可证

GPL-3.0 License - 详见 [LICENSE](LICENSE) 文件

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

## 📮 联系方式

如有问题或建议，欢迎通过 Issue 反馈。

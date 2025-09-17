# Repository Guidelines

- 用中文跟用户对话。

## 项目概述
- 基于 Next.js + TypeScript 的心理/智力年龄测试平台，侧重前端渲染与良好交互，支持 SSR/静态导出，默认部署到 Netlify。

## 安装、环境变量、运行与构建
- 安装依赖：`pnpm install`
- 环境变量：在项目根目录创建 `.env.local`
  - `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
  - `NEXT_PUBLIC_CLARITY_ID=xxxxxxxx`
- 本地开发：`pnpm dev`（访问 http://localhost:3000）
- 生产构建：`pnpm build`
- 启动生产：`pnpm start`
- 代码质量：`pnpm lint`（Biome + TypeScript 检查），`pnpm format`
  - 注：`lint/format` 脚本使用 `bunx`，如未安装 Bun，可改用 `pnpm dlx @biomejs/biome ...`。

## 目录结构、页面路由与 API
- 前端
  - `src/app`：App Router 路由与布局（`page.tsx`/`layout.tsx`）
    - 路由：`/`、`/mental-test`、`/intellectual-age-test`、`/gender-role-test`、`/personality-disorder-test`、`/more-tests`、`/privacy`、`/terms`
  - `src/components`：UI 与业务组件（基础组件位于 `src/components/ui`）
  - `src/lib`：题库与工具（`questions.ts`、`intellectualQuestions.ts`、`utils.ts` 等）
  - `public`：静态资源
- 后端 / API
  - 当前未内置 API 路由；计算逻辑主要在前端完成。
  - 如需新增接口：在 `src/app/api/<name>/route.ts` 中导出 `GET/POST` 处理器（Next.js App Router 规范）。

## 技术栈与依赖说明
- 框架：Next.js 15、React 18、TypeScript 5
- 样式与组件：TailwindCSS、shadcn/ui、Radix UI、Lucide React
- 工具链：Biome（格式化+Lint）、ESLint、PostCSS
- 部署：Netlify（`netlify.toml` 已配置，发布目录 `.next`）

## 提交与协作
- 提交信息原子、清晰（中/英皆可，建议前缀：`feat`、`fix`、`chore`）。
- PR 需说明动机与影响，UI 变更附前后截图；合并前执行 `pnpm lint && pnpm build` 确保通过。

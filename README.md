# 心理年龄测试平台 (Mental Age Test Platform)

一个基于 Next.js 构建的专业心理年龄测试和智力年龄测试平台，提供科学的心理评估工具和详细的个性化分析结果。

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38B2AC)

## ✨ 核心功能

### 🧠 心理年龄测试
- **科学评估**: 基于心理学理论设计的测试问题
- **快速测试**: 5分钟内完成，即时获得结果
- **个性化分析**: 详细的心理年龄分析和建议
- **多语言支持**: 支持中文和英文界面
- **社交分享**: 可分享测试结果到社交媒体

### 🎯 智力年龄测试
- **认知评估**: 涵盖数字推理、抽象思维、记忆学习、逻辑推理四大领域
- **专业分析**: 详细的认知能力分析报告
- **时间限制**: 每题限时作答，更准确评估反应能力
- **示例题目**: 提供样题帮助用户了解测试内容

### 🎨 用户体验
- **响应式设计**: 适配桌面和移动设备
- **现代UI**: 基于 shadcn/ui 的精美界面
- **流畅交互**: 丝滑的用户体验和动画效果
- **隐私保护**: 完全匿名，保护用户隐私

## 🛠️ 技术栈

### 前端框架
- **Next.js 15.3.2** - React 全栈框架
- **React 18.3.1** - 用户界面库
- **TypeScript 5.8.3** - 类型安全的 JavaScript

### 样式和UI
- **TailwindCSS 3.4.17** - 原子化CSS框架
- **shadcn/ui** - 现代UI组件库
- **Radix UI** - 无障碍UI基础组件
- **Lucide React** - 图标库

### 开发工具
- **Biome** - 代码格式化和Lint工具
- **ESLint** - JavaScript代码检查
- **PostCSS** - CSS处理工具
- **Bun** - 包管理和构建工具

### 部署平台
- **Netlify** - 自动化部署和CDN
- **Next.js优化** - 服务端渲染和静态生成

## 📁 项目结构

```
mental-age-test/
├── src/
│   ├── app/                    # Next.js App Router页面
│   │   ├── mental-test/        # 心理年龄测试页面
│   │   ├── intellectual-age-test/  # 智力年龄测试页面
│   │   ├── more-tests/         # 更多测试页面
│   │   ├── privacy/            # 隐私政策
│   │   └── terms/              # 服务条款
│   ├── components/             # React 组件
│   │   ├── ui/                 # 基础UI组件
│   │   ├── MentalAgeTest.tsx   # 心理年龄测试组件
│   │   ├── TestResult.tsx      # 测试结果组件
│   │   └── ...                 # 其他业务组件
│   └── lib/                    # 工具库和配置
│       ├── questions.ts        # 测试题库
│       ├── intellectualQuestions.ts  # 智力测试题库
│       └── utils.ts            # 工具函数
├── public/                     # 静态资源
│   ├── avatars/               # 用户头像
│   └── ...                    # 其他静态文件
└── 配置文件
    ├── tailwind.config.ts     # TailwindCSS配置
    ├── next.config.js         # Next.js配置
    ├── biome.json            # Biome配置
    └── netlify.toml          # Netlify部署配置
```

## 🚀 快速开始

### 环境要求

- Node.js 18.0 或更高版本
- Bun 或 npm/yarn/pnpm

### 安装依赖

```bash
# 使用 Bun (推荐)
bun install

# 或使用 npm
npm install

# 或使用 pnpm
pnpm install
```

### 开发环境

```bash
# 启动开发服务器
bun dev

# 或使用 npm
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
# 构建项目
bun run build

# 启动生产服务器
bun start
```

### 代码质量检查

```bash
# 运行 Lint 检查
bun run lint

# 格式化代码
bun run format
```

## 📊 测试系统

### 心理年龄测试算法
- 多维度评估用户心理成熟度
- 基于答案权重计算心理年龄
- 提供个性化的分析建议

### 智力年龄测试评估
- 四大认知领域全面评估
- 时间因子影响最终分数
- 专业的认知能力分析

### 题库管理
- 分层题库结构
- 多语言题目支持
- 动态难度调整

## 🌐 SEO 优化

- **元数据优化**: 每个页面都有优化的标题和描述
- **结构化数据**: 支持搜索引擎理解内容
- **性能优化**: 快速加载和良好的Core Web Vitals
- **多语言SEO**: 中英文内容优化

## 🔧 配置说明

### 环境变量

目前项目不需要特殊的环境变量配置，所有功能都可以在本地运行。

### 自定义配置

- `tailwind.config.ts` - 自定义主题和样式
- `next.config.js` - Next.js 特定配置
- `biome.json` - 代码质量规则配置

## 📱 响应式设计

项目采用移动优先的响应式设计策略：

- **桌面端**: 完整功能和最佳体验
- **平板端**: 优化的布局和交互
- **手机端**: 精简界面，核心功能完整

## 🔒 隐私和安全

- **匿名测试**: 不收集个人身份信息
- **本地处理**: 所有计算在客户端完成
- **数据保护**: 遵循隐私保护最佳实践
- **安全部署**: 通过 HTTPS 提供服务

## 🚀 部署

项目配置了 Netlify 自动部署：

1. 连接 GitHub 仓库到 Netlify
2. 自动检测构建配置（`netlify.toml`）
3. 每次推送到主分支自动部署

### 手动部署

```bash
# 构建项目
bun run build

# 部署到其他平台
# 将 .next 目录上传到你的服务器
```

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系我们

如有问题或建议，请通过以下方式联系：

- 提交 GitHub Issue
- 发送邮件到项目维护者

---

**开始你的心理年龄测试之旅** 🧠✨

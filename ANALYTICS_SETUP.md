# 分析工具配置指南

本项目已集成Google Analytics和Microsoft Clarity分析工具。

## 配置步骤

### 1. 创建环境变量文件

在项目根目录创建 `.env.local` 文件：

```bash
# Analytics Configuration
# Replace with your actual Google Analytics ID (format: G-XXXXXXXXXX)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Replace with your actual Microsoft Clarity ID  
NEXT_PUBLIC_CLARITY_ID=your-clarity-id
```

### 2. 获取分析工具ID

#### Google Analytics
1. 访问 [Google Analytics](https://analytics.google.com/)
2. 创建新的属性或使用现有属性
3. 获取测量ID（格式：G-XXXXXXXXXX）
4. 将ID添加到 `NEXT_PUBLIC_GA_ID` 环境变量

#### Microsoft Clarity
1. 访问 [Microsoft Clarity](https://clarity.microsoft.com/)
2. 创建新项目
3. 获取项目ID
4. 将ID添加到 `NEXT_PUBLIC_CLARITY_ID` 环境变量

### 3. 重启开发服务器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

### 4. 验证配置

- 打开浏览器开发者工具
- 查看Network标签页，确认分析脚本正确加载
- 在Google Analytics和Microsoft Clarity控制台中验证数据收集

## 注意事项

- 环境变量以 `NEXT_PUBLIC_` 开头，确保在客户端可用
- 不要将真实的分析ID提交到代码仓库
- 建议在生产环境和开发环境使用不同的分析ID
- `.env.local` 文件应添加到 `.gitignore` 中 
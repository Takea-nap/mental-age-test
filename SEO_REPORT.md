# 站点 SEO 全面分析报告（基于 Playwright 抓取与代码审查）

更新时间：2025-09-17

目标站点：mental-age-test.app（本地构建环境 http://localhost:3010）


**一、 优点总结 (Strengths)**

- 清晰的标题层级与语义结构：主要页面均有单一 H1，辅以分层 H2/H3，便于理解主题与爬虫解析（如 `/`、`/more-tests`、`/intellectual-age-test`）。
- 站点级元信息较完整：根布局配置 `title`、`description`、Open Graph 与 Twitter 卡片等，提高搜索与社交分享展示质量（src/app/layout.tsx:17）。
- 图片替代文本规范：关键头像与 Logo 均提供描述性 `alt` 文本，利于无障碍与图片搜索识别（如 `src/components/Testimonials.tsx`）。
- 内部链接与转化路径清晰：头/底部与多处 CTA 指向核心页面（`/mental-test`、`/more-tests` 等），提升站内可达性与点击深度。
- 隐私与条款页完整：`/privacy` 与 `/terms` 可用，增强站点可信度与合规性。
- 已设计结构化数据：`/mental-test` 布局包含 WebApplication 与 FAQ 的 JSON‑LD（src/app/mental-test/layout.tsx），为富结果奠定基础。
- 基础抓取设施：存在 `sitemap.xml` 与 `robots.txt`（public/sitemap.xml、public/robots.txt）。
- 现代技术栈：Next.js App Router + 元数据 API、Tailwind 与组件库，便于 SSR/SSG、语义与性能优化。


**二、 待改进问题清单 (Areas for Improvement - List)**

1. 页面体验 (Page Experience)
   - 核心网页指标：实验室抓取下 FCP 很快（~50–70ms），CLS 为 0，但 LCP/INP 未能在无头环境稳定获取；生产实测未知。
   - 加载速度：`next.config.js` 关闭了内置图片优化（`images.unoptimized: true`）；首页含多图与第三方脚本（GA/Clarity/imgpop），潜在拉长 LCP/INP。
   - 视觉稳定性：移动端存在横向滚动（375×812 视口 `hScroll=true`），可能带来交互位移与体验问题。

2. 移动设备易用性 (Mobile Usability)
   - 响应式：检测到横向滚动，存在溢出元素（疑似宽度/栅格/按钮组合导致）。
   - 移动友好：`viewport` 正常，但溢出与可点元素尺寸/间距细节需优化。
   - 移动优先索引：主要内容移动端可见，但需修复溢出与交互细节以满足移动优先索引期望。

3. 无障碍性 (Accessibility / a11y)
   - 折叠/抽屉组件缺少 `aria-expanded`/`aria-controls` 状态属性。
   - 缺少“跳转主内容”的 Skip link（键盘与读屏体验不佳）。
   - 语言标注：根 `lang="en"`，但站内存在中英文混排，i18n 标注有待统一。

4. 结构化数据 (Structured Data)
   - 覆盖范围：仅 `mental-test` 布局嵌入 JSON‑LD；首页/更多测试/知识页未提供 `WebSite` + `SearchAction`、`BreadcrumbList` 等。
   - 规范性：`mental-test` 的 canonical 使用占位域名（yourdomain.com），与实际域名不一致。
   - 有效性：未对生产环境进行 Rich Results 测试验证，富结果可见性不明。

5. 内容质量与相关性 (Content Quality & E‑E‑A‑T)
   - E‑E‑A‑T 信号不足：对“科学验证、98% 准确率、数百万用户”等缺乏出处/参考链接；缺少作者/审校/更新时间等页面级可信要素。
   - 原创性与实用性：关键词“mental age test”等重复偏多，建议强化可用信息与方法、限制说明，减少营销式措辞。
   - 搜索意图匹配：应更清晰区隔“开始测试/测试过程/结果解读”并互链，提升满足度。

6. 关键词优化 (Keyword Optimization)
   - 标题/描述：部分页面复用全站描述（如 `/privacy`），页面特异性不足；首页缺少 `og:image`。
   - H 标签与正文：关键词分布偏密集，建议自然化与同义表达，避免堆砌。
   - 规范化：多数页面缺失 `rel=canonical`，重复内容信号不清晰。

7. 站内链接策略 (Internal Linking)
   - 逻辑性：锚文本多为泛化 CTA（“Start Test Now”）；跨页面语义互链不足（如“更多测试”到“智力年龄/性格障碍”的介绍或知识页）。
   - 可达性：`/intellectual-age-test/start` 等流程页建议统一面包屑/返回路径，控制点击深度。
   - 锚文本质量：应更具描述性（如“开始心理年龄测试（约5分钟）”）。

8. HTML 结构、元标签与图片优化 (HTML Structure, Meta Tags & Image Optimization)
   - 规范化标签缺失：大多数页面无 `rel=canonical`。
   - 社媒图缺失：多个路由无 `og:image`；影响分享展示与 CTR。
   - 图片优化：关闭了 Next/Image 优化；部分 `<img>` 缺尺寸/懒加载策略，影响 LCP 与稳定性。
   - 交互元素嵌套：多处 `<Link>` 内包 `<Button>`（或反向），导致重复可聚焦目标。

9. 技术SEO基础 (Technical SEO Fundamentals)
   - robots.txt：未声明 Sitemap，且屏蔽了不存在路径（`/privacy-policy`、`/terms-of-service`）。
   - sitemap.xml：包含不存在路由 `/policy`（应为 `/privacy`）；`lastmod` 维护策略需明确。
   - HTTP 状态码：未命中路由与 `/mental-test` 返回 500（Playwright 抓取），应分别为 404/200。
   - HTTPS：需在 Search Console 提交 HTTPS 版本与站点地图并监控。


**三、 专业优化建议 (Professional Recommendations)**

1) 关键页面 500 错误与 404 错误码异常（优先级：高）
- 问题描述：`/mental-test` 与未知路由返回 500，严重影响抓取与索引。
- 谷歌指南参考：HTTP 状态码与抓取 https://developers.google.com/search/docs/crawling-indexing/http-status-codes
- 具体解决方案：
  - 修复 `/mental-test` 运行时错误（检查 `MentalTestClient` 依赖、仅客户端组件与参数解析）。
  - 新增 `app/not-found.tsx` 并在未命中时返回 404（Next App Router 标准 `notFound()`）。

2) 全站 canonical 统一与补全（优先级：高）
- 问题描述：仅 `mental-test` 存在且仍为占位域名；其余路由缺失。
- 指南参考：规范化与重复内容 https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- 方案：
  - `src/app/layout.tsx` 增加 `alternates: { canonical: 'https://mental-age-test.app' }`。
  - 各主路由布局/页面补充对应 canonical，`/mental-test` 替换占位域名为真实域名。

3) 修复移动端横向滚动（优先级：高）
- 问题描述：375×812 视口存在横向滚动，影响移动体验。
- 指南参考：移动 SEO https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-seo
- 方案：
  - 定位超宽元素（临时 `outline` 调试），为图片/栅格/卡片补 `max-w-full`、`overflow-hidden`、`break-words`。
  - `globals.css` 兜底：`html,body{overflow-x:hidden}`；消除固定宽度导致的溢出。

4) 启用图片优化与补齐 `og:image`（优先级：高）
- 问题描述：关闭 Next/Image 优化，多路由缺 `og:image`。
- 指南参考：图片最佳实践 https://developers.google.com/search/docs/appearance/images
- 方案：
  - 移除 `next.config.js` 的 `images.unoptimized: true`。
  - 将关键图片改为 `next/image`，补 `width/height/sizes`，首屏图加 `priority`。
  - 为首页/详情页补 `openGraph.images`（1200×630 JPG）。

5) robots 与 sitemap 与实际路由不一致（优先级：高）
- 问题描述：`robots.txt` 未声明 Sitemap 且屏蔽不存在路径；`sitemap.xml` 含 `/policy`。
- 指南参考：
  - robots.txt https://developers.google.com/search/docs/crawling-indexing/robots/intro
  - Sitemap https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- 方案：
  - 更新 `public/robots.txt`：添加 `Sitemap: https://mental-age-test.app/sitemap.xml`；删除无效 Disallow。
  - 修正 `public/sitemap.xml` 的错误 URL（`/policy`→`/privacy`），保持 `lastmod` 策略。
  - 推荐新增 `app/robots.ts` 与 `app/sitemap.ts`，基于 `NEXT_PUBLIC_SITE_URL` 动态生成。

6) 扩大结构化数据覆盖并校验（优先级：中高）
- 问题描述：除 `mental-test` 外覆盖不足；域名/规范化不一致。
- 指南参考：
  - 结构化数据总览 https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
  - FAQ 富结果 https://developers.google.com/search/docs/appearance/structured-data/faqpage
  - Sitelinks Searchbox https://developers.google.com/search/docs/appearance/structured-data/sitelinks-searchbox
- 方案：
  - 根布局添加 `WebSite + SearchAction` JSON‑LD；`/more-tests` 与测试详情页添加 `BreadcrumbList`。
  - 有 FAQ 的页面（如首页）补 `FAQPage` JSON‑LD，与可见内容一致。
  - 修正 `mental-test` JSON‑LD 与 canonical 域名一致，使用绝对 URL。

7) 页面特异性标题/描述（优先级：中）
- 问题描述：部分页面复用通用描述（如 `/privacy`），影响摘要质量与 CTR。
- 指南参考：标题链接最佳实践 https://developers.google.com/search/docs/appearance/title-links
- 方案：
  - 为 `/privacy`、`/terms`、`/more-tests`、`/intellectual-age-test` 等设置独立、简洁且意图匹配的 `title/description`（约 60/160 字符）。
  - 避免关键词堆砌，用自然语言凸显页面独特价值（例如测试时长/适用人群/结果解读范围等）。

8) 锚文本与内部链接语义优化（优先级：中）
- 问题描述：CTA 语义弱、跨页面互链不足。
- 指南参考：SEO 入门（内部链接/锚文本）https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- 方案：
  - 将 CTA 改为“开始心理年龄测试（约5分钟）”“进入智力年龄测试（15–25分钟）”。
  - 增加相关互链（如从 `/more-tests` 到各测试介绍段落/知识页）。

9) 无障碍改进（优先级：中）
- 问题描述：FAQ/抽屉缺 `aria-*` 状态属性；缺 Skip link。
- 指南参考：图片/可访问性基础 https://developers.google.com/search/docs/appearance/images
- 方案：
  - 折叠按钮增加 `aria-expanded` 与 `aria-controls`；面板赋予对应 `id`。
  - 在 `Header` 前添加可聚焦的“跳转主内容”链接（focus 可见）。

10) 第三方脚本与交互性能（优先级：中）
- 问题描述：GA/Clarity/imgpop 增加主线程与网络请求。
- 指南参考：核心网页指标 https://developers.google.com/search/docs/appearance/core-web-vitals
- 方案：
  - 保持 `strategy="afterInteractive"`，增加 `preconnect/dns-prefetch`；对非必要脚本按路由懒加载。
  - 监控 PSI 与 Search Console 的 CWV 报表，针对 LCP/INP 做持续优化。

11) 语言标注与多语言（优先级：低）
- 问题描述：`lang="en"` 与内容语言不一致。
- 指南参考：多语言/多地区 https://developers.google.com/search/docs/specialty/international/localized-versions
- 方案：
  - 若主要面向中文用户，将根 `lang` 设为 `zh-CN`；或按路由/段落设置 `lang`；`alternates.languages` 使用真实多语言 URL。

12) 标题与图片细节稳定性（优先级：低）
- 问题描述：部分 `<img>` 未指定尺寸/懒加载；交互元素嵌套导致焦点重复。
- 指南参考：图片最佳实践 https://developers.google.com/search/docs/appearance/images
- 方案：
  - 使用 `next/image` + 宽高 + `loading="lazy"`（非首屏）；只保留一个交互元素，另一层仅作样式容器。


— 可落地代码改动要点（建议示例） —

- 规范化与域名：
  - `src/app/layout.tsx`：添加 `alternates: { canonical: 'https://mental-age-test.app' }`。
  - `src/app/mental-test/layout.tsx`：修正 `yourdomain.com` 为真实域名。
- 结构化数据与站点基础：
  - 新增 `app/robots.ts`、`app/sitemap.ts` 基于 `NEXT_PUBLIC_SITE_URL` 动态生成。
  - `public/robots.txt` 添加 `Sitemap:` 行，删除无效 Disallow。
  - 修正 `public/sitemap.xml` 的 `/policy`→`/privacy`。
- 图片与分享卡片：
  - `next.config.js` 删除 `images.unoptimized: true`。
  - 将主要图片改为 `next/image` 并补宽高/懒加载；为各路由补 `openGraph.images`（1200×630）。
- 无障碍与移动端：
  - FAQ/抽屉等交互增加 `aria-*` 状态属性。
  - 在 `globals.css` 兜底 `overflow-x:hidden`，并逐一修复溢出组件。
- 错误码与未命中页面：
  - 新增 `app/not-found.tsx` 返回 404；修复 `/mental-test` 运行时错误，确保 200。


验证与上线建议

- 使用 Search Console 与 PageSpeed Insights 验证 Core Web Vitals（尤其 LCP/INP）与富结果状态（FAQ/WebSite 等）。
- 上线前用 Rich Results Test 校验 JSON‑LD 的错误/警告。
- 在 Search Console 提交正确的 `sitemap.xml` 并设置首选 HTTPS 属性，持续监控覆盖与 CWV 报表。
- 对关键路由（`/mental-test`、`/intellectual-age-test`）分别执行移动友好测试与渲染抓取，确认页面 200/内容完整与无横向滚动。


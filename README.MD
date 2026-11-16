# 嗖嗖社区 - 水利环境技术博客

基于 VuePress 1.x + vdoing 主题构建的个人技术博客，专注于水利环境领域的技术分享与总结。

## 🚀 技术栈

- **框架**: VuePress 1.8.0
- **主题**: vuepress-theme-vdoing 1.8.3
- **语言**: JavaScript / Vue 2
- **样式**: Stylus
- **部署**: GitHub Pages + GitHub Actions
- **评论**: Waline v2
- **统计**: 百度统计 + 自动推送

## 📁 项目结构

```
ssblog/
├── docs/                    # 文档源码目录
│   ├── .vuepress/          # VuePress 配置
│   │   ├── config/         # 配置拆分文件
│   │   ├── plugins/        # 本地插件
│   │   ├── public/         # 静态资源
│   │   └── styles/         # 全局样式
│   ├── _posts/             # 博客文章 (随笔)
│   ├── 01.工具箱/          # 工具箱相关文档
│   ├── 02.模型/            # 模型技术文档
│   ├── 03.GIS/             # GIS 相关文档
│   ├── 04.数据库/          # 数据库技术文档
│   ├── 05.程序开发/        # 程序开发文档
│   ├── 06.流域研究/        # 流域研究案例
│   ├── 07.侃一侃/          # 随笔杂谈
│   ├── @pages/             # 自动生成页面
│   └── index.md            # 首页
├── utils/                   # 工具脚本
├── .github/                 # GitHub Actions 工作流
├── .husky/                  # Git Hooks
├── package.json
└── README.md
```

## 🛠️ 本地开发

### 环境要求

- Node.js 20.x (参考 `.nvmrc` / `.node-version`)
- npm 9.x+

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:8080

### 构建生产版本

```bash
npm run build
```

产物输出到 `docs/.vuepress/dist/`

## 📦 部署

### 自动部署 (推荐)

推送到 `main` 分支自动触发 GitHub Actions 构建部署到 GitHub Pages。

### 手动部署

```bash
npm run deploy
```

## ✅ 代码规范

### 可用脚本

```bash
# 代码检查
npm run lint          # ESLint 检查
npm run lint:fix      # ESLint 自动修复
npm run format        # Prettier 格式化
npm run format:check  # Prettier 检查
npm run stylelint     # Stylelint 检查
npm run stylelint:fix # Stylelint 自动修复

# Git Hooks (提交前自动运行)
npm run prepare       # 安装 husky hooks
```

### 提交规范

- 使用 `lint-staged` 在提交前自动检查暂存文件
- 建议遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范

## 📝 内容编写

### Frontmatter 规范

```yaml
---
title: 文章标题
date: 2024-01-15
permalink: /pages/xxx/ # 永久链接
categories: # 分类 (对应目录结构)
  - 分类1
  - 分类2
tags: # 标签
  - 标签1
  - 标签2
author: # 作者
  name: 作者名
  link: 作者链接
---
```

### 目录结构映射

- 物理目录结构自动映射为导航/侧边栏
- 使用数字前缀控制排序 (如 `01.工具箱/`)
- `_posts` 目录下的文章归类为"随笔"

## 🔧 配置说明

### 主要配置文件

- `docs/.vuepress/config.js` - 主配置入口
- `docs/.vuepress/config/themeConfig.js` - 主题配置
- `docs/.vuepress/config/nav.js` - 导航栏配置
- `docs/.vuepress/config/plugins.js` - 插件配置

### 环境变量

| 变量           | 说明                        |
| -------------- | --------------------------- |
| `GITHUB_TOKEN` | GitHub Actions 自动部署所需 |
| `CODING_TOKEN` | Coding Pages 部署可选       |

## 📊 监控与维护

### 自动化工作流

- **CI/CD** (`.github/workflows/deploy.yml`) - 推送自动构建部署
- **依赖更新** (`.github/dependabot.yml`) - 每周一自动检查依赖更新
- **死链检测** (`.github/workflows/link-check.yml`) - 每周日自动检测

### 百度推送

```bash
npm run baiduPush  # 生成 urls.txt 并推送
```

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/xxx`)
3. 提交更改 (`git commit -m 'feat: add xxx'`)
4. 推送分支 (`git push origin feature/xxx`)
5. 创建 Pull Request

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE)

## 🔗 相关链接

- [博客地址](https://xugaoyi.com)
- [VuePress 官网](https://vuepress.vuejs.org/)
- [vdoing 主题](https://github.com/xugaoyi/vuepress-theme-vdoing)
- [Waline 评论](https://waline.js.org/)

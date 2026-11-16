# 更新日志

本项目遵循 [语义化版本](https://semver.org/lang/zh-CN/) 和 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/) 规范。

## [Unreleased]

### Added

- GitHub Actions CI/CD 自动化部署工作流
- Dependabot 自动依赖更新配置
- 代码质量检查工作流 (ESLint + Prettier + Stylelint)
- 死链检测工作流 (lychee)
- 安全审计工作流 (npm audit)
- 发布工作流 (GitHub Release)
- ESLint + Prettier + Stylelint 代码规范工具链
- Husky + lint-staged Git Hooks
- EditorConfig 编辑器配置
- TypeScript 配置 (tsconfig.json)
- 贡献指南 (CONTRIBUTING.md)
- 更新日志 (CHANGELOG.md)
- .lycheeignore 死链检测排除文件
- .nvmrc / .node-version Node.js 版本锁定
- README.md 项目文档重写

### Changed

- 更新 package.json 依赖版本兼容性
- 优化 .gitignore 忽略规则
- 简化 ESLint 配置适配 Vue 2 项目

### Fixed

- 修复 stylelint-config-prettier 版本冲突

---

## [1.0.0] - 2024-01-15

### Added

- 初始化项目结构
- VuePress 1.8.0 + vdoing 主题 1.8.3
- 基础配置 (config.js, themeConfig.js, nav.js, plugins.js)
- 核心内容目录 (工具箱、模型、GIS、数据库、程序开发、流域研究、侃一侃)
- Waline 评论系统集成
- 百度统计 + 自动推送
- 多个 VuePress 插件 (搜索、复制、Demo、缩放、第三方搜索)
- 部署脚本 (deploy.sh, baiduPush.sh)
- 工具脚本 (editFrontmatter.js, baiduPush.js)

### Content

- 143 篇技术文档
- 涵盖 MIKE、EFDC、Delft3D、HEC-RAS、WASH123D、SWMM、HSPF 等模型
- ArcGIS、QGIS GIS 技术文档
- .NET、Python、数据库、Web 安全编程文档
- 鄱阳湖、太湖、巢湖、渤海湾流域研究案例

---

## 版本说明

### 版本号格式

`主版本号.次版本号.修订号` (MAJOR.MINOR.PATCH)

- **主版本号**: 不兼容的 API 变更 / 重大架构调整
- **次版本号**: 向后兼容的功能性新增
- **修订号**: 向后兼容的问题修正

### 发布类型

- **正式版**: `v1.0.0`, `v1.1.0`, `v2.0.0`
- **预发布版**: `v1.0.0-alpha.1`, `v1.0.0-beta.1`, `v1.0.0-rc.1`

---

## 迁移指南

### 从 0.x 升级到 1.0.0

1. Node.js 版本要求升级到 20.x
2. 构建命令需设置 `NODE_OPTIONS=--max-old-space-size=4096`
3. 部署方式改为 GitHub Actions 自动化
4. 代码提交需通过 lint-staged 检查

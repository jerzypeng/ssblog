# 贡献指南

感谢你考虑为嗖嗖社区博客做出贡献！以下是贡献指南。

## 🚀 快速开始

1. **Fork** 本仓库
2. **Clone** 你的 Fork 到本地
   ```bash
   git clone https://github.com/your-username/ssblog.git
   cd ssblog
   ```
3. **安装依赖**
   ```bash
   npm install
   ```
4. **创建分支**
   ```bash
   git checkout -b feature/your-feature-name
   # 或
   git checkout -b fix/your-bug-fix
   ```
5. **开发和测试**
   ```bash
   npm run dev
   # 在浏览器打开 http://localhost:8080
   ```
6. **代码检查** (提交前必须通过)
   ```bash
   npm run lint
   npm run format:check
   npm run stylelint
   ```
7. **构建验证**
   ```bash
   npm run build
   ```
8. **提交并推送**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   git push origin feature/your-feature-name
   ```
9. **创建 Pull Request**

## 📝 提交规范

遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

| 类型       | 说明                   | 示例                                 |
| ---------- | ---------------------- | ------------------------------------ |
| `feat`     | 新功能                 | `feat: add search highlight`         |
| `fix`      | Bug 修复               | `fix: resolve nav collapse issue`    |
| `docs`     | 文档更新               | `docs: update README`                |
| `style`    | 代码格式 (不影响逻辑)  | `style: format with prettier`        |
| `refactor` | 重构 (非新功能/非修复) | `refactor: extract common component` |
| `perf`     | 性能优化               | `perf: optimize image loading`       |
| `test`     | 测试相关               | `test: add unit tests for utils`     |
| `chore`    | 构建/工具/依赖更新     | `chore: update dependencies`         |
| `ci`       | CI/CD 配置             | `ci: add link check workflow`        |

### 提交信息格式

```
<type>(<scope>): <subject>

<body>

<footer>
```

示例：

```
feat(nav): add multi-level dropdown support

- Support nested navigation items
- Add keyboard navigation

Closes #123
```

## 📂 内容贡献

### 添加新文章

1. 在对应目录下创建 `.md` 文件
2. 必须包含 Frontmatter：
   ```yaml
   ---
   title: 文章标题
   date: 2024-01-15
   permalink: /pages/xxx/ # 唯一永久链接
   categories: # 一级/二级分类
     - 一级分类
     - 二级分类
   tags: # 标签
     - 标签1
     - 标签2
   author: # 作者信息
     name: 作者名
     link: https://github.com/xxx
   ---
   ```
3. 使用相对路径引用图片：`![alt](./img/image.png)`
4. 代码块指定语言：`js, `python, ```bash

### 目录结构规范

```
docs/
├── 01.工具箱/          # 工具类文档
├── 02.模型/            # 模型技术
├── 03.GIS/             # GIS 相关
├── 04.数据库/          # 数据库技术
├── 05.程序开发/        # 编程开发
├── 06.流域研究/        # 案例研究
├── 07.侃一侃/          # 随笔杂谈
├── _posts/             # 博客随笔 (按日期分类)
└── @pages/             # 自动生成页面 (勿手动修改)
```

- 使用数字前缀控制排序 (01., 02., ...)
- 目录名使用中文，文件名使用英文/拼音/数字
- 避免过深层级 (建议 ≤ 3 层)

## 🔧 代码规范

### JavaScript / Vue

- 使用 2 空格缩进
- 单引号优先
- 尾逗号 (es5)
- 组件名使用 PascalCase
- 文件名使用 kebab-case

### Stylus / CSS

- 使用 2 空格缩进
- 类名使用 BEM 命名规范
- 优先使用 CSS 变量
- 避免 !important

### Markdown

- 标题层级递进 (h1 → h2 → h3)
- 列表项首字母大写
- 链接使用相对路径
- 图片使用相对路径，放在同级 `img/` 目录

## ✅ PR 检查清单

提交 PR 前请确认：

- [ ] 代码通过 `npm run lint` / `npm run format:check` / `npm run stylelint`
- [ ] `npm run build` 构建成功
- [ ] 本地预览无报错 (`npm run dev`)
- [ ] 新增文章包含完整 Frontmatter
- [ ] 图片已优化 (建议 < 500KB，使用 WebP)
- [ ] 无死链 (可运行 `npx lychee --exclude-file .lycheeignore ./docs` 检查)
- [ ] 提交信息符合 Conventional Commits

## 🐛 报告 Bug

使用 [GitHub Issues](https://github.com/your-repo/ssblog/issues) 报告，请包含：

1. **复现步骤** - 详细的操作步骤
2. **预期行为** - 你期望发生什么
3. **实际行为** - 实际发生了什么
4. **环境信息** - OS、浏览器、Node.js 版本
5. **截图/录屏** - 如适用

## 💡 功能建议

欢迎提出新功能建议，请在 Issue 中描述：

1. **使用场景** - 什么情况下需要这个功能
2. **预期方案** - 你心中的实现方式
3. **替代方案** - 是否有其他解决路径
4. **优先级** - 对你的重要程度

## 📄 许可证

贡献的代码和内容将遵循 [MIT License](LICENSE)。

---

再次感谢你的贡献！🎉

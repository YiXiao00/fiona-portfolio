# GitHub Pages 部署指南

本项目已配置好 GitHub Actions 自动部署到 GitHub Pages。按照以下步骤操作即可：

## 部署步骤

### 1. 准备 GitHub 仓库

1. 在 GitHub 上创建一个新仓库（如果还没有）
2. 将本地代码推送到 GitHub：

```bash
# 初始化 git（如果还没有）
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit"

# 添加远程仓库（替换 YOUR_USERNAME 和 YOUR_REPO_NAME）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 2. 启用 GitHub Pages

1. 进入你的 GitHub 仓库页面
2. 点击 **Settings**（设置）
3. 在左侧菜单中找到 **Pages**（页面）
4. 在 **Source**（源）部分：
   - 选择 **GitHub Actions** 作为源
5. 保存设置

### 3. 自动部署

配置完成后，每次你推送代码到 `main` 或 `master` 分支时，GitHub Actions 会自动：
- 安装依赖
- 构建项目
- 部署到 GitHub Pages

### 4. 访问你的网站

部署完成后，你的网站地址将是：
- 如果仓库名为 `username.github.io`：`https://username.github.io`
- 如果仓库名为其他名称：`https://username.github.io/repository-name/`

**注意**：首次部署可能需要几分钟时间。你可以在仓库的 **Actions** 标签页查看部署进度。

## 手动触发部署

如果需要手动触发部署：

1. 进入仓库的 **Actions** 标签页
2. 选择 **Deploy to GitHub Pages** 工作流
3. 点击 **Run workflow** 按钮

## 更新构建配置（如果需要）

如果你的仓库名称不是 `simplefolio-master`，需要更新 `package.json` 中的 `build:github` 脚本：

```json
"build:github": "parcel build --public-url /YOUR_REPO_NAME/"
```

然后更新 `.github/workflows/gh-pages.yml` 中的构建命令：

```yaml
- name: Build project
  run: npm run build:github
```

## 本地测试构建

在部署前，你可以本地测试构建：

```bash
npm run build
```

构建后的文件会在 `dist` 目录中。你可以使用任何静态文件服务器测试：

```bash
# 使用 Python
cd dist
python -m http.server 8000

# 或使用 Node.js 的 http-server
npx http-server dist -p 8000
```

## 常见问题

### 部署失败

- 检查 GitHub Actions 日志中的错误信息
- 确保所有依赖都已正确安装
- 确保 `package.json` 中的脚本配置正确

### 图片不显示

- 确保所有图片都使用 ES6 `import` 语句导入（已在代码中配置）
- 检查图片路径是否正确

### 样式不加载

- 确保 Sass 文件正确编译
- 检查浏览器控制台是否有错误

## 其他部署选项

除了 GitHub Pages，你还可以考虑：

- **Netlify**：更简单的部署流程，支持自动部署
- **Vercel**：快速部署，适合前端项目
- **Cloudflare Pages**：免费且快速

这些平台通常只需要连接 GitHub 仓库即可自动部署。


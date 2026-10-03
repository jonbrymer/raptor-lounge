# 终极井字游戏

[English](README.md) | [日本語](README_jp.md) | [한국어](README_kr.md) | [Русский](README_ru.md) | [Español](README_es.md) | [Français](README_fr.md) | [Deutsch](README_de.md)

🌐 一个现代、多语言且功能丰富的基于网页的井字游戏 🌐

<div align="center">
  <img width="128px" src="https://raw.githubusercontent.com/VoxDroid/Ultimate-Tic-Tac-Toe/refs/heads/main/assets/logo/UT.png" alt="终极井字游戏标志">
</div>

<div align="center">
  <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/releases">
    <img alt="版本" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000">
  </a>
  <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/blob/main/LICENSE">
    <img alt="许可证: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg">
  </a>
  <a href="https://html.spec.whatwg.org/">
    <img alt="使用技术: HTML5" src="https://img.shields.io/badge/Built%20with-HTML5-E34F26?logo=html5&logoColor=white">
  </a>
  <a href="https://www.w3.org/Style/CSS/Overview.en.html">
    <img alt="样式技术: CSS3" src="https://img.shields.io/badge/Styled%20with-CSS3-1572B6?logo=css3&logoColor=white">
  </a>
  <a href="https://javascript.info/">
    <img alt="驱动技术: JavaScript" src="https://img.shields.io/badge/Powered%20by-JavaScript-F7DF1E?logo=javascript&logoColor=black">
  </a>
</div>

<div align="center">
  <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/stargazers">
    <img alt="GitHub 星星" src="https://img.shields.io/github/stars/VoxDroid/Ultimate-Tic-Tac-Toe?color=gold">
  </a>
  <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/network/members">
    <img alt="GitHub 分支" src="https://img.shields.io/github/forks/VoxDroid/Ultimate-Tic-Tac-Toe?color=silver">
  </a>
  <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/issues">
    <img alt="GitHub 问题" src="https://img.shields.io/github/issues/VoxDroid/Ultimate-Tic-Tac-Toe?color=orange">
  </a>
  <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/commits/main">
    <img alt="GitHub 提交" src="https://img.shields.io/github/commit-activity/m/VoxDroid/Ultimate-Tic-Tac-Toe">
  </a>
</div>

<div align="center">
  <a href="https://voxdroid.github.io/Ultimate-Tic-Tac-Toe/" target="_blank">
    <img src="https://img.shields.io/badge/立即玩-终极井字游戏-brightgreen?style=for-the-badge" alt="玩终极井字游戏">
  </a>
</div>

## 目录

- [简介](#简介)
- [特点](#特点)
- [系统要求](#系统要求)
- [安装](#安装)
- [开始使用](#开始使用)
- [使用方法](#使用方法)
- [演示](#演示)
- [贡献](#贡献)
- [安全性](#安全性)
- [行为准则](#行为准则)
- [支持](#支持)
- [许可证](#许可证)
- [致谢](#致谢)

## 简介

**终极井字游戏** 是一个开源的、基于网页的经典井字游戏实现，加入了现代化功能和优化的用户体验。使用 HTML5、CSS3 和 JavaScript 构建，提供多语言支持、可定制主题、AI 对手，以及计时器、记分和撤销功能等游戏增强功能。专为所有年龄段的玩家设计，它提供了一种有趣且易于访问的方式，让您在任何设备上享受井字游戏。

游戏托管在 GitHub Pages 上，无需安装即可在线玩，但也可以本地运行。作为一个开源项目，我们欢迎贡献，以改进功能、修复错误或提升可访问性。

> **注意**：此项目处于活跃维护状态。某些功能（如 AI 策略或动画性能）可能存在限制。欢迎您的反馈！

## 特点

- **经典井字游戏玩法**：3x3 网格，使用 X 和 O 符号，目标是横、纵或斜排成三。
- **游戏模式**：
  - 人人对战（同一设备上的本地对战）。
  - 人机对战（基础的随机移动 AI 对手）。
- **多语言支持**：支持 8 种语言：
  - 英语、中文 (中文)、日语 (日本語)、韩语 (한국어)、俄语 (Русский)、西班牙语 (Español)、法语 (Français)、德语 (Deutsch)。
- **可定制的界面**：
  - **配色方案**：可选择默认、黑暗、明亮或多彩主题。
  - **字体**：可选择 Poppins、Roboto 或 Open Sans。
- **游戏功能**：
  - **计时器**：跟踪游戏时长，支持开始、停止和重置。
  - **记分功能**：显示玩家 X、玩家 O 和平局的胜利次数。
  - **撤销移动**：在游戏进行中撤销上一步操作。
  - **玩家名称**：为玩家 X 和玩家 O 自定义名称。
  - **胜利庆祝**：胜利时触发彩纸动画。
- **设置**：
  - 通过设置窗口更改语言、配色方案或字体。
  - 将偏好保存到本地存储，以跨会话保持设置。
- **响应式设计**：针对桌面、平板和移动设备优化。
- **视觉效果**：
  - 带有加载效果和气泡背景的动画登陆页面。
  - 高亮显示获胜单元格以清晰指示胜利。
- **可访问性**：包含用于翻译的 `data-i18n` 属性和基本的键盘支持。
- **无广告**：提供无干扰的游戏体验。

## 系统要求

要运行终极井字游戏，请确保您具备以下条件：

- **网页浏览器**：现代浏览器（例如 Chrome、Firefox、Edge、Safari），并启用 JavaScript。
- **操作系统**：任意（Windows、macOS、Linux、iOS、Android），需有兼容的浏览器。
- **磁盘空间**：最少（约 5 MB 用于应用程序文件，包括资源文件）。
- **网络连接**：需要用于初始资源加载（例如 Google Fonts），除非本地托管。
- **依赖项**：无（所有资源通过 CDN 或本地文件加载）。

## 安装

按照以下步骤在本地设置终极井字游戏：

1. **克隆仓库**：
   ```bash
   git clone https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe.git
   ```

2. **进入项目目录**：
   ```bash
   cd Ultimate-Tic-Tac-Toe
   ```

3. **打开应用程序**：
   - 双击 `index.html` 在默认浏览器中打开。
   - 或者，使用本地服务器提供文件（推荐，以确保资源加载正常）：
     ```bash
     python -m http.server 8000
     ```
     然后在浏览器中访问 `http://localhost:8000`。

4. **验证功能**：
   - 确保登陆页面加载时显示标志、标题和“开始游戏”按钮。
   - 点击“开始游戏”进入游戏界面，并测试一步操作（例如，在单元格中放置 X）。
   - 检查设置窗口、语言选择器和游戏控件（例如计时器、撤销）是否正常工作。

> **注意**：确保通过 CDN 加载的资源（例如 Google Fonts）可以访问。如需离线使用，请考虑下载字体并本地托管。

## 开始使用

要开始玩终极井字游戏：

1. **访问游戏**：
   - 在线玩：[voxdroid.github.io/Ultimate-Tic-Tac-Toe](https://voxdroid.github.io/Ultimate-Tic-Tac-Toe/)。
   - 或者按 [安装](#安装) 中的描述本地打开 `index.html`。

2. **浏览登陆页面**：
   - 从下拉菜单中选择语言（默认中文）。
   - 点击“开始游戏”以加载动画过渡到游戏界面。

3. **探索界面**：
   - **游戏棋盘**：一个 3x3 网格，用于放置 X 或 O 符号。
   - **游戏信息面板**：包括玩家名称输入、计时器、分数显示和控件（撤销、新游戏、AI 移动、重置分数）。
   - **设置**：通过设置按钮访问，可调整语言、配色方案或字体。
   - **状态栏**：显示当前玩家的回合或游戏结果。

4. **开始游戏**：
   - 点击“开始游戏”初始化棋盘。
   - 点击单元格放置您的符号（X 先开始）。
   - 使用“AI 移动”按钮让 AI 作为对手进行游戏。

5. **自定义设置**：
   - 打开设置窗口更改配色方案、字体或语言。
   - 在输入字段中输入玩家名称。
   - 设置会自动保存到本地存储。

## 使用方法

### 玩游戏
- **人对人**：
  - 玩家轮流在空白单元格中放置 X 或 O（X 先开始）。
  - 点击单元格进行操作。
  - 目标是横、纵或斜排成三个相同符号。
- **人对 AI**：
  - 作为 X 或 O 玩，点击“AI 移动”按钮让 AI 随机移动。
  - AI 会随机选择一个空白单元格。
- **控件**：
  - **新游戏**：重置棋盘和计时器。
  - **撤销**：撤销上一步操作（如果游戏正在进行）。
  - **AI 移动**：触发 AI 为对手进行移动。
  - **启动/停止/重置计时器**：管理游戏计时器。
  - **重置分数**：清除胜利/平局计数器。

### 自定义
- **语言**：通过登陆页面或游戏界面的下拉菜单选择 8 种语言。
- **配色方案**：在设置窗口中选择默认、黑暗、明亮或多彩。
- **字体**：在 Poppins、Roboto 或 Open Sans 之间切换。
- **玩家名称**：在输入字段中为玩家 X 和玩家 O 输入自定义名称。

### 游戏功能
- **计时器**：以 MM:SS 格式显示已用时间，支持启动、停止或重置。
- **记分功能**：记录 X、O 和平局的胜利次数，显示在游戏信息面板中。
- **撤销移动**：允许撤销上一步操作，保留游戏状态。
- **胜利庆祝**：玩家获胜时触发彩纸动画。
- **通知**：以所选语言显示回合指示、胜利消息或平局/游戏结束警报。

## 演示

<div align="center">
  <img src="https://raw.githubusercontent.com/VoxDroid/Ultimate-Tic-Tac-Toe/refs/heads/main/assets/img/preview.png" alt="终极井字游戏玩法" width="800">
</div>

在 [voxdroid.github.io/Ultimate-Tic-Tac-Toe](https://voxdroid.github.io/Ultimate-Tic-Tac-Toe/) 上体验终极井字游戏。

## 贡献

我们欢迎对终极井字游戏的贡献！参与方式：

- 查看 [贡献指南](../CONTRIBUTING.md) 了解提交问题、功能请求或拉取请求的详情。
- 分叉仓库，进行更改并提交拉取请求。
- 遵守 [行为准则](../CODE_OF_CONDUCT.md) 以确保社区的尊重。

贡献示例：
- 使用更智能的算法（如 minimax）增强 AI。
- 添加新的配色方案或字体。
- 提升可访问性（例如，ARIA 属性、键盘导航）。
- 实现终极井字游戏规则（9x9 网格与子棋盘）。

## 安全性

终极井字游戏将安全性放在首位。如果您发现漏洞：

- 按照 [安全策略](../SECURITY.md) 中的说明私下报告。
- 在问题解决之前避免公开披露。

## 行为准则

所有贡献者和用户需遵守 [行为准则](../CODE_OF_CONDUCT.md)，以维持一个友好和包容的环境。

## 支持

需要终极井字游戏的帮助？访问 [支持页面](../SUPPORT.md) 获取资源，包括：

- 提交错误报告或功能请求。
- 社区讨论和联系信息。
- 常见问题 FAQ（例如，AI 行为、计时器问题）。

## 许可证

终极井字游戏使用 [MIT 许可证](../LICENSE)。详情请查看 [LICENSE](../LICENSE) 文件。

## 致谢

- **Google Fonts**：提供 Poppins、Roboto 和 Open Sans 字体。
- **VoxDroid**：创建并维护此项目。
- **贡献者**：感谢所有报告问题、建议功能或贡献代码的人。
- **井字游戏社区**：通过资源和想法启发此项目。

---

<div align="center">
  <p><strong>由 <a href="https://github.com/VoxDroid">VoxDroid</a> 开发</strong></p>
  <p>喜欢终极井字游戏？在 <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe">GitHub</a> 上给项目点个星吧！</p>
</div>
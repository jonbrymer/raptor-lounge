# 究極の三目並べ

[English](README.md) | [中文](README_zh.md) | [한국어](README_kr.md) | [Русский](README_ru.md) | [Español](README_es.md) | [Français](README_fr.md) | [Deutsch](README_de.md)

🌐 モダンで多言語対応、機能豊富なウェブベースの三目並べゲーム 🌐

<div align="center">
  <img width="128px" src="https://raw.githubusercontent.com/VoxDroid/Ultimate-Tic-Tac-Toe/refs/heads/main/assets/logo/UT.png" alt="究極の三目並べロゴ">
</div>

<div align="center">
  <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/releases">
    <img alt="バージョン" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000">
  </a>
  <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/blob/main/LICENSE">
    <img alt="ライセンス: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg">
  </a>
  <a href="https://html.spec.whatwg.org/">
    <img alt="構築技術: HTML5" src="https://img.shields.io/badge/Built%20with-HTML5-E34F26?logo=html5&logoColor=white">
  </a>
  <a href="https://www.w3.org/Style/CSS/Overview.en.html">
    <img alt="スタイリング: CSS3" src="https://img.shields.io/badge/Styled%20with-CSS3-1572B6?logo=css3&logoColor=white">
  </a>
  <a href="https://javascript.info/">
    <img alt="駆動技術: JavaScript" src="https://img.shields.io/badge/Powered%20by-JavaScript-F7DF1E?logo=javascript&logoColor=black">
  </a>
</div>

<div align="center">
  <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/stargazers">
    <img alt="GitHubスター" src="https://img.shields.io/github/stars/VoxDroid/Ultimate-Tic-Tac-Toe?color=gold">
  </a>
  <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/network/members">
    <img alt="GitHubフォーク" src="https://img.shields.io/github/forks/VoxDroid/Ultimate-Tic-Tac-Toe?color=silver">
  </a>
  <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/issues">
    <img alt="GitHubイシュー" src="https://img.shields.io/github/issues/VoxDroid/Ultimate-Tic-Tac-Toe?color=orange">
  </a>
  <a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe/commits/main">
    <img alt="GitHubコミット" src="https://img.shields.io/github/commit-activity/m/VoxDroid/Ultimate-Tic-Tac-Toe">
  </a>
</div>

<div align="center">
  <a href="https://voxdroid.github.io/Ultimate-Tic-Tac-Toe/" target="_blank">
    <img src="https://img.shields.io/badge/今すぐプレイ-究極の三目並べ-brightgreen?style=for-the-badge" alt="究極の三目並べをプレイ">
  </a>
</div>

## 目次

- [イントロダクション](#イントロダクション)
- [機能](#機能)
- [システム要件](#システム要件)
- [インストール](#インストール)
- [はじめに](#はじめに)
- [使い方](#使い方)
- [デモ](#デモ)
- [貢献](#貢献)
- [セキュリティ](#セキュリティ)
- [行動規範](#行動規範)
- [サポート](#サポート)
- [ライセンス](#ライセンス)
- [謝辞](#謝辞)

## イントロダクション

**究極の三目並べ**は、クラシックな三目並べゲームのオープンソース、ウェブベースの実装であり、モダンな機能と洗練されたユーザー体験が加えられています。HTML5、CSS3、JavaScriptで構築されており、多言語対応、カスタマイズ可能なテーマ、AI対戦相手、タイマー、スコア追跡、元に戻す機能などのゲームプレイの強化を提供します。あらゆる年齢のプレイヤー向けに設計されており、どのデバイスでも楽しくアクセス可能な三目並べを楽しむ方法を提供します。

GitHub Pagesでホストされており、インストールせずにオンラインで利用可能ですが、ローカルでも実行できます。オープンソースプロジェクトとして、機能の改善、バグ修正、アクセシビリティの向上のための貢献を歓迎します。

> **注**：このプロジェクトは積極的にメンテナンスされています。AIの戦略やアニメーションのパフォーマンスなど、一部の機能には制限がある場合があります。フィードバックをお待ちしています！

## 機能

- **クラシックな三目並べゲームプレイ**：3x3のグリッドにXとOのシンボルを配置し、横、縦、または斜めに3つ揃えることを目指します。
- **プレイモード**：
  - 人間対人間（同一デバイスでのローカルプレイ）。
  - 人間対AI（ランダムな動きをする基本的なAI対戦相手）。
- **多言語対応**：8つの言語で利用可能：
  - 英語、中国語 (中文)、日本語 (日本語)、韓国語 (한국어)、ロシア語 (Русский)、スペイン語 (Español)、フランス語 (Français)、ドイツ語 (Deutsch)。
- **カスタマイズ可能なUI**：
  - **カラースキーム**：デフォルト、ダーク、ライト、カラフルから選択。
  - **フォント**：Poppins、Roboto、Open Sansから選択。
- **ゲーム機能**：
  - **タイマー**：ゲーム時間を追跡し、開始、停止、リセットが可能。
  - **スコア追跡**：プレイヤーX、プレイヤーO、引き分けの勝利数を表示。
  - **元に戻す**：アクティブなゲーム中に最後の動きを元に戻す。
  - **プレイヤー名**：プレイヤーXとプレイヤーOの名前をカスタマイズ。
  - **勝利の祝賀**：勝利時に紙吹雪アニメーション。
- **設定**：
  - 設定モーダルから言語、カラースキーム、フォントを変更。
  - ローカルストレージに設定を保存し、セッション間で保持。
- **レスポンシブデザイン**：デスクトップ、タブレット、モバイルデバイスに最適化。
- **視覚効果**：
  - ローディング効果とバブル背景を持つアニメーション付きランディングページ。
  - 勝利したセルを強調表示して勝利を明確に示す。
- **アクセシビリティ**：翻訳用の`data-i18n`属性と基本的なキーボードサポートを含む。
- **広告なし**：邪魔されないゲーム体験。

## システム要件

究極の三目並べを実行するには、次のものが必要です：

- **ウェブブラウザ**：JavaScriptが有効なモダンブラウザ（例：Chrome、Firefox、Edge、Safari）。
- **オペレーティングシステム**：任意（Windows、macOS、Linux、iOS、Android）で互換性のあるブラウザ。
- **ディスク容量**：最小限（アセットを含むアプリケーションファイルで約5MB）。
- **インターネット接続**：初期アセット読み込み（例：Google Fonts）に必要、ローカルホストの場合は不要。
- **依存関係**：なし（すべてのアセットはCDNまたはローカルファイル経由で読み込まれます）。

## インストール

究極の三目並べをローカルにセットアップするには、次の手順に従ってください：

1. **リポジトリをクローン**：
   ```bash
   git clone https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe.git
   ```

2. **プロジェクトディレクトリに移動**：
   ```bash
   cd Ultimate-Tic-Tac-Toe
   ```

3. **アプリケーションを開く**：
   - `index.html`をダブルクリックして、デフォルトのウェブブラウザで開きます。
   - または、ローカルサーバーを使用してファイルをホストすることをお勧めします（アセットの適切な読み込みのため）：
     ```bash
     python -m http.server 8000
     ```
     その後、ブラウザで`http://localhost:8000`にアクセスします。

4. **動作確認**：
   - ランディングページがロゴ、タイトル、「ゲーム開始」ボタンと共に読み込まれることを確認。
   - 「ゲーム開始」をクリックしてゲームインターフェースに移行し、動きをテスト（例：セルにXを配置）。
   - 設定モーダル、言語セレクター、ゲームコントロール（例：タイマー、元に戻す）が動作することを確認。

> **注**：CDN経由で読み込まれるアセット（例：Google Fonts）がアクセス可能であることを確認してください。オフライン使用の場合は、フォントをダウンロードしてローカルでホストすることを検討してください。

## はじめに

究極の三目並べを始めるには：

1. **ゲームにアクセス**：
   - オンラインでプレイ：[voxdroid.github.io/Ultimate-Tic-Tac-Toe](https://voxdroid.github.io/Ultimate-Tic-Tac-Toe/)。
   - または、[インストール](#インストール)で説明したように`index.html`をローカルで開く。

2. **ランディングページを操作**：
   - ドロップダウンから言語を選択（デフォルトは日本語）。
   - 「ゲーム開始」をクリックして、ローディングアニメーションと共にゲームインターフェースに移行。

3. **インターフェースを探索**：
   - **ゲームボード**：XまたはOのシンボルを配置するための3x3グリッド。
   - **ゲーム情報パネル**：プレイヤー名入力、タイマー、スコア表示、コントロール（元に戻す、新規ゲーム、AIの動き、スコアリセット）を含む。
   - **設定**：設定ボタンからアクセスして、言語、カラースキーム、フォントを調整。
   - **ステータスバー**：現在のプレイヤーのターンまたはゲーム結果を表示。

4. **ゲームを開始**：
   - 「ゲーム開始」をクリックしてボードを初期化。
   - セルをクリックしてシンボルを配置（Xが最初）。
   - 「AIの動き」ボタンを使用してAIに対戦相手としてプレイさせる。

5. **設定をカスタマイズ**：
   - 設定モーダルを開いて、カラースキーム、フォント、言語を変更。
   - プレイヤー名を入力フィールドに入力。
   - 設定はローカルストレージに自動的に保存。

## 使い方

### ゲームをプレイ
- **人間対人間**：
  - プレイヤーは空のセルにXまたはOを交互に配置（Xが最初）。
  - セルをクリックして動きを決定。
  - 横、縦、または斜めに3つのシンボルを揃えることを目指す。
- **人間対AI**：
  - XまたはOとしてプレイし、「AIの動き」ボタンをクリックしてAIにランダムな動きをさせる。
  - AIはランダムに空のセルを選択。
- **コントロール**：
  - **新規ゲーム**：ボードとタイマーをリセット。
  - **元に戻す**：最後の動きを元に戻す（ゲームがアクティブな場合）。
  - **AIの動き**：AIが対戦相手として動く。
  - **タイマーの開始/停止/リセット**：ゲームタイマーを管理。
  - **スコアリセット**：勝利/引き分けのカウンターをクリア。

### カスタマイズ
- **言語**：ランディングページまたはゲームインターフェースのドロップダウンから8つの言語を選択。
- **カラースキーム**：設定モーダルでデフォルト、ダーク、ライト、カラフルを選択。
- **フォント**：Poppins、Roboto、Open Sansから切り替え。
- **プレイヤー名**：プレイヤーXとプレイヤーOのカスタム名を入力。

### ゲーム機能
- **タイマー**：MM:SS形式で経過時間を表示し、開始、停止、リセットが可能。
- **スコア追跡**：X、O、引き分けの勝利数をゲーム情報パネルに表示。
- **元に戻す**：最後の動きを元に戻し、ゲーム状態を保持。
- **勝利の祝賀**：プレイヤーが勝利すると紙吹雪アニメーションが発動。
- **通知**：選択した言語でターンインジケーター、勝利メッセージ、引き分け/ゲーム終了アラートを表示。

## デモ

<div align="center">
  <img src="https://raw.githubusercontent.com/VoxDroid/Ultimate-Tic-Tac-Toe/refs/heads/main/assets/img/preview.png" alt="究極の三目並べゲームプレイ" width="800">
</div>

究極の三目並べをライブで試す：[voxdroid.github.io/Ultimate-Tic-Tac-Toe](https://voxdroid.github.io/Ultimate-Tic-Tac-Toe/)。

## 貢献

究極の三目並べへの貢献を歓迎します！参加するには：

- [貢献ガイドライン](../CONTRIBUTING.md)を確認して、イシューの提出、機能リクエスト、プルリクエストの詳細を確認。
- リポジトリをフォークして変更を加え、プルリクエストを提出。
- [行動規範](../CODE_OF_CONDUCT.md)に従い、敬意を持ったコミュニティを確保。

貢献の例：
- AIをより賢いアルゴリズム（例：ミニマックス）で強化。
- 新しいカラースキームやフォントを追加。
- アクセシビリティの向上（例：ARIA属性、キーボードナビゲーション）。
- 究極の三目並べルール（9x9グリッドとサブボード）の実装。

## セキュリティ

究極の三目並べではセキュリティが優先事項です。脆弱性を発見した場合：

- [セキュリティポリシー](../SECURITY.md)に記載されているように、プライベートで報告。
- 問題が解決するまで公開しない。

## 行動規範

すべての貢献者とユーザーは、歓迎的で包括的な環境を維持するために[行動規範](../CODE_OF_CONDUCT.md)に従うことが期待されます。

## サポート

究極の三目並べに関するヘルプが必要ですか？[サポートページ](../SUPPORT.md)で以下のリソースをご覧ください：

- バグ報告や機能リクエストの提出。
- コミュニティディスカッションと連絡先情報。
- よくある問題（例：AIの動作、タイマー問題）のFAQ。

## ライセンス

究極の三目並べは[MITライセンス](../LICENSE)の下でライセンスされています。詳細は[LICENSE](../LICENSE)ファイルをご覧ください。

## 謝辞

- **Google Fonts**：Poppins、Roboto、Open Sansフォントを提供。
- **VoxDroid**：プロジェクトの作成とメンテナンス。
- **貢献者**：問題を報告し、機能を提案し、コードを提供してくれたすべての人に感謝。
- **三目並べコミュニティ**：リソースとアイデアでこのプロジェクトにインスピレーションを与えてくれた。

---

<div align="center">
  <p><strong><a href="https://github.com/VoxDroid">VoxDroid</a>によって開発</strong></p>
  <p>究極の三目並べを楽しんでいますか？<a href="https://github.com/VoxDroid/Ultimate-Tic-Tac-Toe">GitHub</a>でプロジェクトにスターを付けてください！</p>
</div>
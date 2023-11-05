# Astro Tailwind Starter

AstroとTailwind CSSをつかったWebサイトを開発するためのテンプレートです。

## 使用技術

### Node version

- node v18.7.1
- pnpm v8.10.2

### フロントエンド

- [Astro](https://astro.build/) v3.4.3
- [Tailwind CSS](https://tailwindcss.com/) v3.0.24
- [TypeScript](https://www.typescriptlang.org/) v5.2.2

### Linter / Formatter

リンターに[ESLint](https://eslint.org/)、フォーマッターに[Prettier](https://prettier.io/)を使用しており、[Husky](https://typicode.github.io/husky/)でコミット・プッシュ時に実行されるようになっています。
ESLintとPrettierの設定はプロジェクトに応じて都度変更してください。

## 開発の仕方

### パッケージのインストール

```shell
pnpm install
```

### ローカル環境の立ち上げ

```shell
pnpm dev
```

[http://localhost:4321](http://localhost:4321)でたちあがります。

## コマンド

| Command        | Action                                   |
| :------------- | :--------------------------------------- |
| `pnpm install` | パッケージをインストール                 |
| `pnpm dev`     | `localhost:4321`で開発サーバーを起動する |
| `pnpm build`   | デプロイ用に`./dist/`にビルドする        |
| `pnpm preview` | ローカルでビルドをプレビューする         |
| `pnpm format`  | Prettierを実行する                       |
| `pnpm lint`    | ESLintを実行する                         |

# Project Name

＜開発環境＞ Next.js + TypeScript + Material UI

## ディレクトリ構成

| ディレクトリ 1 | ディレクトリ 2 | ディレクトリ 3 | 内容                                                                |
| :------------- | :------------- | :------------- | :------------------------------------------------------------------ |
| /public/       |                |                | 静的ファイル（img, icon など）                                      |
| /src/          | components/    | foundations/   | パーツ（Button・Icon 等）コンポーネント（\*.tsx, \*.module.scss）   |
|                |                | layouts/       | レイアウトコンポーネント（\*.tsx, \*.module.scss）                  |
|                |                | modules/       | 機能（API・state 等）があるコンポーネント（\*.tsx, \*.module.scss） |
|                |                | templates/     | ページのレイアウト（\*.tsx）                                        |
|                | hooks/         |                | カスタムフック（\*.tsx）                                            |
|                | pages/         |                | Next.js のページ（\*.tsx）                                          |
|                | providers/     |                | Context などのグローバルステート（\*.tsx）                          |
|                | stores/        |                | Redux のステート管理（\*.ts）                                       |
|                | styles/        |                | グローバルスタイル（\*.scss）                                       |
|                | types/         |                | カスタムタイプ宣言（\*.ts）                                         |
|                | utilities/     |                | データフェッチ関数など（\*.ts）                                     |

## ルーティング

| カテゴリ | パス     | 対応画面     |
| :------- | :------- | :----------- |
|          | `/login` | ログイン画面 |
|          | `/home`  | ホーム画面   |

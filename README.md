# react-sns-front-output
アウトプットとして、SNSアプリケーションを作成。

フロントはreact

サーバーサイドはNode.js(express)

DBはMongoDB

FaceBook風。


urlはこちら
https://github.com/massu-159/react-sns-front-output


## 目次
1. 環境構築
2. アプリケーションの仕様
3. 環境変数

## 1. 環境構築

### 1-1. ライブラリ インストール

```
npm install

または

yarn
```

### 1-2. アプリケーション実行

```
npm run dev

または

yarn dev
```

## 2. アプリケーションの仕様

### 2-1. 仕様
- sns記事投稿
  - sns記事一覧表示
  - sns記事タイムライン表示
  - sns記事新規投稿処理
  - sns記事いいね処理
- フォロー
  - フォロー(アンフォロー)
- 認証
  - 会員登録
  - ログイン(ログアウト)


### 2-2. 構成技術
- front
  - "axios": "^1.1.2"
  - "react": "^18.2.0"
  - "react-dom": "^18.2.0"
  - "react-router-dom": "^6.4.2"
  - "timeago.js": "^4.0.2"
- back
  - "dotenv": "^16.0.3"
  - "express": "^4.18.1"
  - "helmet": "^6.0.0"
  - "mongoose": "^6.6.4"
  - "multer": "^1.4.5-lts.1"
  - "nodemon": "^2.0.20"

## 3. 環境変数

[react-sns-front-output](https://github.com/massu-159/react-sns-front-output)側で

.envを作成し、環境変数を設定。
```
REACT_APP_PUBLIC_FOLDER=xxxxxxxxxxx
```

[react-sns-back-output](https://github.com/massu-159/react-sns-back-output)側で

.envを作成し、環境変数を設定。
```
MONGOURL=xxxxxxxxxx
```

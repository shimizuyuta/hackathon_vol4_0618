## サービス名
<h4>Cilp-Roach from GBS</h4>
     
## 目的 
コードや文章などをコピペ作業を効率化する。

## 機能一覧

* クリップボード機能
* 個別のデータのコピー・削除
* 全てのデータをまとめてコピー・削除
* コピーしたデータの統合
* テキストファイルに出力

## 使用技術
* React
* Material-UI

## こだわり
* ページ間のシームレスなデータ共有
* シンプルで直感的なUI
* ページをまたいでコピー履歴を蓄積できる
* 簡単にデータ出力

## 課題
* 環境によって起動時に不具合が生じる場合がある
* chromeのストレージ管理の理解が不十分
* 拡張機能を使う際に、コピー箇所のTabをリロードする必要がある

## おわりに
チームゴキブリバスターズは即席チームではありましたが、メンバーそれぞれが自分の持ち味を発揮してハッカソンに取り組むことができました。


![image](https://user-images.githubusercontent.com/58338829/174626543-71b56378-9145-4ca1-b812-04194150ce88.png)



## チーム向け

1.クローン時
npm install 

↑ install時にwarnigが出るが特に問題ない。「○○○○　done」的な感じで終わっていたらOK<br/> 問題なくクローン出来たかどうか確かめたいときはnpm run startでlocalhostで立ち上がるかを確認する。　

(追記 by sei) `npm audit fix --force`を実行するように出てきますが､これを実行すると動かなくなることがあるので実行しないほうがいいかもです｡

2.起動時
npm run build 

3.拡張機能の読み込み
![image](https://user-images.githubusercontent.com/58338829/174347506-6efae66f-f1e8-43cc-8a48-30f77b638471.png)

<p>読み込みをbuildにしないとエラーが発生する！！</P>

![image](https://user-images.githubusercontent.com/58338829/174347655-e23611fa-b6db-4fa9-92d8-76340589a030.png)

４．立ち上げ＆閉じる
・Ctrl＋Shift＋H（モーダル立ち上げ）
![image](https://user-images.githubusercontent.com/58338829/174348245-3ea71a0a-bed1-43c7-a214-a3c013b74e91.png)




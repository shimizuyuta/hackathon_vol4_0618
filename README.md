## 環境構築について

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

## 開発体制について

1.自分の担当する機能のブランチを確認
![image](https://user-images.githubusercontent.com/58338829/174416566-86af26d9-1d9d-40d5-b05b-0cad3c8736cb.png)

2.vscodeの左下（現在のブランチのところ）をクリック

3．ブランチの一覧が確認でき、ここから
![image](https://user-images.githubusercontent.com/58338829/174416739-771772e8-fd27-47af-b90b-214b6dbe2d08.png)

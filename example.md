## localStrage
* keyとvalueでデータを格納できる。大容量。しかし問題はドキュメント（プロトコル・ホスト名・ポート）によってスコープが異なる。下記のURLは全てのドキュメントの出身が異なる。
EX）http://www.example.com  https://www.example.com http://www.example2.com  

* ⇒スコープ問題解決するためにbackgroud.jsでlocalStorage周りを扱う。

## background.js
* webサイト上（content_scripts上）で行いたいlocalStorageへの命令を、すべてこのbackground.jsで行う
* イベントリスナを登録し、それに付随する処理を書く

## content.js
* 拡張機能から表示中のウェブページに対して操作を行いたい場合。ウェブページのDOMの編集を行える.
* content.jsとbackground.jsのやり取りはchrome.runtime APIを使う

参考資料

簡単なアプリ：https://aburaku.hatenablog.com/entry/2022/05/21/133506
　　　　　　：https://qiita.com/sakaimo/items/5e41d6b2ad8d7ee04b12#contentjs

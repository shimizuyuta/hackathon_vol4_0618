/*global chrome*/

//  特定のWebサイトに対して追加機能を提供するための設定。
// 任意のjsやcssファイルを追加、実行してページをカスタムしたり、
// ページ上の要素を取得したりすることができる。
// 外部のWebページにDOM書き換え、データ取得などの干渉できる

document.addEventListener('selectionchange', function (event) {
    let selectionText = window.getSelection().toString();
    if (selectionText.length){
        try{
            let payload = {message: selectionText }
            chrome.runtime.sendMessage(payload)
        }
        catch(error){
            console.log(error,'エラー発生');
        }
    }
})
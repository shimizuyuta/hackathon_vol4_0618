/*global chrome*/

//  特定のWebサイトに対して追加機能を提供するための設定。
// 任意のjsやcssファイルを追加、実行してページをカスタムしたり、
// ページ上の要素を取得したりすることができる。
// 外部のWebページにDOM書き換え、データ取得などの干渉できる

document.addEventListener('selectionchange', function (event) {
    console.log('sssss')
    let selectionText = window.getSelection().toString();
    console.log(`selection changed:${selectionText}`);
    if (selectionText.length){
        try{
            let payload = {message: selectionText }
            chrome.runtime.sendMessage(payload,(data)=>{
                console.log(data)
            })
        }
        catch(error){
            console.log(error);
        }
    }
})
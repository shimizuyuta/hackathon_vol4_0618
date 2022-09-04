/*global chrome*/

//update / install されたときの処理

//localstrageイベントを待つ・に関する処理

//文字列をセレクトしている時に発火する
document.addEventListener('selectionchange', function () {
  let selectionText = window.getSelection().toString()
  console.log(selectionText, '検出された文字')

  if (selectionText) {
    try {
      //リロードするとidが入る（これ修正する必要あり）
    //   console.log(chrome.runtime)
      let extensionId = chrome.runtime.id
      let payload = { message: selectionText }
      console.log(extensionId, 'id')
      //content.jsからdataにコールバック
      chrome.runtime.sendMessage(extensionId, payload, (data) => {
        console.log(data, 'callback後に買える値')
        return data
      })
    } catch (error) {
      console.log(error.message, 'エラー発生')
    }
  }
})

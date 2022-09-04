/*global chrome*/
// リスナ登録で特定イベント(新しいページに移動・ブックマークを削除・タブ閉じ)やJavascriptからの呼び出しで発火する機能を作成、登録するイメージ
// chrome.runtime.sendMessageを通じてcontent_scriptsとデータ連携することが可能
//メッセージを送る

//タブ切り替
export let history = []

let selectionText

//sendMessageをcontent.jsから受け取る・テキストがセレクトしてる時に呼ばれる
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // console.log('sender', sender)
  // console.log(request, 'req')
  selectionText = request.message
  //選択したテキストを送る
  console.log('選択したテキストを送る')
  sendResponse(selectionText)
  return true
})

const copyText = () => {
  console.log('コピー検知: ', selectionText)
  if(selectionText !== undefined && selectionText !==null){
    history.push(selectionText)
    console.log(history,'history')
    chrome.storage.local.set({ 'key': history })
  
  }
}

const showList = (text) => {
  console.log('<コピー履歴>')
  history.forEach((element) => console.log(element))
}
const clearList = () => {
  chrome.storage.local.get(['key'],(result)=>{
    console.log('resultローカルストレージ',result)
  })
  chrome.storage.local.clear()
  // chrome.storage.local.set({ 'key': [] }, function () {})
  console.log('clear history!!')
}

//設定したショートカットが検知された時に発火
chrome.commands.onCommand.addListener((command) => {
  console.log('-------------------------')
  switch (command) {
    case 'copyText':
      copyText()
      break
    case 'clearList':
      clearList()
      break
    case 'showList':
      showList(selectionText)
      break
    default:
      break
  }
})

const deleteContent = (index) => {
  history.splice(index, 1)
  chrome.storage.local.set({ 'key': history }, function () {})
}
let historyCounter = 0

const user = {
  username: 'demo-user',
}

//install・update時に発火する処理
chrome.runtime.onInstalled.addListener(function (details) {
  console.log(details.reason)
  if (details.reason == 'install') {
    console.log('install時の処理を書く')
  } else if (details.reason === 'update') {
    console.log('update時の処理を書く')
  }
})

//update時
// let activeTabId, lastUrl, lastTitle

// function getTabInfo(tabId) {
//   chrome.tabs.get(tabId, function (tab) {
//     if (lastUrl != tab.url || lastTitle != tab.title)
//       console.log((lastUrl = tab.url), (lastTitle = tab.title))
//   })
// }
// chrome.tabs.onActivated.addListener(function (activeInfo) {
//   console.log('fafafa change tab')
//   console.log(activeInfo.tabId)
// })

// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//   console.log('change tab')
//   if (activeTabId == tabId) {
//     getTabInfo(tabId)
//   }
// })

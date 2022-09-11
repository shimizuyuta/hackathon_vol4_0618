/*global chrome*/
// リスナ登録で特定イベントやJavascriptからの呼び出しで発火する機能を作成、登録するイメージ
// chrome.runtime.sendMessageを通じてcontent_scriptsとデータ連携することが可能

//import copyToClipboard from '../src/components/Clipboard/Clipboard'

let selectionText
export let history = []
let historyCounter = 0

const user = {
  username: 'demo-user',
}

const copyText = (text) => {
  history.push(text)
  console.log('copy: ' + text)
  chrome.storage.local.set({ key: history }, function () {})
}

const clearList = () => {
  chrome.storage.local.clear()
  history = []
  chrome.storage.local.set({ key: history }, function () {})
  console.log('clear history!!')
}

const showList = (text) => {
  console.log('<コピー履歴>')
  history.forEach((element) => console.log(element))
}

const deleteContent = (index) => {
  //console.log(index, "deleteContent");
  //console.log(history);
  //if(history.length > index){
  history.splice(index, 1)
  //console.log(history);
  chrome.storage.local.set({ key: history }, function () {})
  //}
}

const getURL = () => {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    console.log("getURL: "+url);
  });
}

chrome.commands.onCommand.addListener((command) => {
  console.log('-------------------------')
  switch (command) {
    case 'copyText':
      getURL();
      copyText(selectionText)
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

chrome.runtime.onMessage.addListener(function onMessageFunc(
  message,
  sender,
  sendResponse
) {
  if (message.message.indexOf('deletedeletedelete') != -1) {
    console.log('deletedeletedelete')
    let deleteIndex = Number(message.message.slice(0, 1))
    console.log(deleteIndex)
    deleteContent(deleteIndex)
  }
  if (message.message === 'deleteStorage is called!') {
    console.log('deleteStorage is called!!!!')
    clearList()
  }
  if (message === 'get-user-data') {
    sendResponse(user)
  }
  selectionText = message.message
  return true
})

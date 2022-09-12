/*global chrome*/
// import copyToClipboard from '../src/components/Clipboard/Clipboard'

let selectionText
export let history = []
let oldText = ""

const user = {
  username: 'demo-user',
}

const copyText = (text) => {
  if(text === oldText || !text ) {
    return
  }
  history.push(text)
  chrome.storage.local.set({ key: history }, function () {})
  oldText = text
}

const clearList = () => {
  chrome.storage.local.clear()
  history = []
  chrome.storage.local.set({ key: history })
}

const deleteContent = (index) => {
  history.splice(index, 1)
  chrome.storage.local.set({ key: history })
}

const getURL = () => {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
  });
}

chrome.commands.onCommand.addListener((command) => {
  switch (command) {
    case 'copyText':
      getURL();
      copyText(selectionText)
      break
    case 'clearList':
      clearList()
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
  if (message.message.indexOf('deleteMessage') != -1) {
    let deleteIndex = Number(message.message.slice(0, 1))
    deleteContent(deleteIndex)
  }else if (message.message === 'deleteStorage is called!') {
    clearList()
  }else {
    //sendResponse(user);
    selectionText = message.message;
  }

  return true
})
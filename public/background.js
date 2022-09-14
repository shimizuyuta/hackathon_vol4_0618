/*global chrome*/

// let selectionText
let history = []
let oldText = ''

//storageの扱う関数
const setLocalStorage = (setData) => {
  chrome.storage.local.set({ key: setData })
}

const copyText = (text) => {
  if (text === oldText || !text) {
    return
  }
  history.push(text)
  setLocalStorage(history)
  oldText = text
}

const clearList = () => {
  chrome.storage.local.clear()
  history = []
  setLocalStorage(history)
}

const deleteContent = (index) => {
  history.splice(index, 1)
  setLocalStorage(history)
}

chrome.commands.onCommand.addListener((command) => {
  switch (command) {
    // case 'copyText':
    //   copyText(selectionText)
    //   break
    case 'clearList':
      clearList()
      break
    default:
      break
  }
})

chrome.runtime.onMessage.addListener(function onMessageFunc(message) {
  switch (message.type) {
    case 'copy':
      // selectionText = message.message
      copyText(message.message)
      break
    case 'deleteStorage':
      clearList()
      break
    case 'deleteContent':
      deleteContent(message.message)
      break
    case 'copyURL':
      console.log('URL: ' + message.message)
      copyText(message.message)
      break
    default:
      return true
  }
})

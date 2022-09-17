/*global chrome*/
let history = []
let oldText = ''

//storageの扱う関数
const setLocalStorage = (setData) => {
  chrome.storage.local.set({ key: setData })
}

const copyText = (text) => {
  if (text === oldText || !text) return
  history.push(text)
  setLocalStorage(history)
  oldText = text
}

const deleteContent = (index) => {
  history.splice(index, 1)
  setLocalStorage(history)
}

const deleteAllContents = () => {
  chrome.storage.local.clear()
  history = []
  setLocalStorage(history)
}

chrome.runtime.onMessage.addListener(function onMessageFunc(message) {
  switch (message.type) {
    case 'copy':
      copyText(message.text)
      break
    case 'copyURL':
      // console.log('URL: ' + message.url)
      copyText(message.url)
      break
    case 'delete':
      deleteContent(message.index)
      break
    case 'deleteAll':
      deleteAllContents()
      break
    default:
      return true
  }
})

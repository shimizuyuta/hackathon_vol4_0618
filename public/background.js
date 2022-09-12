/*global chrome*/

let selectionText
export let history = []
let oldText = ""

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

chrome.commands.onCommand.addListener((command) => {
  switch (command) {
    case 'copyText':
      copyText(selectionText)
      break
    case 'clearList':
      clearList()
      break
    default:
      break
  }
})

chrome.runtime.onMessage.addListener(function onMessageFunc(message) {
  switch(message.type){
    case 'message':
      selectionText = message.message
      break
    case 'deleteStorage':
      clearList()
      break
    case 'deleteContent':
      deleteContent(message.message)
      break
    case 'copyURL':
      console.log("URL: "+message.message)
      copyText(message.message)
      break
    default:
      console.log("ERROR SWITCH")
  }

  return true
})
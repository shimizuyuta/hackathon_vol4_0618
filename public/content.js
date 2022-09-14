/*global chrome*/
document.addEventListener('selectionchange', function (value) {
  console.log('value',value)
  let selectionText = window.getSelection().toString()
  console.log(selectionText)
  if (selectionText.length) {
    try {
      let payload = {
        message: selectionText,
        type: 'message',
      }
      chrome.runtime.sendMessage(payload)
    } catch (error) {
      alert('リロードしてください')
    }
  }
})

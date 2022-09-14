/*global chrome*/
document.addEventListener('copy', async () => {
  let copiedText = navigator.clipboard ? await navigator.clipboard.readText() : '';
  if (copiedText.length) {
    try {
      let message = {
        text: copiedText,
        type: 'copy',
      }
      chrome.runtime.sendMessage(message)
    } catch (error) {
      alert('リロードしてください')
    }
  }
});
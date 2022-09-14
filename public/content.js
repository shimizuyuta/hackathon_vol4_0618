/*global chrome*/
// document.addEventListener('selectionchange', function (value) {
//   console.log('value',value)
//   let selectionText = window.getSelection().toString()
//   console.log(selectionText)
//   if (selectionText.length) {
//     try {
//       let payload = {
//         message: selectionText,
//         type: 'message',
//       }
//       chrome.runtime.sendMessage(payload)
//     } catch (error) {
//       alert('リロードしてください')
//     }
//   }
// })

document.addEventListener('copy', async (e) => {
  // e.preventDefault();
  let text;
  if (navigator.clipboard) {
    text = await navigator.clipboard.readText();
    console.log(text,'中身')
  }
  else {
    console.log('navigator以外')
    text = e.clipboardData.getData('text/plain');
  }
  console.log('Got pasted text: ', text);
  if (text.length) {
    try {
      let payload = {
        message: text,
        type: 'copy',
      }
      chrome.runtime.sendMessage(payload)
    } catch (error) {
      alert('リロードしてください')
    }
  }
});
// 渡されたtextをクリップボードにコピーする
const CopyToClipboard = (text) => {
  console.log('text key +++++',text)
  // console.log('text key +++++',text.key)
  navigator.clipboard.writeText(text)
}

// const CopyToClipboard = (text) => {
//   console.log('text key +++++',text)
//   console.log('text key +++++',text.key)
//   navigator.clipboard.writeText(text.key)
// }


// const CopyToClipboard = (text) => {
//   navigator.clipboard.writeText(text)
// }

export default CopyToClipboard;
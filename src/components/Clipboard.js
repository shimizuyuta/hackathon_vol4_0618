// 渡されたtextをクリップボードにコピーする
const CopyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
}
export default CopyToClipboard

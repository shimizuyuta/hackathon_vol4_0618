const download = (data, title = 'clip-roach.txt') => {
  const newBlob = new Blob(data)
  const objUrl = window.URL.createObjectURL(newBlob)
  const link = document.createElement('a')
  link.href = objUrl
  link.download = 'clip-roach.txt'
  link.click()
  setTimeout(() => {
    window.URL.revokeObjectURL(objUrl)
  }, 250)
}

const Txt = (props) => {
  return <button onClick={() => download(props.data)}>Txtでエクスポート</button>
}

export default Txt

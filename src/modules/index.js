export const download = (data) => {
  for (var i = 0; i < data.length; i++) {
    data[i] = data[i] + '\n\n'
  }
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

export const CopyToClickboard = (text) => {
  navigator.clipboard.writeText(text)
}

export const returnOutput = (data) => {
  let out = ''
  for (var i = 0; i < data.length; i++) {
    out += data[i] + '\n'
  }
  return out
}

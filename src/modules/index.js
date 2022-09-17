// export const download = (data) => {
//   console.log(data)
//   // console.log(typeof data)
//   // for (var i = 0; i < data.length; i++) {
//   //   data[i] = data[i] + '\n\n'
//   // }
//   const splitedData = data.value.split(/\r\n|\n/)
//   console.log(splitedData)
//   const newBlob = new Blob(splitedData)
//   const objUrl = window.URL.createObjectURL(newBlob)
//   const link = document.createElement('a')
//   link.href = objUrl
//   link.download = 'clip-roach.txt'
//   link.click()
//   setTimeout(() => {
//     window.URL.revokeObjectURL(objUrl)
//   }, 250)
// }

export const CopyToClickboard = (text) => {
  navigator.clipboard.writeText(text)
}

export const returnOutput = (data) => {
  return new Promise((resolve) =>{
    let out = ''
    for (var i = 0; i < data.length; i++) {
      out += data[i] + '\n'
    }
    resolve(out)
  })
}

/*global chrome*/
import { useState, useEffect } from 'react'
import './App.css'
import Top from './components/top'
import { getLocalStorage, deleteLocalStorage } from './modules/chrome'
import { returnOutput } from './modules/index'
function App() {
  const [datas, setData] = useState([])
  const [textData, setTextData] = useState([])

  const output = (data) => {
    returnOutput(data).then((out) => {
      setTextData(out)
    })
  }

  const deleteStorage = () => {
    deleteLocalStorage()
    setData([])
  }

  chrome.storage.onChanged.addListener(() => {
    getLocalStorage().then((value) => {
      setData(value.key)
    })
  })

  useEffect(() => {
    getLocalStorage().then((value) => {
      console.log(value, 'callback useeffect')
      setData(value.key)
    })
  }, [])

  return (
    <div>
      <Top
        datas={datas}
        deleteStorage={deleteStorage}
        output={output}
        textData={textData}
      />
    </div>
  )
}

export default App

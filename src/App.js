/*global chrome*/
import './App.css'
import { useState, useEffect } from 'react'
import './App.css'
import Top from './components/top'

function App() {
  const [datas, setData] = useState([])
  const deleteStorage = () => {
    chrome.runtime.sendMessage({
      type: 'deleteStorage',
    })
    setData([])
  }

  const deleteContent = (index) => {
    chrome.runtime.sendMessage({
      message: index,
      type: 'deleteContent',
    })
  }

  chrome.storage.onChanged.addListener(function () {
    chrome.storage.local.get('key', function (value) {
      setData(value.key)
    })
  })

  useEffect(() => {
    chrome.storage.local.get('key', function (value) {
      setData(value.key)
    })
  }, [])

  return (
    <div>
      <Top
        datas={datas}
        deleteStorage={deleteStorage}
        deleteContent={deleteContent}
      />
    </div>
  )
}

export default App

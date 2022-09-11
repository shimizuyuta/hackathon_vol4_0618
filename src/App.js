/*global chrome*/
import './App.css'
import { useState, useEffect } from 'react'
import './App.css'
import Top from './components/top/top'

function App() {
  const [datas, setData] = useState([''])

  useEffect(() => {
    chrome.storage.local.get('key', function (value) {
      setData(value.key)
    })
  }, [])

  const deleteStorage = () => {
    chrome.runtime.sendMessage({
      message: 'deleteStorage is called!',
    })
    setData([])
  }

  const deleteContent = (index) => {
    let deleteMessage = index + 'deleteMessage'
    chrome.runtime.sendMessage({
      message: deleteMessage,
    })
  }

  chrome.storage.onChanged.addListener(function (changes, namespace) {
    if (namespace == 'local') {
      chrome.storage.local.get('key', function (value) {
        setData(value.key)
      })
    }
  })

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

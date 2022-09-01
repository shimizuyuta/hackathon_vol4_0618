/*global chrome*/
import './App.css'
import { useState, useEffect } from 'react'
import './App.css'
import Top from './components/top/top'
import CopyToClipboard from './components/Clipboard/Clipboard'

function App() {
  const [datas, setData] = useState([''])

  useEffect(() => {
    chrome.storage.local.get('key', function (value) {
      console.log(value.key)
      setData(value.key)
      console.log(value, '++++++++++')
      CopyToClipboard('aaaa')
      // CopyToClipboard(value);
    })
  }, [])

  const deleteStorage = () => {
    chrome.runtime.sendMessage({
      message: 'deleteStorage is called!',
    })
    setData([])
  }

  const deleteContent = (index) => {
    let deleteMessage = index + 'deletedeletedelete'
    chrome.runtime.sendMessage({
      message: deleteMessage,
    })
  }

  chrome.storage.onChanged.addListener(function (changes, namespace) {
    if (namespace == 'local') {
      chrome.storage.local.get('key', function (value) {
        console.log(value.key)
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

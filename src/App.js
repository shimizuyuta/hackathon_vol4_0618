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
    console.log('deletecontents',deleteContent)
    let deleteMessage = index + 'deletedeletedelete'
    chrome.runtime.sendMessage({
      message: deleteMessage,
    })
  }

  chrome.storage.onChanged.addListener(function (changes, namespace) {
    if (namespace == 'local') {
      console.log('whats chnages',changes)
      console.log('whats chnages')
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

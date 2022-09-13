/*global chrome*/
import './App.css'
import { useState, useEffect } from 'react'
import './App.css'
import Top from './components/top'

function App() {
  const [datas, setData] = useState([])
  const [textData, setTextData] = useState([])

  const output = (data) => {
    var out = ''
    for (var i = 0; i < data.length; i++) {
      out += data[i] + '\n'
    }
    setTextData(out)
  }

  const deleteStorage = () => {
    chrome.runtime.sendMessage({
      type: 'deleteStorage',
    })
    setData([])
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
        output={output}
        textData={textData}
      />
    </div>
  )
}

export default App

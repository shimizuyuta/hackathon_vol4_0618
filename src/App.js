/*global chrome*/
import { useState, useEffect } from 'react'
import './App.css'
import { getLocalStorage, deleteAllContents } from './modules/chrome'
import { returnOutput } from './modules/index'
import NavBar from './components/NavBar'
import History from './components/History'

function App() {
  const [datas, setData] = useState([])
  const [textData, setTextData] = useState([])

  const output = (data) => {
    console.log('catch click func',data)
    returnOutput(data)
    .then((out) => {
      console.log('out',out)
      setTextData(out)
    })
  }

  const deleteStorage = () => {
    deleteAllContents()
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
      <NavBar
        deleteStorage={deleteStorage}
        datas={datas}
        output={output}
      />
      <History 
        textData={textData} 
        datas={datas} 
      />
    </div>
  )
}

export default App

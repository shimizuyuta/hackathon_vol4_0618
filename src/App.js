/*global chrome*/
import './App.css'
import { useState, useEffect } from 'react'
import './App.css'
import Top from './components/Top'

function App() {
  const [datas, setData] = useState([''])
  const [isDescendingOrder, setIsDescendingOrder] = useState(false) // 降順かどうか

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

  chrome.storage.onChanged.addListener(function () {
    chrome.storage.local.get('key', function (value) {
      setData(value.key)
    })
  })

  const changeOrder = () => {
    //truefalse処理
    setIsDescendingOrder(!isDescendingOrder)
    //反転処理
    setData(datas.reverse())
  }

  return (
    <div>
      <Top
        datas={datas}
        deleteStorage={deleteStorage} // top.js→Navbar.jsに渡している
        changeOrder={changeOrder} // top.js→Navbar.jsに渡している
        deleteContent={deleteContent} // top.js→history.jsに渡している
        isDescendingOrder={isDescendingOrder} // top.js→history.jsに渡している
      />
    </div>
  )
}

export default App

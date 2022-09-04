// // /*global chrome*/
// import './App.css'
// import {  useEffect } from 'react'
// // import Top from './components/top/top'

// function App() {
//   useEffect(() => {
//     chrome.storage.local.get('key', function (value) {
//       console.log(value.key,'fafa')
//       console.log(value, '++++++++++')
//       // CopyToClipboard(value);
//     })
//   }, [])
//   console.log(localStorage.getItem("key"));
//   return <p>test</p>
// }

// export default

/*global chrome*/
import './App.css'
import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [copyContent, setCopyContent] = useState([])
  //usecallbackとかを使った方がいい。毎回レンダリングが起こるため
  // useEffect(() => {
  //   console.log('app.jsでuseeffectが呼ばれている')
  //   chrome.storage.local.get('key', function (value) {
  //     console.log(value.key,'ストレージにあるデータ')
  //     setCopyContent(...copyContent,value.key)
  //   })
  // })

  useEffect(() => {

    //storageからデータを取ってくる
    console.log('useEffectが呼ばれる')
    chrome.storage.local.get(['key'], function (value) {
      // CopyToClipboard(value);
      console.log('callback ローカルストレージ',copyContent)
      if(value.length> 0){
        console.log('stateの中身がある状態')
        setCopyContent([...copyContent,value.key])
        console.log(copyContent, 'stateの中身')
        console.log(value.key, 'ローカルストレージから取ってきた')
      }
    })
  }, [])

  const fetch = () =>{
    chrome.storage.local.get(['key'],(result)=>{
      console.log('resultローカルストレージ',result)
    })
  }

  chrome.storage.onChanged.addListener(function (changes, namespace) {
    if (namespace == 'local') {
      // console.log('ストレージの値が変化された',changes)
      //ストレージが追加されたときにstate変更
      for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
        console.log('oldValue: ', oldValue)
        console.log('************')
        console.log('newValue: ', newValue, key, 'key')
        //両方存在する場合の処理
        if (oldValue && newValue) {
          // console.log(newValue,'new value')
          // setCopyContent([...newValue])
          // console.log('stateの中身',copyContent)
        }
      }

      console.log(changes, 'ストレージにどんな変化があったか')
      //ストレージが追加されたときにstateの削除
    }
  })

  return (
    <div>
      <p>test</p>
      <button onClick={fetch}>fetch</button>
      <p>{copyContent}:copyContent</p>
      {copyContent ? (
        <p>nothing</p>
      ) : (
        copyContent.map((value, index) => {
          return (
          <ul key={index}>
            <li >{value}</li>
          </ul>          )
        })
      )}
    </div>
  )
}

export default App

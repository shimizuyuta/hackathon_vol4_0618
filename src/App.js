/*global chrome*/
import logo from './logo.svg';
import './App.css';
import Txt from './components/Txt/Txt';
import {useState, useEffect} from 'react';
import List from './components/List'

function App() {

  const [datas, setData] = useState(["aaa"]);

  useEffect(() => {
    chrome.storage.local.get("key", function (value) {
      console.log(value.key);
      setData(value.key);
    });
  },[]);

  const deleteStorage =() =>{
    chrome.runtime.sendMessage({
      message: "deleteStorage is called!"
    });
    setData([]);
  }

  chrome.storage.onChanged.addListener(function(changes, namespace) {
    if (namespace == "local") {
      chrome.storage.local.get("key", function (value) {
        console.log(value.key);
        setData(value.key);
      });
    }
  });

  return (
  <div class="container" id="main">
    <div class="content">
      <ul>
        {datas.map((post,index) =>
          <li key={index}>
            {post}
          </li>
        )}
      </ul>
    </div>
    <textarea name="" 
      type="text"
      class="textArea" 
      id="text"  
      cols="30" 
      rows="10" 
      autofocus 
      required
    >
    </textarea>
    <button onClick={deleteStorage}>ストレージ消す</button>
    <div class="buttonArea">
      <button id="button1">テンプレート1</button>
      <button id="button2">テンプレート2</button>
      <button id="button3">テンプレート3</button>
    </div>
    <Txt></Txt>
  </div>
  );
}

export default App;

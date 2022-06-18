/*global chrome*/
import logo from './logo.svg';
import './App.css';
import Txt from './components/Txt/Txt';
import {useState, useEffect} from 'react';
import List from './components/List'

function App() {

  const [datas, setData] = useState(["aaa"]);
  const [isClear, setClear] = useState(false);

  useEffect(() => {
    chrome.storage.local.get("key", function (value) {
      console.log(value.key);
      setData(value.key);
    });
  },[]);

  function testStorage(){
    console.log(datas);
    //alert("testStorage");
    // chrome.storage.local.get("key", function (value) {
    //   console.log(value.key);
    //   //alert("testStorage");
    //   //alert(value.key);
    //   setData(value.key);
    //   //setData(value.key);
    // });
  }

  const deleteStorage =() =>{
    setClear(true);
    chrome.storage.local.clear();
    setClear(false);
    setData([]);
  }

  chrome.storage.onChanged.addListener(function(changes, namespace) {
    if(!isClear){
      if (namespace == "local") {
        chrome.storage.local.get("key", function (value) {
          console.log(value.key);
          setData(value.key);
        });
      }
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
    <button onClick={testStorage}>ストレージのやつ</button>
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

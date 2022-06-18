/*global chrome*/
import logo from './logo.svg';
import './App.css';
import Txt from './components/Txt/Txt';
import {useState, useEffect} from 'react';


const [data, setData] = useState([]);

function testStorage(){
  alert("testStorage");
  chrome.storage.local.get("key", function (value) {
    console.log(value.key);
    //alert("testStorage");
    //alert(value.key);
    setData(value.key);
  });
}

function App() {
  return (
  <div class="container" id="main">
    <div class="content">
      <ul id="list"></ul>
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
    <div class="buttonArea">
      <button id="button1">テンプレート1</button>
      <button id="button2">テンプレート2</button>
      <button id="button3">テンプレート3</button>
    </div>
    {/* {history.map((data,index) =>{
      <li key={index}>{data}</li>
    })} */}
    <Txt></Txt>
  </div>
  );
}

export default App;

/*global chrome*/
import logo from './logo.svg';
import './App.css';
import Txt from './components/Txt/Txt';
import {useState, useEffect} from 'react';
import List from './components/List'
import './App.css';
import Top from './components/top/Top'

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

  const deleteContent =(index) =>{
    let deleteMessage = index + "deletedeletedelete";
    chrome.runtime.sendMessage({
      message: deleteMessage
    });
  }

  chrome.storage.onChanged.addListener(function(changes, namespace) {
    if (namespace == "local") {
      chrome.storage.local.get("key", function (value) {
        //console.log(value.key);
        setData(value.key);
      });
    }
  });

  return (

    <div>
      <Top 
        datas={datas}
        deleteStorage={deleteStorage}
        deleteContent={deleteContent}
      />
      <button onClick={() => deleteContent(2)}>デリーとテスト</button>
    </div>
  );
}

export default App;
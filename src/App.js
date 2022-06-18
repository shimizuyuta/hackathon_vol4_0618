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
    <div>
      <Top />
    </div>
  );
}

export default App;
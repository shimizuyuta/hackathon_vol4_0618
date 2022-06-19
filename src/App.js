/*global chrome*/
import './App.css';
import {useState, useEffect} from 'react';
import './App.css';
import Top from './components/top/Top'
import CopyToClipboard from './components/Clipboard/Clipboard';

function App() {

  const [datas, setData] = useState([""]);

  useEffect(() => {
    chrome.storage.local.get("key", function (value) {
      console.log(value.key);
      setData(value.key);
      console.log(value,'++++++++++')
      CopyToClipboard("aaaa");
      // CopyToClipboard(value);
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

    <div>
      <Top datas={datas}/>

    </div>
  );
}

export default App;
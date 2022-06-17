import logo from './logo.svg';
import './App.css';

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
    <div class="buttonArea">
      <button id="button1">テンプレート1</button>
      <button id="button2">テンプレート2</button>
      <button id="button3">テンプレート3</button>
    </div>
  </div>
  );
}

export default App;

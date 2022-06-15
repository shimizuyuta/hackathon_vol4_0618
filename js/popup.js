let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let text = document.getElementById('text');
let List = document.getElementById('list');
let content = document.getElementsByClassName('content')
let data = []
let liElement = document.querySelectorAll("li")
// let liElement = document.getElementsByTagName("li")
let ulElement = document.getElementById("list")
//テンプレートボタンのカラー変更（仮）
//TODO:テンプレートで整形？

button1.onclick = () =>{
  document.body.style.backgroundColor = "#ccffcc";
  document.body.style.color = "#000";
}
button2.onclick = () =>{
  document.body.style.backgroundColor = "#f22";
  document.body.style.color = "blue";
}
button3.onclick = () =>{
  document.body.style.color = "red";
  document.body.style.backgroundColor = "#222";
}

chrome.commands.onCommand.addListener((command) => {
  switch (command) {
    case "deletePosts": 
      deletePosts()
      break;

    case "createPost":
      createPost()
      break;
  }
});

//chromeのストレージからデータを取ってくる。（データは配列で管理・デフォルトではobjectになっている）
chrome.storage.sync.get(null, function (items) { 
  console.log(items,'items') 
  if(Object.keys(items).length === 0){
    console.log('empty')
    data = []
  } else {
    console.log('not empty')
    data = items.data
  }
});

//ToDo storageは削除できるが、liの要素の削除が反映されない
const deletePosts = () =>{
  console.log('delete')
  // for(let i=0;i<liElement.length;i++){
  //   ulElement.removeChild(liElement[i]);
  // }

  chrome.storage.sync.clear();
  data = []
  console.log(data)
}

const createPost = () =>{
  let newList = document.createElement("li")
  newList.style.margin=  "30px 0px 20px 0px"
  newList.innerHTML = text.value 
  data.push(text.value)
  console.log('data',data)
  chrome.storage.sync.set({data:data})

  List.appendChild(newList)
  text.value=''
}
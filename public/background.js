let selectionText;
let history = [];
let historyCounter = 0;

const user = {
    username: 'demo-user'
};

const copyText = (text) => {
    history.push(text);
    console.log("copy: "+text);
    chrome.storage.local.set({'key': text}, function(){});
}

const clearList = (text) => {
    history = [];
    console.log("clear history!!");
}

const showList = (text) => {
    console.log("<コピー履歴>");
    history.forEach(element => console.log(element));
}

chrome.commands.onCommand.addListener((command) => {
    console.log("-------------------------");
    switch (command) {
        case "createPost":
            copyText(selectionText);
            break;
        case "deletePosts":
            clearList(selectionText);
            break;
        case "showList":
            showList(selectionText);
            break;
    }
    //console.log(`Command "${command}" called selectionText:${selectionText}`);
});

chrome.runtime.onMessage.addListener(
    function onMessageFunc(message, sender, sendResponse) {
        if (message === 'get-user-data') {
            sendResponse(user);
        }
        selectionText = message.message;
        chrome.tabs.query({active: true}).then(tabs => {
            const tab = tabs[0];
            //console.log(`selection text[${message.message}] update by sender:${sender.tab.id}, active.tab.id:${tab.id}`);
    
            if (sender.tab.id === tab.id) {
                selectionText = message.message;
            }
        })
        return true;
    }
);
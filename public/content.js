/*global chrome*/
document.addEventListener('selectionchange', function () {
    let selectionText = window.getSelection().toString();
    if (selectionText.length){
        try{
            let payload = {
                message: selectionText ,
                type: 'message',
            }
            chrome.runtime.sendMessage(payload)
        }
        catch(error){
            console.log(error,'エラー発生');
        }
    }
})
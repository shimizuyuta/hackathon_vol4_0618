/*global chrome*/
document.addEventListener('selectionchange', function (event) {
    let selectionText = window.getSelection().toString();
    console.log(`selection changed:${selectionText}`);
    if (selectionText.length){
        try{
            let payload = {message: selectionText };
            chrome.runtime.sendMessage(payload);
        }
        catch(error){
            console.log(error);
        }
    }
})
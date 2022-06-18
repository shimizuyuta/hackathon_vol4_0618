/*global chrome*/
document.addEventListener('selectionchange', function (event) {
    let selectionText = window.getSelection().toString();
    console.log(`selection changed:${selectionText}`);
    chrome.storage.local.get("key", function (rireki) {
        console.log("testStorage");
        console.log(rireki.key);
    });
    if (selectionText.length){
        try{
            chrome.runtime.sendMessage({
                message: selectionText
            });
        }catch(error){
            console.log(error);
        }
    }
})
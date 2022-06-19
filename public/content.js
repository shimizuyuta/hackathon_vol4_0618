/*global chrome*/
document.addEventListener('selectionchange', function (event) {
    console.log('sssss')
    let selectionText = window.getSelection().toString();
    console.log(`selection changed:${selectionText}`);
    if (selectionText.length){
        try{
            let payload = {message: selectionText }
            chrome.runtime.sendMessage(payload,(data)=>{
                console.log(data)
            })
        }
        catch(error){
            console.log(error);
        }
    }
})
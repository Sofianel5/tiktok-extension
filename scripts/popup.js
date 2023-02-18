function enableGriffin() {
    chrome.tabs.query({}, tabs => {
        tabs.forEach(tab => {
            chrome.tabs.sendMessage(tab.id, {peter: {enable: true}});
        });
    })
}
function disableGriffin() {
    chrome.tabs.query({}, tabs => {
        tabs.forEach(tab => {
            chrome.tabs.sendMessage(tab.id, {peter: {disable: true}});
        });
    });
}

document.getElementById("enableGriffinBtn").addEventListener("click", enableGriffin);
document.getElementById("disableGriffinBtn").addEventListener("click", disableGriffin);
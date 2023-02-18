function enableGriffin() {
    chrome.runtime.sendMessage({peter: {enable: true}});
}
async function disableGriffin() {
    chrome.tabs.query({}, tabs => {
        tabs.forEach(tab => {
        chrome.tabs.sendMessage(tab.id, msgObj);
        });
    });
}

document.getElementById("enableGriffinBtn").addEventListener("click", enableGriffin);
document.getElementById("disableGriffinBtn").addEventListener("click", disableGriffin);
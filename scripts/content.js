function createDistraction () {
    const main = document.querySelector('body')
    if (main) {
        const player = document.createElement('video')
        player.id = "ay-yo-mama"
        player.autoplay = true
        player.muted = true
        player.style.height = "300px"
        player.style.width = "100vw"
        player.style.objectFit = "cover"
        player.style.position = "sticky"
        player.style.bottom = "0"
        player.style.zIndex = "99999999999"
        const source = document.createElement('source')
        source.src = "https://tiktokextension.s3.amazonaws.com/peter.mp4"
        player.appendChild(source)
        main.appendChild(player)
    }
}

function disableDistraction () {
    document.getElementById('ay-yo-mama').remove()
}

chrome.runtime.onMessage.addListener(
    (req, sender, sendResponse) => {
        if (request.peter.enable) {
            createDistraction();
        } else if (request.peter.disable) {
            disableDistraction();
        }
    } 
)
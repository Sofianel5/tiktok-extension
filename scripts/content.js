
const videos = [
    "https://tiktokextension.s3.amazonaws.com/peter.mp4",
    "https://tiktokextension.s3.amazonaws.com/subway.mp4",
]

let selectedVideo = videos[Math.floor(Math.random() * videos.length)]

function randomVideo() {
    console.log("random video")
    selectedVideo = videos[Math.floor(Math.random() * videos.length)]
}
//document.getElementById("switchVideo").addEventListener("click", randomVideo);

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
        let source = document.createElement('source')
        source.src = selectedVideo
        player.appendChild(source)
        main.appendChild(player)
    }
}

function disableDistraction () {
    document.getElementById('ay-yo-mama').remove()
}

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        if (request.peter.enable) {
            // createDistraction();
            createDistraction();
        } else if (request.peter.disable) {
            // disableDistraction();
            disableDistraction();
        } else if (request.peter.switch) {
            // randomVideo();
            console.log("random video")
            selectedVideo = videos[Math.floor(Math.random() * videos.length)]
            disableDistraction()
            createDistraction()

        }
    } 
)

createDistraction()
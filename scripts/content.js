
const videos = [
    "https://tiktokextension.s3.amazonaws.com/peter.mp4",
    "https://tiktokextension.s3.amazonaws.com/subway.mp4",
]

let selectedVideo = videos[Math.floor(Math.random() * videos.length)]

let distractionAlive = false

function randomVideo() {
    console.log("random video")
    //select new video but not the same as the current one
    videosWithoutCurrent = videos.filter(video => video !== selectedVideo)
    selectedVideo = videosWithoutCurrent[Math.floor(Math.random() * videosWithoutCurrent.length)]
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
        player.style.width = "100%"
        player.style.objectFit = "cover"
        player.style.position = "sticky"
        player.style.bottom = "0"
        player.style.left = "0"
        player.style.zIndex = "99999999999"
        let source = document.createElement('source')
        source.src = selectedVideo
        player.appendChild(source)
        main.appendChild(player)
        distractionAlive = true;
        setTimeout(() => {
            randomVideo()
        }, 720000)
    }
}

function disableDistraction () {
    document.getElementById('ay-yo-mama').remove()
    distractionAlive = false;
}

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        if (request.peter.enable) {
            // createDistraction();
            if (distractionAlive === false) {
                createDistraction();
            }
        } else if (request.peter.disable) {
            // disableDistraction();
            if (distractionAlive === true) {
                disableDistraction();
            }
        } else if (request.peter.switch) {
            // randomVideo();
            console.log("random video")
            randomVideo()
            disableDistraction();
            createDistraction();

        }
    } 
)

createDistraction()
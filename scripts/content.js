
const videos = [
    "https://tiktokextension.s3.amazonaws.com/peter.mp4",
    "https://tiktokextension.s3.amazonaws.com/subway.mp4",
    "https://tiktokextension.s3.amazonaws.com/sand.mp4",
    "https://tiktokextension.s3.amazonaws.com/press.mp4"
]

let selectedVideo = videos[Math.floor(Math.random() * videos.length)]

let distractionAlive = false

function randomVideo() {
    console.log("random video")
    //select new video but not the same as the current one
    videosWithoutCurrent = videos.filter(video => video !== selectedVideo)
    selectedVideo = videosWithoutCurrent[Math.floor(Math.random() * videosWithoutCurrent.length)]
}

setTimeout(randomVideo, 3*60*1000)
//document.getElementById("switchVideo").addEventListener("click", randomVideo);

function createDistraction () {
    const main = document.querySelector('body')
    if (main) {
        const player = document.createElement('video')
        player.id = "ay-yo-mama"
        player.autoplay = true
        player.muted = true
        player.style.height = "100vh"
        player.style.width = "30%"
        player.style.objectFit = "cover"
        player.style.position = "fixed"
        player.style.bottom = "0"
        player.style.right = "0"
        player.style.zIndex = "99999999999"

        // get body and add 30% padding to the right
        const body = document.querySelector('body')
        body.style.paddingRight = "30%"
        body.style.overflowX = "scroll"


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

function isCSPHeader(head) {
    return (head === "CONTENT-SECURITY-POLICY") || (head === "X-WEBKIT-CSP")
}

// Danger: removes CSP from all pages
// chrome.webRequest.onHeadersReceived.addListener((details) => {
//     for (let i = 0; i < details.responseHeaders.length; i++) {
//         if (isCSPHeader(details.responseHeaders[i].name.toUpperCase())) {
//             const csp = "default-src * 'unsafe-inline' 'unsafe-eval' data: blowb:; "
//             details.responseHeaders[i].value = csp
//         }
//     }
// })

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
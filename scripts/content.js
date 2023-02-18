const main = document.querySelector('body')

if (main) {
    const player = document.createElement('video')
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
const main = document.querySelector('body')

if (main) {
    const player = document.createElement('video')
    player.autoplay = true
    player.muted = true
    player.style.height = "300px"
    player.style.width = "100vw"
    player.style.position = "sticky"
    player.style.bottom = "0"
    player.style.zIndex = "99999999999"
    const source = document.createElement('source')
    source.src = "https://cec.ceoc.cx/api/v1/download?sig=lFxxgqnvWSpTvamfWFMMPS6%2Bb7t5mkLXKn8CciUNdzVstF4P9KLd8MDW3p7vRz4ynV%2FCweevbzzNQyN5aY9h3BtU3TyYjN6co%2BRRWObsRLaF%2FCvvUyCUyJwnVx2TewX6CCA74a0QlQE6wHQiPPpK1Uww8TOgz%2Fr1lo69aKaK98QZuvY8Nto%2F6nLRe4qatHAUTP37xsDFGFYu38hQYMC1TCone1awUwSvABhAUdIp0Nk5whpqRLlIIB2crdKGD78dAt%2FoKNC8cKn%2FsbC76yXvc4lEo%2BsNsqXylqBrkTg9toqixns2GXFdVvjkbxSKllL7QdAZ7GTCa7o9z7o3aoOEZw%3D%3D&v=2LaCKzfTEoA&_=0.9586391081906847"
    player.appendChild(source)
    main.appendChild(player)
}
const initHome = () => {
    const roomListHtml = document.getElementsByClassName('room-list')[0]
    roomList.forEach(room => {
        const newAHtml = document.createElement('a')
        const newLiHtml = document.createElement('li')
        const newImgHtml = document.createElement('img')
        const newSpanHtml = document.createElement('span')
        const newContainerInfoHtml = document.createElement('div')
        const newDivInfoHtml = document.createElement('div')
        const newImgInfoHtml = document.createElement('img')

        newAHtml.href = `room.html?id=${room.id}`
        newImgHtml.classList.add('logo-room')
        newImgHtml.src = `assets/icons/${room.icon}`
        newSpanHtml.classList.add('title-room')
        newSpanHtml.innerText = `${room.name}`

        newDivInfoHtml.innerText = `10`
        newImgInfoHtml.src = `assets/people.png`

        newContainerInfoHtml.classList.add('container-info')
        newContainerInfoHtml.appendChild(newDivInfoHtml)
        newContainerInfoHtml.appendChild(newImgInfoHtml)

        newAHtml.appendChild(newImgHtml)
        newAHtml.appendChild(newSpanHtml)
        newAHtml.appendChild(newContainerInfoHtml)

        newLiHtml.appendChild(newAHtml)
        roomListHtml.appendChild(newLiHtml)
    })
}

initHome()
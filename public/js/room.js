const socket = io.connect("http://localhost:3000/")
const chatForm = document.querySelector('.chat-form')
const inputChat = document.querySelector('.chat-input')
const windowChat = document.querySelector('.chat-window')
const ERROR_BAD_ROOM = "Mauvais salon !"
let pseudo
let room

const askPseudo = () => {
    let pseudoEnter
    do {
        pseudoEnter = prompt("Quel est votre pseudo ?")
    } while (!pseudoEnter.trim())
    return pseudoEnter
}

const getAllMessage = (room) => {
    socket.emit('getAllMessage', {
        id: room.id,
        
    })
}

const returnHome = () => {
    location.href = "home.html"
}

const initRoom = async () => {
    await initAll()
    room = findRoomByUrlId()
    if (!room) {
        // Bad room, redirect to home
        alert(ERROR_BAD_ROOM)
        location.href = "/home.html"
    }

    const titleRoomHtml = document.getElementsByClassName('room-title')[0]
    titleRoomHtml.innerText = room.name

    pseudo = askPseudo()

    chatForm.addEventListener('submit', event => {
        event.preventDefault()
        socket.emit('chat', {
            pseudo: pseudo,
            text: inputChat.value
        })
        inputChat.value = ''
    })

    socket.on('chat_room', (message) => {
        const pseudo = message.pseudo
        const text = message.text
        windowChat.innerText += `\n${pseudo} : ${text}`
    })
}

initRoom()
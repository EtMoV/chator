const pseudo = prompt("Quel est votre pseudo ?")
const socket = io.connect("http://localhost:3000/")
const chatForm = document.querySelector('.chat-form')
const inputChat = document.querySelector('.chat-input')
const windowChat = document.querySelector('.chat-window')

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
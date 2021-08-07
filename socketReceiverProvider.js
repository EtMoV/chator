const socketIoProvider = require("./socketIoProvider")
const socketSenderProvider = require("./socketSenderProvider")

const socketReceiverProvider = {

    initSocketIoReceiver: () => {
        console.log("Initialisation of socket Receiver provider")
        socketIoProvider.IO_WS.sockets.on(
            "connection",
            (socket) => {
                console.log("New Connection")

                // Action to do when player disconnect
                socket.on("disconnect", () => {
                    console.log("Action DISCONNECT detected, socket : " + socket.id)
                    const socketId = socket.id

                    if (socketId !== undefined) {}
                })

                socket.on('chat', message => {
                    const pseudo = message.pseudo
                    const text = message.text
                    socketSenderProvider.sendMessageBroadcastBroadcast("chat_room", {
                        pseudo: pseudo,
                        text: text
                    })
                })

            }
        )
    },
}
module.exports = socketReceiverProvider
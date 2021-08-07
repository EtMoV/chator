const socketIoProvider = require("./socketIoProvider")

const socketSenderProvider = {
    // Send one message to particular socket
    sendMessage: (socket, channel, content) => {
        socket.emit(channel, content)
    },

    // Send Broadcast message
    sendMessageBroadcastBroadcast: (channel, content) => {
        socketIoProvider.IO_WS.sockets.emit(channel, content)
    },
}
module.exports = socketSenderProvider
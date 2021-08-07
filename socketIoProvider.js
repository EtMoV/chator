const socketIo = require("socket.io");

const socketIoProvider = {
  IO_WS: undefined,
  initSocket: (server) => {

    socketIoProvider.IO_WS = socketIo.listen(server);

  }
};
module.exports = socketIoProvider;
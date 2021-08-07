require("dotenv").config()

const express = require('express')
const path = require('path')
const bodyParser = require("body-parser")
const cors = require("cors")
const socketIoProvider = require("./socketIoProvider")
const socketReceiverProvider = require("./socketReceiverProvider")

const app = express()

const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname + '/public')))

app.use(cors())

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

const initServer = (server) => {
    socketIoProvider.initSocket(server)
    socketReceiverProvider.initSocketIoReceiver()
}


const server = app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})

initServer(server)
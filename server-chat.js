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

app.get("/rooms", (req, res) => {
    const rooms = [{
            icon: "insurance_mutual.png",
            id: "1XHE02",
            name: "Assurance & Mutuelle"
        },
        {
            icon: "politics.png",
            id: "1XHE03",
            name: "Politique"
        }, {
            icon: "kpop.png",
            id: "1XHE04",
            name: "K-pop"
        }, {
            icon: "police.png",
            id: "1XHE05",
            name: "Force de l'ordre"
        }, {
            icon: "antivax.png",
            id: "1XHE06",
            name: "Anti-vax"
        }, {
            icon: "troll.png",
            id: "1XHE07",
            name: "Troll"
        }
    ]
    res.send(rooms)
})

const server = app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})

initServer(server)
let roomList
const URL_SERVER = "http://localhost:3000/"

const httpGet = (url, isJsonResponse) => {
    return new Promise((resolve, reject) => {
        const xmlHttp = new XMLHttpRequest()

        xmlHttp.onreadystatechange = () => {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                isJsonResponse ? resolve(JSON.parse(xmlHttp.response)) : resolve(xmlHttp.responseText)
            }
        }

        xmlHttp.open("GET", url, true)
        xmlHttp.send(null)
    })

}

const findRoomByUrlId = () => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const id = urlParams.get('id')
    const room = roomList.find(room => {
        return room.id === id
    })

    return room
}

const getRoom = async () => {
    const endpoint = 'rooms'
    const url = `${URL_SERVER}${endpoint}`
    roomList = await httpGet(url, true)
}

const initAll = async () => {
    await getRoom()
}
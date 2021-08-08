const roomList = [{
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

const findRoomByUrlId = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
    const room = roomList.find(room => {
        return room.id === id
    })

    return room
}
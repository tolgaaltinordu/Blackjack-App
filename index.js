let randomCard, firstCard, secondCard
let deck = [
    "1s", "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s", "10s", "11js", "12qs", "13ks",
    "1h", "2h", "3h", "4h", "5h", "6h", "7h", "8h", "9h", "10h", "11jh", "12qh", "13kh",
    "1d", "2d", "3d", "4d", "5d", "6d", "7d", "8d", "9d", "10d", "11jd", "12qd", "13kd",
    "1c", "2c", "3c", "4c", "5c", "6c", "7c", "8c", "9c", "10c", "11jc", "12qc", "13kc"
]
let player = {
    name: "Grasshopper",
    chips: 50,
    sayHello: function () {
        console.log("hello")
    }
}
// player.sayHello()
// let tag = document.createElement('p')
// let text = document.createTextNode("dsadasdas")
// tag.appendChild(text)
let noCardsOntheTable = true
let isGameStart = false
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards-el')
let playerEl = document.getElementById('player-el')

/* Start Game  */
function startGame() {
    isAlive = true
    renderGame()
}
/* Start Game - end */

/* Render Game */
function renderGame() {
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    for (let i = 0; i < 2; i++) {
        if (i === 0 && firstCard === firstCard.indexOf("s")) {

        }
    }
}
/* Render Game - end */

/* getRandomCard */
function getRandomCard() {
    randomCard = Math.floor(Math.random() * 52)
    console.log("getRandomCard(); ", deck[randomCard])
    return deck[randomCard]
}
/* getRandomCard - end */
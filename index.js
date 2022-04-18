let randomCard
let deck = [
    "1s", "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s", "10s", "10js", "10qs", "10ks",
    "1h", "2h", "3h", "4h", "5h", "6h", "7h", "8h", "9h", "10h", "10jh", "10qh", "10kh",
    "1d", "2d", "3d", "4d", "5d", "6d", "7d", "8d", "9d", "10d", "10jd", "10qd", "10kd",
    "1c", "2c", "3c", "4c", "5c", "6c", "7c", "8c", "9c", "10c", "10jc", "10qc", "10kc"
]
let player = {
    name: "Grasshopper",
    chips: 50,
    sayHello: function () {
        console.log("hello")
    }
}
player.sayHello()
// let tag = document.createElement('p')
// let text = document.createTextNode("dsadasdas")
// tag.appendChild(text)
let firstCard, secondCard
let noCardsOntheTable = true
let isGameStart = false
let cards = []
let sum = 0
let hasBlackJack = false
let hasAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards-el')
let playerEl = document.getElementById('player-el')

playerEl.textContent = player.name + ": " + player.chips + " TL"
getRandomCard()

/* Call cards function */
function callCards() {
    if (hasAlive === true && hasBlackJack === false && noCardsOntheTable === false) {
        console.log("call cards: ", randomCard)
        if (randomCard <= 12) {
            let cardT = document.createElement("card-t")
            cardT.setAttribute("suit", "spades")
            cardT.setAttribute("rank", randomCard + 1)
            let element = document.querySelector('.box2')
            element.appendChild(cardT)
        } else if (randomCard <= 25) {
            let cardT = document.createElement("card-t")
            cardT.setAttribute("suit", "hearts")
            cardT.setAttribute("rank", randomCard - 12)
            let element = document.querySelector('.box2')
            element.appendChild(cardT)
        } else if (randomCard <= 38) {
            let cardT = document.createElement("card-t")
            cardT.setAttribute("suit", "diamonds")
            cardT.setAttribute("rank", randomCard - 25)
            let element = document.querySelector('.box2')
            element.appendChild(cardT)
        } else {
            let cardT = document.createElement("card-t")
            cardT.setAttribute("suit", "clubs")
            cardT.setAttribute("rank", randomCard - 38)
            let element = document.querySelector('.box2')
            element.appendChild(cardT)
        }

    }
    if (noCardsOntheTable === true) {
        noCardsOntheTable = false
        let cardT = document.createElement("card-t")
        cardT.setAttribute("suit", "spades")
        cardT.setAttribute("rank", firstCard)
        let element = document.querySelector('.box2')
        element.appendChild(cardT)
    }
}
/* Call cards function - end */

/*Random Card */
function getRandomCard() {                      // functions get so called hoisted to the top, meaning that it s accassible even at line 1
    // return Math.ceil(Math.random() * 13);
    randomCard = Math.floor(Math.random() * 52)
    if (randomCard <= 12) {
        console.log(parseInt(deck[randomCard]))
        return parseInt(deck[randomCard])
    } else if (randomCard <= 25) {
        console.log(parseInt(deck[randomCard]))
        return parseInt(deck[randomCard])
    } else if (randomCard <= 38) {
        console.log(parseInt(deck[randomCard]))
        return parseInt(deck[randomCard])
    } else {
        console.log(parseInt(deck[randomCard]))
        return parseInt(deck[randomCard])
    }

}
/*Random Card - end */

/* StartGame */
function startGame() {
    if (isGameStart === false) {
        isGameStart = true
        hasAlive = true
        firstCard = getRandomCard()
        secondCard = getRandomCard()
        sum = firstCard + secondCard
        // cards.push(firstCard, secondCard)
        cards = [firstCard, secondCard]
        console.log(cards)
        renderGame()
    }

}
/* StartGame - end */

/* renderGame */
function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "sum: " + sum
    if (sum < 21) {
        message = "Do you wanna draw a new card?"
        messageEl.style.color = "yellow"
        messageEl.textContent = message
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        console.log(hasBlackJack)
        messageEl.style.color = "blue"
        messageEl.textContent = message
    } else {
        message = "You've lost"
        hasAlive = false
        console.log(hasAlive)
        messageEl.style.color = "darkred"
        messageEl.textContent = message
    }
}
/* renderGame - end */

/* New Card */
function newCard() {
    if (hasAlive === true && hasBlackJack === false) {  // Logical Operator (&&(and)  ||(or))
        console.log("drawing a new card")
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log("boolean: ", Boolean(sum !== card))
        console.log(sum)
        renderGame();
    }
}
/* New Card - end */
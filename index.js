// 201 -211 arası değişecek (newCards geldiğinde Cards taki 11 yazısı 1 olarak değiştirilecek)
// önceki newcardların bilgileri newCardDeck arrayinde tutuluyor.

let randomCard, firstCard, secondCard, newCard, cardT
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
        document.getElementById('player-el').innerText = player.name + ": " + player.chips + " TL"
    }
}
player.sayHello()
let noCardsOntheTable = true
let isGameStart = false
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards-el')
let element = document.querySelector('.box2')
document.getElementById("new-card-btn").style.visibility = "hidden"
let newCardDeck = []
/* Start Game  */
function startGame() {
    if (isGameStart === false) {  // sadece gamestatr true ise start game buttonu çalşacak
        let startBtn = document.getElementById("start-btn").style.visibility = "hidden"
        document.getElementById("new-card-btn").style.visibility = "visible"
        document.getElementById('new-card-btn').style.visibility = "visible"
        isAlive = true
        isGameStart = true
        firstCard = getRandomCard()
        secondCard = getRandomCard()
        console.log(firstCard, secondCard)
        /* first to cards on the table */
        if (noCardsOntheTable === true) {
            noCardsOntheTable = false
            for (let i = 0; i < 2; i++) {

                if (i === 0 && firstCard.indexOf("s") !== -1) {

                    let cardT = document.createElement("card-t")
                    cardT.setAttribute("suit", "spades")
                    cardT.setAttribute("rank", parseInt(firstCard))
                    element.appendChild(cardT)
                } else if (i === 0 && firstCard.indexOf("h") !== -1) {

                    let cardT = document.createElement("card-t")
                    cardT.setAttribute("suit", "hearts")
                    cardT.setAttribute("rank", parseInt(firstCard))
                    element.appendChild(cardT)
                } else if (i === 0 && firstCard.indexOf("d") !== -1) {

                    let cardT = document.createElement("card-t")
                    cardT.setAttribute("suit", "diamonds")
                    cardT.setAttribute("rank", parseInt(firstCard))
                    element.appendChild(cardT)
                } else if (i === 0 && firstCard.indexOf("c") !== -1) {

                    let cardT = document.createElement("card-t")
                    cardT.setAttribute("suit", "clubs")
                    cardT.setAttribute("rank", parseInt(firstCard))
                    element.appendChild(cardT)
                } else if (i === 1 && secondCard.indexOf("s") !== -1) {

                    let cardT = document.createElement("card-t")
                    cardT.setAttribute("suit", "spades")
                    cardT.setAttribute("rank", parseInt(secondCard))
                    element.appendChild(cardT)
                } else if (i === 1 && secondCard.indexOf("h") !== -1) {

                    let cardT = document.createElement("card-t")
                    cardT.setAttribute("suit", "hearts")
                    cardT.setAttribute("rank", parseInt(secondCard))
                    element.appendChild(cardT)
                } else if (i === 1 && secondCard.indexOf("d") !== -1) {

                    let cardT = document.createElement("card-t")
                    cardT.setAttribute("suit", "diamonds")
                    cardT.setAttribute("rank", parseInt(secondCard))
                    element.appendChild(cardT)
                } else if (i === 1 && secondCard.indexOf("c") !== -1) {

                    let cardT = document.createElement("card-t")
                    cardT.setAttribute("suit", "clubs")
                    cardT.setAttribute("rank", parseInt(secondCard))
                    element.appendChild(cardT)
                }
            }
        }
        /* first to cards on the table - end */
        firstCard = parseInt(firstCard)
        secondCard = parseInt(secondCard)
        console.log(secondCard)
        console.log(firstCard)
        if (firstCard >= 11) {
            firstCard = 10
        } else if (firstCard === 1) {
            firstCard = 11
        }
        if (secondCard >= 11) {
            secondCard = 10
        } else if (secondCard === 1) {
            secondCard = 11
        }
        console.log("firstcard:", firstCard, "second:card", secondCard)
        sum = firstCard + secondCard
        cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
        renderGame()

    }
}
/* Start Game - end */

/* Render Game */
function renderGame() {

    sumEl.textContent = "Sum: " + sum

    if (sum < 21) {
        message = "Do you wanna draw a new card ?"
        messageEl.style.color = "goldenrod"
        messageEl.textContent = message
    } else if (sum === 21) {
        message = "You've got blackjack"
        messageEl.style.color = "blue"
        messageEl.textContent = message
        hasBlackJack = true
        isAlive = false
        document.getElementById("start-btn").style.visibility = "visible"
        document.getElementById("start-btn").innerText = "PLAY AGAIN"
        document.getElementById("new-card-btn").style.visibility = "hidden"
        newCardDeck = []
    } else {
        if (firstCard === 11) {
            firstCard = 1
            sum -= 10
            sumEl.textContent = "Sum:" + sum
            cardsEl.textContent = "Cards: " + firstCard + " " + secondCard + " " + newCard
        } else if (secondCard === 11) {
            secondCard = 1
            sum -= 10
            sumEl.textContent = "Sum:" + sum
            cardsEl.textContent = "Cards: " + firstCard + " " + secondCard + " " + newCard
        } else {
            newCardDeck = []
            message = "You've lost"
            messageEl.style.color = "darkred"
            messageEl.textContent = message
            isAlive = false
            document.getElementById("start-btn").style.visibility = "visible"
            document.getElementById("start-btn").innerText = "PLAY AGAIN"
            document.getElementById('new-card-btn').style.visibility = "hidden"
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

/* new card */

function getNewCard() {

    if (isAlive !== false) {
        newCard = getRandomCard()
        console.log("newcard: ", newCard, "sum: ", sum)
        if (newCard.indexOf("s") !== -1) {
            cardT = document.createElement("card-t")
            cardT.setAttribute("suit", "spades")
            cardT.setAttribute("rank", parseInt(newCard))
            element.appendChild(cardT)
        } else if (newCard.indexOf('h') !== -1) {
            cardT = document.createElement("card-t")
            cardT.setAttribute("suit", "hearts")
            cardT.setAttribute("rank", parseInt(newCard))
            element.appendChild(cardT)
        } else if (newCard.indexOf("d") !== -1) {
            cardT = document.createElement("card-t")
            cardT.setAttribute("suit", "diamonds")
            cardT.setAttribute("rank", parseInt(newCard))
            element.appendChild(cardT)
        } else if (newCard.indexOf("c") !== -1) {
            cardT = document.createElement("card-t")
            cardT.setAttribute("suit", "clubs")
            cardT.setAttribute("rank", parseInt(newCard))
            element.appendChild(cardT)
        }
        newCard = parseInt(newCard)
        newCardDeck.push(newCard)
        if (newCard >= 11) {
            newCard = 10
        } else if (sum + 11 <= 21 && newCard === 1) {
            newCard = 11
        }
        sum += newCard
        cardsEl.textContent += " " + newCard
        console.log("newCardDeck: ", newCardDeck)
        renderGame()
    }

}
/* new card -end */

/* play agian */
function playAgain() {
    if (isAlive === false && isGameStart === true) {
        sumEl.textContent = "sum:"
        cardsEl.textContent = "Cards:"
        messageEl.style.color = "#fff"
        messageEl.textContent = "Want to play a round ?"
        isGameStart = false
        hasBlackJack = false
        noCardsOntheTable = true
        document.getElementById("start-btn").innerText = "START GAME"
        document.getElementById("new-card-btn").style.visibility = "hidden"
        //remove allchilds
        removeAllChildNodes()
        function removeAllChildNodes(parent) {
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
        }
        //remove allchilds
    }
}
/* play agian - end */



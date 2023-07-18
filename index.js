let firstCard = getRandomCard()
let secondCard = getRandomCard()
let hasBlackJack = false
let isAlive = false
let message = ""

let cards = []; //ordered list of items

let sum = 0;

let messageEl = document.getElementById("message-el");
console.log(messageEl);

let sumEl = document.querySelector("#sum-el");
console.log(sumEl);

let cardsEl = document.getElementById("cards-el");
console.log(cardsEl);

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10
    }

    else if (randomNumber === 1) {
        return 11
    }

    else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i += 1) {
        cardsEl.textContent += cards[i] + " "
    }

    if (sum < 21) {
        message = "Do you want to draw a new Card?";
    } else if (sum === 21) {
        message = "You've got a Black Jack! ";
        hasBlackJack = true
    } else {
        message = "You're out of the game";
        isAlive = false
    }

    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        console.log("Drawing a new Card from the deck!");

        let card = getRandomCard();

        sum += card
        cards.push(card)
        renderGame()
    }
}

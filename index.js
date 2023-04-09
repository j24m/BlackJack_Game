let btnStartGame = document.querySelector("#btn-startGame");
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let btnNewCard = document.querySelector("#btn-newCard");
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let playerChips = document.querySelector("#chips-el");

let player = {
  name: "John Doe",
  chips: 145,
};

playerChips.textContent = `${player.name} : $${player.chips}`;

btnStartGame.addEventListener("click", startGame);

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13);
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  sumEl.textContent = `Sum : ${sum}`;
  cardsEl.textContent = `Cards : `;
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += `${cards[i]} `;
  }
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

btnNewCard.addEventListener("click", newCard);

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    cards.push(card);
    console.log(cards);
    sum += card;
    renderGame();
  }
}

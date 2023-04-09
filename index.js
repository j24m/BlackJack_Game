let btnStartGame = document.querySelector("#btn-startGame");
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let btnNewCard = document.querySelector("#btn-newCard");
let cards = [];
let sum = 0;
let wins = 0;
let losses = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let playerWins = document.querySelector("#win-el");
let playerLosses = document.querySelector("#loss-el");

btnStartGame.addEventListener("click", startGame);

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
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
  console.log(cards);
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
    message = "Draw a new card";
  } else if (sum === 21) {
    setTimeout(() => {
      wins++;
      playerWins.textContent = `Wins : ${wins}`;
      messageEl.textContent = "You've got Blackjack!";
      hasBlackJack = true;
      setTimeout(() => {
        messageEl.textContent = "Play Again!";
        sum = 0;
        sumEl.textContent = `Sum : `;
        cards = [];
        console.log(cards);
        cardsEl.textContent = `Cards : ${cards} `;
        isAlive = false;
        hasBlackJack = false;
      }, 3000);
    });
  } else {
    message = "You're out of the game!";
    losses++;
    playerLosses.textContent = `Losses : ${losses}`;
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

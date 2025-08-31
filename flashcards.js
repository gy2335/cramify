let cards = [];
let currentIndex = 0;
let showingFront = true;

function addCard() {
  const front = document.getElementById("frontInput").value.trim();
  const back = document.getElementById("backInput").value.trim();

  if (front && back) {
    cards.push({ front, back });
    document.getElementById("frontInput").value = "";
    document.getElementById("backInput").value = "";
    currentIndex = cards.length - 1;
    showingFront = true;
    displayCard();
  }
}

function displayCard() {
  const cardText = document.getElementById("cardText");
  if (cards.length === 0) {
    cardText.textContent = "Add a card!";
    return;
  }
  cardText.textContent = showingFront ? cards[currentIndex].front : cards[currentIndex].back;
}

function flipCard() {
  if (cards.length === 0) return;
  showingFront = !showingFront;
  displayCard();
}

function nextCard() {
  if (cards.length === 0) return;
  currentIndex = (currentIndex + 1) % cards.length;
  showingFront = true;
  displayCard();
}

function prevCard() {
  if (cards.length === 0) return;
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  showingFront = true;
  displayCard();
}

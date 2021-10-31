class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.pickedCards = [];
  }

  shuffleCards() {
    if (!this.cards) return undefined;

    let tempStack = [];
    this.cards.forEach((element) => {
      tempStack.splice(
        Math.floor(Math.random() * tempStack.length),
        0,
        element
      );
      this.cards = tempStack;
    });
  }

  checkIfPair(card1, card2) {
    let isSame = card1 === card2;
    if (isSame) this.pairsGuessed++;
    this.pairsClicked++;
    return card1 === card2;
  }

  checkIfFinished() {
    console.log('js', this.pairsGuessed === this.cards.length / 2);
    if (this.pairsGuessed === this.cards.length / 2) return true;
    return false;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;

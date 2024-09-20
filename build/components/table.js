import { Baraja } from "./cards";
export class Player {
    constructor(cartas) {
        this.cartas = cartas;
    }
    getCardsPath() {
        let paths = [];
        this.cartas.forEach(carta => paths.push(carta.toStringPath()));
        return paths;
    }
    pop(index) {
        let carta = this.cartas[index];
        this.cartas.splice(index, 1); // Borrar solamente una carta
        return carta;
    }
}
;
export class Enemy extends Player {
    constructor(cartas) {
        super(cartas);
    }
    getCardsPath() {
        let pathBackCard = `backCard.jpg`; // Nombre de imagen trasera de Carta
        let array = new Array(5);
        for (let i = 0; i < 5; i++)
            array[i] = pathBackCard;
        return array;
    }
}
;
export class Table {
    constructor(isTwoPlayers = false) {
        this.deck = new Baraja();
        this.cardsOnTable = []; // Unknown size cards
        this.isTwoPlayers = isTwoPlayers;
        this.deck.shuffle(); // Shuffle at start
    }
    // Checks for values
    isInTable(otherCard) {
        let index = -1;
        this.cardsOnTable.forEach((card, indexCards) => {
            if (card.equalValue(otherCard))
                index = indexCards;
        });
        return index;
    }
    giveCardsToPlayers() {
        if (this.deck.cardsRemaining() === 0)
            return []; // Empty
        let cantPlayers = this.isTwoPlayers ? 2 : 4;
        let cards = new Array(cantPlayers);
        for (let i = 0; i < cantPlayers; i++)
            cards[i] = this.deck.getCardsFromPop();
        return cards;
    }
    getIsTwoPlayers() {
        return this.isTwoPlayers;
    }
    pushToTable(card) {
        let isPoint = false;
        let indexCard = this.isInTable(card);
        if (indexCard === -1)
            this.cardsOnTable.push(card);
        else {
            // Caida || Limpia
            if (indexCard === this.cardsOnTable.length - 1 || this.cardsOnTable.length - 1 === 0)
                isPoint = true;
            this.cardsOnTable.splice(indexCard, 1);
        }
        return isPoint;
    }
}
;

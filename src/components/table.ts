import { Carta40, Baraja } from "./cards"

export class Player {
    private cartas: Array<Carta40>;

    constructor(cartas: Array<Carta40>) {
        this.cartas = cartas;
    }

    getCardsPath(): Array<string> {
        let paths: Array<string> = [];
        this.cartas.forEach(carta => paths.push(carta.toStringPath()));

        return paths;
    }

    pop(index: number): Carta40 {
        let carta = this.cartas[index];
        this.cartas.splice(index, 1); // Borrar solamente una carta

        return carta;
    }
};

export class Enemy extends Player {
    constructor(cartas: Array<Carta40>) {
        super(cartas);
    }

    override getCardsPath(): Array<string> {
        let pathBackCard: string = `backCard.jpg`; // Nombre de imagen trasera de Carta
        let array = new Array(5);

        for (let i = 0; i < 5; i++) array[i] = pathBackCard;

        return array;
    }
};

export class Table {
    private cardsOnTable: Array<Carta40>;
    private deck: Baraja;
    private isTwoPlayers: boolean;

    constructor(isTwoPlayers: boolean = false) {
        this.deck = new Baraja();
        this.cardsOnTable = []; // Unknown size cards
        this.isTwoPlayers = isTwoPlayers;

        this.deck.shuffle(); // Shuffle at start
    }

    // Checks for values
    private isInTable(otherCard: Carta40): number {
        let index: number = -1;

        this.cardsOnTable.forEach((card: Carta40, indexCards: number) => {
            if (card.equalValue(otherCard)) index = indexCards;
        });

        return index;
    }

    public giveCardsToPlayers(): Array<Array<Carta40>> {
        if (this.deck.cardsRemaining() === 0) return []; // Empty

        let cantPlayers: number = this.isTwoPlayers ? 2 : 4;
        let cards: Array<Array<Carta40>> = new Array<Array<Carta40>>(cantPlayers);

        for (let i = 0; i < cantPlayers; i++) cards[i] = this.deck.getCardsFromPop();

        return cards;
    }

    public getIsTwoPlayers(): boolean {
        return this.isTwoPlayers;
    }

    public pushToTable(card: Carta40): boolean {
        let isPoint: boolean = false;
        let indexCard: number = this.isInTable(card);

        if (indexCard === -1) this.cardsOnTable.push(card);
        else {
            // Caida || Limpia
            if (indexCard === this.cardsOnTable.length - 1 || this.cardsOnTable.length - 1 === 0) isPoint = true;
            this.cardsOnTable.splice(indexCard, 1);
        }

        return isPoint;
    }
};

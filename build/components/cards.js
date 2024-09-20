export class Carta40 {
    constructor(value, type) {
        this.value = value;
        this.type = type;
    }
    getValue() {
        return this.value;
    }
    getType() {
        return this.type;
    }
    // Image Path
    toStringPath(imageType = `jpg`) {
        let separator = `_`;
        return `${this.value}${separator}${this.type.slice(0, 3)}.${imageType}`;
    }
    equalValue(otherCard) {
        return this.value === otherCard.getValue();
    }
}
;
export class Baraja {
    constructor() {
        this.cartas = [];
        // Todas las combinaciones posibles de cartas
        let values = ["A", "2", "3", "4", "5", "6", "7", "J", "Q", "K"];
        let types = ["Corazón", "Diamante", "Trébol", "Pica"];
        types.forEach((type) => {
            values.forEach((value) => {
                this.cartas.push(new Carta40(value, type)); // 40 cartas en total
            });
        });
    }
    showAll() {
        this.cartas.forEach((carta) => console.log(carta));
    }
    shuffle() {
        let randomIndex;
        for (let i = 0; i < this.cartas.length; i++) {
            randomIndex = Math.floor(Math.random() * this.cartas.length);
            [this.cartas[i], this.cartas[randomIndex]] = [this.cartas[randomIndex], this.cartas[i]]; // Intercambio
        }
    }
    getCardsFromPop(n = 5, shuffle = false) {
        n = (n > this.cartas.length) ? this.cartas.length : n; // Min Value
        if (shuffle)
            this.shuffle();
        // Devuelve las primeras cartas (recomendable mezclar antes)
        let listaCartas = [];
        for (let i = 0; i < n; i++) {
            listaCartas.push(this.cartas.pop());
        }
        return listaCartas;
    }
    cardsRemaining() {
        return this.cartas.length;
    }
}
;

export class Carta40 {
    private value: string;
    private type: string;

    constructor(value: string, type: string, ) {
        this.value = value;
        this.type = type
    }

    public getValue(): string {
        return this.value;
    }

    public getType(): string {
        return this.type;
    }

    // Image Path
    public toStringPath(imageType: string = `jpg`): string {
        let separator = `_`;
        return `${this.value}${separator}${this.type.slice(0, 3)}.${imageType}`;
    }

    public equalValue(otherCard: Carta40): boolean {
        return this.value === otherCard.getValue();
    }
};

export class Baraja {
    private cartas: Array<Carta40>;

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

    public showAll(): void {
        this.cartas.forEach((carta) => console.log(carta));
    }

    public shuffle(): void {
        let randomIndex: number;
        for (let i = 0; i < this.cartas.length; i++) {
            randomIndex = Math.floor(Math.random() * this.cartas.length);
            [this.cartas[i], this.cartas[randomIndex]] = [this.cartas[randomIndex], this.cartas[i]]; // Intercambio
        }
    }

    public getCardsFromPop(n: number = 5, shuffle: boolean = false): Array<Carta40> {
        n = (n > this.cartas.length) ? this.cartas.length : n; // Min Value
        if (shuffle) this.shuffle();

        // Devuelve las primeras cartas (recomendable mezclar antes)
        let listaCartas: Array<Carta40> = [];
        for (let i = 0; i < n; i++) {
            listaCartas.push(this.cartas.pop()!);
        }

        return listaCartas;
    }

    public cardsRemaining(): number {
        return this.cartas.length;
    }
};

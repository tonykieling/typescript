class Animal {
    private reptiles: Array<string> = [
        'Alligator',
        'Crocodile',
        'Chameleon',
        'Komodo Dragon',
        'Iguana',
        'Salamander',
        'Snake',
        'Lizard',
        'Python',
        'Tortoise',
        'Turtle',
    ];

    // private original: Array<string> = this.reptiles.map(e => e);
    // private original: Array<string> = [...this.reptiles];
    private original: Array<string> = [];

    constructor() {
        console.log("initial state!!!");
        for (let item of this.reptiles) this.original = [...this.original, item];
    }

    shuffle(): void {
        console.log("started: ", JSON.stringify(this.reptiles));
        console.log("original: ", JSON.stringify(this.original));
        for (let i = 0; i < this.reptiles.length - 1; i++) {
            const number: number = Math.floor((Math.random() * this.reptiles.length));
            // console.log(`Array size is ${this.reptiles.length} positions, random number is: ${number}`);
            const temp: string = this.reptiles[number];
            this.reptiles[number] = this.reptiles[i];
            this.reptiles[i] = temp;
            // console.log(`round [${i}]: ${JSON.stringify(this.reptiles)}`);
        }
        console.log("new: ", JSON.stringify(this.reptiles) + "\n\n");
        // console.log("shuffle is done!");
    }
}

const a1 = new Animal();
a1.shuffle();
a1.shuffle();

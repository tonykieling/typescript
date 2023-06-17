"use strict";
class Animal {
    constructor() {
        this.reptiles = [
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
        this.original = [];
        console.log("initial state!!!");
        for (let item of this.reptiles)
            this.original = [...this.original, item];
    }
    shuffle() {
        console.log("started: ", JSON.stringify(this.reptiles));
        console.log("original: ", JSON.stringify(this.original));
        for (let i = 0; i < this.reptiles.length - 1; i++) {
            const number = Math.floor((Math.random() * this.reptiles.length));
            // console.log(`Array size is ${this.reptiles.length} positions, random number is: ${number}`);
            const temp = this.reptiles[number];
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

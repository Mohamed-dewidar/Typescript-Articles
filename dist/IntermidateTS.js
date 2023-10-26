class Fruit {
    constructor(name, mass, color) {
        this.name = name;
        this.mass = mass;
        this.color = color;
    }
    static createBanana() {
        return new Fruit('banana', 108, 'yellow');
    }
    getFruit() {
        console.log(this);
    }
}
const MyFruit = Fruit;
const f1 = MyFruit.createBanana();
console.log(f1);
const banana = Fruit.createBanana();
const f2 = banana.getFruit();
const color = { red: 20, green: 30, blue: 50 };
let anyke;

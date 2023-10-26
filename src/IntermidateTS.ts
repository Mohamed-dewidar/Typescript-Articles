type CatNames = 'Piski' | 'Lili' | 'Beans';
type NumberSet = 1 | 2 | 3;
type DogNames = 'Jax' | 'Beans';
type BeansOnlt = (CatNames | DogNames) & 'Beans' & string;

class Fruit {
  constructor(public readonly name: string, public readonly mass: number, public readonly color: string) {}

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

type customType = typeof MyFruit extends typeof Fruit ? true : false;

type FavoriteColors =
  | 'dark sienna'
  | 'van dyke brown'
  | 'yellow ochre'
  | 'sap green'
  | 'titanium white'
  | 'phthalo green'
  | 'prussian blue'
  | 'cadium yellow'
  | [number, number, number]
  | { red: number; green: number; blue: number; alpha: number }
  | { red: number; green: number; blue: number };

type StringColors = FavoriteColors & { red: number };
type StringColors2 = Extract<FavoriteColors, { red: number }>;

const color: StringColors2 = { red: 20, green: 30, blue: 50 };
let anyke: keyof Window;

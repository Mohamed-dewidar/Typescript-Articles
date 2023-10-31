/**
 *
 * This File meant to be as play ground to try and test code snippets
 */

// let coffee: {
//     name: String,
//     location: String,
//     price: Number
// }

function getCoffe(coffee: { name: String; location: String; price: Number }) {
  console.log(coffee);
}

let coffee = {
  name: 'Coffee',
  location: 'Berlin',
  price: 200,
  expire: true,
};

const coffeArr: readonly [string] = ['1'];

console.log(typeof coffeArr);

let myName: myInterface = {
  name: 'Mohamed',
  age: 25,
};

interface myInterface {
  age: number;
}

interface myInterface {
  name: string;
}

// Functions

// interface addInterface {
//     (a: number,b: number): void
// }

// const add: addInterface = (a,b) => a+b

// console.log(add(1,2))

// function logCoffee (c1: string, c2: string)
// function logCoffee (c1: number, c2: number)
// function logCoffee(c1: string | number, c2: string | number) {
//     console.log(c1,c2)
// }

// logCoffee(1,2)

// class Coffee{
//     private expire: boolean
//     public name: string
//     constructor(expire: boolean, name: string){
//         this.expire = expire
//         this.name = name
//     }
// }

// let c1 = new Coffee(false, 'Espresso')
// console.log(c1.name)

// interface MyObj {
//     arr?: number[],
//     len?: number,
//     name?: string
// }
// let obj: MyObj = { name: '123' }
// obj.arr.push(1)
// console.log(obj)

interface customDic {
  [k: string]: listInfo;
}

interface listInfo {
  id: string;
  name: string;
  price: number;
}

let mylist = [
  { id: '1', name: 'Col', price: 200 },
  { id: '2', name: 'Row', price: 200 },
  { id: '3', name: 'Grid', price: 200 },
  { id: '4', name: 'Cola', price: 200 },
  { id: '5', name: 'serve', price: 200 },
];

function listToDict<T>(list: T[], callback: (arg: T) => string) {
  const dict: { [k: string]: T } = {};

  list.forEach(element => {
    dict[callback(element)] = element;
  });

  console.log(dict);
}

// listToDict(mylist, ele => ele.id.toString());

interface myType {
  name: string;
  id: number;
}

type MyCoffee = {
  arabica: {
    id: 1;
    location: 'Brazil';
  };
  robusta: {
    id: 2;
    location: 'Tagmo3';
  };
};

type valueOf<T> = T[keyof T];
type valueOfCoffee = valueOf<MyCoffee>;

const CoffeeObj = {};
Object.defineProperty(CoffeeObj, 'id', { value: 2 });

class Pop {
  private id;
  constructor(...items) {
    this.id = 1;
  }
}

let p1 = new Pop(1, 2, 3);
console.log(p1);

const api = (function () {
  const o = {
    copyToClipboard(str) {
      return navigator.clipboard.writeText(str);
    },
  };
  return o;
})();

let copyBtn = document.createElement('button');
copyBtn.id = 'copy-to-clipboard';
document.body.appendChild(copyBtn);

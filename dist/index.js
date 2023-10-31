/**
 *
 * This File meant to be as play ground to try and test code snippets
 */
// let coffee: {
//     name: String,
//     location: String,
//     price: Number
// }
function getCoffe(coffee) {
    console.log(coffee);
}
let coffee = {
    name: 'Coffee',
    location: 'Berlin',
    price: 200,
    expire: true,
};
const coffeArr = ['1'];
console.log(typeof coffeArr);
let myName = {
    name: 'Mohamed',
    age: 25,
};
let mylist = [
    { id: '1', name: 'Col', price: 200 },
    { id: '2', name: 'Row', price: 200 },
    { id: '3', name: 'Grid', price: 200 },
    { id: '4', name: 'Cola', price: 200 },
    { id: '5', name: 'serve', price: 200 },
];
function listToDict(list, callback) {
    const dict = {};
    list.forEach(element => {
        dict[callback(element)] = element;
    });
    console.log(dict);
}
const CoffeeObj = {};
Object.defineProperty(CoffeeObj, 'id', { value: 2 });
class Pop {
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

/****************************************** 😪😪😪😪😪😪😪😪TypeScript: How to get types from arrays😪😪😪😪😪😪😪😪😪 */
/*
******************* CONST assertions ******************
https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions
*/
// Type '"hello"'
let randomString = 'hello';
let hello = 'hello'; //no literal types in that expression should be widened (e.g. no going from "hello" to string)
let hello_again = 'hello_again';
// hello_again = 'Bye' //😡 Error: Type '"Bye"' is not assignable to type '"hello_again"'
// Type 'readonly [10, 20]'
let tupleSize2 = [10, 20]; //array literals become readonly tuples
// tupleSize2.push(1) //😡 Error: Property 'push' does not exist on type 'readonly [10, 20]
// Type '{ readonly text: "hello" }'
let fallback = ['Verdana', 'Constantia'];
let htmlParEl = { text: 'hello', font: { size: 12, family: 'sans-serif', fallback } }; //object literals get readonly properties
// htmlParEl.text = 'Bye' // 😡Error: Cannot assign to 'text' because it is a read-only property
// htmlParEl.font.fallback = []   // 😡Error: Cannot assign to 'fallback' because it is a read-only property
htmlParEl.font.fallback.push('custom-font');
// Error!😡 A 'const' assertion can only be applied to a to a string, number, boolean, array, or object literal.
// let a = (Math.random() < 0.5 ? 0 : 1) as const;
// let b = (60 * 60 * 1000) as const;
let c = Math.random() < 0.5 ? 0 : 1;
const key = 'age';
// Access using number to get type of array elements
const MyArray = [
    { name: 'Alice', age: 15 },
    { name: 'Bob', age: 23 },
    { name: 'Eve', age: 38 },
];
/*
******************* Keyof Type Operator ******************
https://www.typescriptlang.org/docs/handbook/2/keyof-types.html

*/
// The keyof operator takes an object type and produces a string or numeric literal union of its keys
let cat = {
    name: 'Piski',
    age: 1,
    1: 'One',
    owner: {
        nameOfOwner: 'Ahmed',
        ageOfOwner: 22,
        location: '6th of October',
    },
};
/*
******************* Create a Union type from an Array or Object ******************
https://bobbyhadz.com/blog/typescript-create-union-type-from-array
*/
// 👇️ From Array 👇️ //
//  const sizes: readonly ["small", "medium", "large"]
const sizes = ['small', 'medium', 'large'];
let shirtSize = 'large';
// let shirtSize2: SizesUnion = 'largee'; //😡 Error: Type '"largee"' is not assignable to type '"small" | "medium" | "large"'. Did you mean '"large"'?
//👇️ From Object 👇️ //
const PISKI = {
    name: 'Piski',
    age: 1,
    owner: {
        name: 'Ahmed',
        age: 22,
        location: '6th of October',
    },
};
//👇️ From Array of Objects 👇️ //
const SHAPES = [
    { kind: 'circle', area: 100 },
    { kind: 'square', area: 50 },
];
// { kind: 'circle', area: 100 }              { kind: 'circle', area: 100 } // 'kind' | 'area

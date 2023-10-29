/****************************************** 😪😪😪😪😪😪😪😪TypeScript: Mapped Types😪😪😪😪😪😪😪😪😪 **************************************/

/******************* ⏺⏺⏺ Index Signature ⏺⏺⏺ ******************
// ✅ mapped types art build on index signature
*/
type Dict<T> = { [key: string]: T };
type funcType = (...args: any[]) => boolean;
let myDic: Dict<funcType> = { IsValid: x => x === 2 };

/*  
******************* ⏺⏺⏺ Mapped Types ⏺⏺⏺ ******************
🔗 https://www.typescriptlang.org/docs/handbook/2/mapped-types.html

//✅ Mapped types is used to generate types from union types
*/
type RGB = {
  R: number;
  G: number;
  B: number;
};
type Color = {
  readonly red?: RGB;
  readonly green?: RGB;
  readonly yellow?: RGB;
  readonly white?: RGB;
};

type readonlyToggleColor = { [key in keyof Color]: boolean };
//  ❗❗❗ keyof Color will give "red" | "green" | "yellow" | "white"

// ❗❗❗ think of [key in keyof Color] as loop but it's not a loop
// it will create property keys of the keyof types

/******************* ⏺⏺⏺ Mapping Modifiers ⏺⏺⏺ ******************
🔗 https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#mapping-modifiers

 - ✅ There are two additional modifiers which can be applied during mapping: readonly and ? which affect mutability and optionality respectively.
 - ✅ You can remove or add these modifiers by prefixing with - or +. If you don’t add a prefix, then + is assumed.
*/

// 1️⃣ readonly ==> Removes 'readonly' attributes from a type's properties
type toggleColor = { -readonly [key in keyof Color]: boolean };
//  ❗❗❗ using -readonly will make the property editable

// 2️⃣ // Removes 'optional' attributes from a type's properties
type requiredColor = { [key in keyof Color]-?: boolean };
//  ❗❗❗ using -? will make the property required

/******************* ⏺⏺⏺ Template Literal Types ⏺⏺⏺ ******************
🔗 https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html

 📙📙📙 Much more about Template Literal Link Above 👆👆👆
 - ✅ When a union is used in the interpolated position, the type is the set of every possible string literal that could be represented by each union member:
*/
type ColorsLiteral = 'red' | 'dark' | 'success' | 'danger';
type styleProps = 'text' | 'bg' | 'border';
type StyleClasses = `${styleProps}-${ColorsLiteral}`;

/******************* ⏺⏺⏺ Key Remapping via as ⏺⏺⏺ ******************
🔗 https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as


*/
// 1️⃣ You can leverage features like template literal types to create new property names from prior ones
type ColorGetters = { [key in keyof Color as `get${Capitalize<key>}`]: () => RGB };

// 2️⃣ You can filter out keys by producing never via a conditional type
type filterRed = [{ [key in keyof Color as Exclude<key, 'red'>]: Color[key] }];

/******************* ⏺⏺⏺ Excluding False Values ⏺⏺⏺ ******************
🔗 https://medium.com/hypersphere-codes/advanced-typescript-mapped-types-and-more-b5d023bd6539
*/

const divColors = { yellow: true, red: true, green: false, white: true } as const;
type filterActive<T> = { [key in keyof T as T[key] extends true ? key : never]: T[key] };
type activeColors = filterActive<typeof divColors>;

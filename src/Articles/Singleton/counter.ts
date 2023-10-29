/***************************** 😪😪😪😪😪😪😪😪 Singleton 😪😪😪😪😪😪😪😪  ***************************/

// 🔗 https://javascriptpatterns.vercel.app/patterns/design-patterns/singleton-pattern

/******************* ⏺⏺⏺ Class Singleton ⏺⏺⏺ *******************/

let instance;

class Counter {
  count: number;
  constructor() {
    // 1 - check if there exists an instance of that object
    if (instance) {
      throw new Error('There is exist a counter');
    }

    this.count = 0;
    // 2 -
    instance = this;
  }

  increment() {
    this.count++;
    console.log(this.count);
  }
  decrement() {
    this.count--;
    console.log(this.count);
  }
}

// 2. Setting a variable equal to the the frozen newly instantiated object, by using the built-in `Object.freeze` method.
// This ensures that the newly created instance is not modifiable.
// export const myCount = Object.freeze(new Counter());

/******************* ⏺⏺⏺ Object Singleton ⏺⏺⏺ *******************/

let count2 = 0;

export const myCount2 = Object.freeze({
  increment: () => console.log(++count2),
  decrement: () => console.log(--count2),
});

// ❗❗❗ Modules by default are Singleton

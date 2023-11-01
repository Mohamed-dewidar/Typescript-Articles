/****************************************** 😪😪😪😪😪😪😪😪Design Patterns: Observer Pattern 😪😪😪😪😪😪😪😪😪 **************************************/
// 🔗 https://javascriptpatterns.vercel.app/patterns/design-patterns/observer-pattern

// ✅ Use observables to notify subscribers when an event occurs

/*
	Observer conssit of 2 parts 
	1️⃣ Observable Object which can be observed by subscribers in order to notify them.
	2️⃣ Subscribers, which can subscribe to and get notified by the observable object.
*/

const observers = [];

export default Object.freeze({
  notify: data => observers.forEach(observer => observer(data)),
  subscribe: (func: (...args) => void) => observers.push(func),
  unSubscribe: (func: (...args) => void) => {
    observers.filter(ele => ele === func);
  },
});

// ❗❗❗ The observer objects aren't tightly coupled to the observable object, they are loose coupled
// ❗❗❗ The observable object is responsible for monitoring the events, while the observers simply handle the received data.

/******************* ⏺⏺⏺ Coupling ⏺⏺⏺ ******************
🔗 https://www.techtarget.com/searchnetworking/definition/loose-coupling#:~:text=Loose%20coupling%20is%20an%20approach,one%20element%20has%20of%20another.

 📙📙📙 Much more about Coupling Link Above 👆👆👆

 //✅ Coupling is a design principle in software engineering that refers to the degree of independence between components or modules in a system. 
 * It is a measure of how much one component knows about the inner workings or details of another component. 
*/

/**
  1️⃣ Loose Coupling 
 * In a loosely coupled system, components interact with each other through well-defined 
 * interfaces and without intimate knowledge of each other's internal structures.
 */

/**
  2️⃣ tight coupling
 * Tightly coupled systems have their various components linked closely to each other such that a change in one element likely affects the other elements. 
  The overall system and its elements work together to generate an output
 */

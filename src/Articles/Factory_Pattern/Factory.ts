import { v4 as uuidv4 } from 'uuid';

/****************************************** 😪😪😪😪😪😪😪😪Design Patterns: Factory Pattern 😪😪😪😪😪😪😪😪😪 **************************************/
// 🔗 https://javascriptpatterns.vercel.app/patterns/design-patterns/factory-pattern

// ✅ With the Factory Pattern, we can use a special function - the factory function - to create many of the same objects

/******************* ⏺⏺⏺ Create Factory Function ⏺⏺⏺ ******************/

const User = (firstName: string, lastName: string, location: string) => ({
  id: uuidv4(),
  name: {
    first: firstName,
    last: lastName,
  },
  location,
});

/******************* ⏺⏺⏺ Consume Factory Function ⏺⏺⏺ ******************/

const user1: ReturnType<typeof User> = User('hermand', 'moh', 'Brazil');
const user2: ReturnType<typeof User> = User('Jack', 'Essam', 'Brazil');
console.log(user1);

/*
	❗❗❗ The factory pattern is useful when we have to create multiple objects that share the same properties, 
	without having to repeat the same code over and over. 
	A factory function can easily return a custom object depending on the current environment, or user-specific configuration.
*/

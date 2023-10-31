/****************************************** 😪😪😪😪😪😪😪😪Design Patterns: Proxy Pattern😪😪😪😪😪😪😪😪😪 **************************************/
// 🔗 https://javascriptpatterns.vercel.app/patterns/design-patterns/proxy-pattern
// 🔗 https://dev.to/jsmanifest/the-power-of-proxy-pattern-in-javscript-6fp
// 🔗 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

/******************* ⏺⏺⏺ Object Declaration ⏺⏺⏺ *******************/
type User = {
  id: `#${string}`;
  name: {
    first: string;
    last: string;
  };
  location: {
    country: string;
    city: string;
    street: string;
  };
  email: string;
};

const user: User = {
  id: '#124012',
  name: {
    first: 'Kayota',
    last: 'Lasner',
  },
  location: {
    country: 'Germany',
    city: 'Berlin',
    street: 'RauchStrasse',
  },
  email: 'Kayota@mail.com',
};

/******************* ⏺⏺⏺ Access Object without proxy ⏺⏺⏺ *******************/

// user.id = '#122221';
// console.log(user.id);

/******************* ⏺⏺⏺ using Proxy Pattern ⏺⏺⏺ *******************/

const userProxy = new Proxy(user, {
  get: (target, prop) => {
    console.log(`Access the ${prop.toString()} from User`);
    return target[prop];
  },
  set: (target, prop, value) => {
    if (prop.toString() === 'id') {
      throw new Error('ID is not editable propery');
    }

    console.log(`Set the ${prop.toString()} from User`);
    return (target[prop] = value);
  },
});

userProxy.id = '#122221'; // 😡 TypeError: 'set' on proxy: trap returned falsish for property 'id'
console.log(userProxy.id);

console.log('Proxy ==> ', userProxy.email);
userProxy.email = 'Kayota00@mail.com';
console.log('Proxy ==> ', userProxy.email);

// ❗❗❗ Proxy has to return true in order to pass the update to the actual object
// ❗❗❗ Proxies make it easy to add functionality when interacting with a certain object, such as validation, logging, formatting, notifications, debugging.
// ❗❗❗ Proxy Pattern often used with Reflect object [🔗 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect ]

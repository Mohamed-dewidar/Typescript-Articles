import Observer from './Observer.js';

let title = '';
function CustomButtonTitle(data) {
  title = data;
  console.log(`Custom Button Title is ${title}`);
}

Observer.subscribe(CustomButtonTitle);
setTimeout(() => {
  Observer.notify('Coffee');
}, 2000);

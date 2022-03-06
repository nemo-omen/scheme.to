import { select, create, insert, replace, remove } from './src/util/domUtils.js';
import Store from './src/lib/Store.js';
import Component from './src/lib/Component.js';

const app = (function () {
   const root = select('#app');
   const state = Store();

   const p = create('p');
   p.innerText = 'I am a paragraph';

   insert(root, p);
}());

const template = function (strings, ...values) {
   let str = '';
   strings.forEach((string, i) => {
      str += `${string}${values[i] || ''}`;
   });
   return str;
}

const comp = Component({name: 'Jeff'}, template`This is a string with ${500}`);

console.log(comp);
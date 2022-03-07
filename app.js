import { select, create, insert, replace, remove } from './src/util/domUtils.js';
import Store from './src/lib/Store.js';
import Component from './src/lib/Component.js';
import Header from './src/components/Header.js';

const store = Store();

store.set('title', 'Scheme.to');

const app = Component('#app', {
   data: store,
   template: function (props) {
      return `
         ${Header('#app', {data: store, ...props})}
      `;
   },
});

app.render();

store.set('title', 'Whatever');
store.set('title', 'Another thing');
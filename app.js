import {select} from './src/util/domUtils.js';
// routeListener is an IIFE that attaches a DOMContentLoaded
// listener to the window
import routeListener from './src/lib/router.js';

import {store} from './src/lib/Store.js';

const menuButton = select('.menu-toggle');
const menu = select('nav');

routeListener.listen();

menuButton.addEventListener('click', function () {
   menu.classList.toggle('menu-open');
});

// listen for custom 'pageloaded' event
window.addEventListener('pageloaded', function (event) {
   console.log('loadedPage: ', event.detail);
   store.set(
      'currentPage', 
      event.detail
   );
});
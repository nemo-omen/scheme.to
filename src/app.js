import {select} from './util/domUtils.js';
// import routeListener from './lib/router.js';
// import {store} from './lib/Store.js';

const menuButton = select('.menu-toggle');
const menu = select('nav');

// routeListener.listen();

menuButton.addEventListener('click', function () {
   menu.classList.toggle('menu-open');
});

// listen for custom 'pageloaded' event
// window.addEventListener('pageloaded', function (event) {
//    console.log('loadedPage: ', event.detail);
//    store.set(
//       'currentPage', 
//       event.detail
//    );
// });
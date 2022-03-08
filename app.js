import { select, create, insert, replace, remove } from './src/util/domUtils.js';
// A global state object that 
import Store from './src/lib/Store.js';
// routeListener is an IIFE that attaches a DOMContentLoaded
// listener to the window
import routeListener from './src/lib/router.js';

const menuButton = select('.menu-toggle');
const menu = select('nav');

menuButton.addEventListener('click', function (event) {
   menu.classList.toggle('menu-open');
});

// listen for custom 'pageloaded' event
window.addEventListener('pageloaded', function (event) {
   // console.log(event);
})
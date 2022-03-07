import { select, create, insert, replace, remove } from './src/util/domUtils.js';

import Store from './src/lib/Store.js';

import { routeListener } from './src/lib/router.js';

const menuButton = select('.menu-toggle');
const menu = select('nav');

menuButton.addEventListener('click', function (event) {
   menu.classList.toggle('menu-open');
});
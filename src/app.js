import {select} from './util/domUtils.js';
import {store} from './lib/Store.js';
import routeListener from './lib/router.js';
import {Sidebar} from './components/Sidebar.js';

let projects = [];
const projectsMenu = document.getElementById('projects-menu');
const sidebar = document.querySelector('#sidebar');
const mainNav = document.querySelector('#main-nav');
const newProjectButton = document.querySelector('#new-project-button');
const menuButton = select('#menu-toggle');

routeListener.listen();

const loadProjects = function () {
   projects = store.get('projects');
   
   if (projects !== null && projects !== 'undefined') {
      store.set('projects', [...projects]);
   }

   Sidebar(mainNav, projects);
};



menuButton.addEventListener('click', function () {
   sidebar.classList.toggle('menu-open');
});

newProjectButton.addEventListener('click', function (event) {
   console.log(event);
});

document.addEventListener('DOMContentLoaded', function () {
   loadProjects();
});

// listen for custom 'pageloaded' event
// window.addEventListener('pageloaded', function (event) {
//    console.log('loadedPage: ', event.detail);
//    store.set(
//       'currentPage', 
//       event.detail
//    );
// });
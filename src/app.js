import {select} from './util/domUtils.js';
import {ProjectService} from './services/projects.service.js';
import {store} from './lib/Store.js';
import routeListener from './lib/router.js';


let projects = [];
const projectsMenu = document.getElementById('projects-menu');
const menuButton = select('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

routeListener.listen();

const loadProjects = function () {
   projects = ProjectService.getAll();
   
   if (projects.length > 0) {
      projects.forEach((project) => insertProjectLink(project));
      store.set('projects', [...projects]);
   }
};

const insertProjectLink = function (project) {
   const template = `
      <li class="menu-item">
         <a class="menu-item-link" href="/${project.slug}" data-route>${project.title}</a>
      </li>
   `;

   projectsMenu.innerHTML += template;
};

menuButton.addEventListener('click', function () {
   sidebar.classList.toggle('menu-open');
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
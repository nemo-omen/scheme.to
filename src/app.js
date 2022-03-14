import {select} from './util/domUtils.js';
import {ProjectService} from './services/projects.service.js';
// import routeListener from './lib/router.js';
// import {store} from './lib/Store.js';


let projects = [];
const projectsDropdown = document.getElementById('projects-dropdown');
const projectsMenu = document.getElementById('projects-menu');
const menuButton = select('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

// routeListener.listen();

const insertProjectLink = function (project) {
   const template = `
      <li class="menu-item">
         <a class="menu-item-link" href="/projects/${project.slug}">${project.title}</a>
      </li>
   `;

   projectsMenu.innerHTML += template;
};

menuButton.addEventListener('click', function () {
   sidebar.classList.toggle('menu-open');
});

document.addEventListener('DOMContentLoaded', function () {
   projects = ProjectService.getAll();
   
   if (projects.length > 0) {
      console.log(projects);
      projects.forEach((project) => insertProjectLink(project));

   }
});

// listen for custom 'pageloaded' event
// window.addEventListener('pageloaded', function (event) {
//    console.log('loadedPage: ', event.detail);
//    store.set(
//       'currentPage', 
//       event.detail
//    );
// });
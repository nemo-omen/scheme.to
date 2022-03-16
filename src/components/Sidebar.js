import {render} from '../util/render.js';
import {store} from '../lib/Store.js';

const Sidebar = (function () {
   return function (outlet, projectsArray) {
      projectsArray = projectsArray.sort((a, b) => a.dueDate > b.dueDate);
      const template = `
         <ol id="projects-menu" class="sidebar-menu">
            ${projectsArray.map(function (project) {
      return `<li class="menu-item">
                  <a class="menu-item-link" href="/${project.slug}" data-route>${project.title}</a>
                  <time>Due: ${project.dueDate}</time>
               </li>`;}).join(',').replaceAll(',', '')}
         </ol>`;

      render(outlet, template);

      const projectsMenu = document.querySelector('#projects-menu');

      const insertProjectLink = function (project) {
         const tempNode = document.createElement('template');
         const tpl = `
            <li class="menu-item">
               <a class="menu-item-link" href="/${project.slug}" data-route>${project.title}</a>
               <time>Due: ${project.dueDate}</time>
            </li>
         `;
         tempNode.innerHTML = tpl;
         projectsMenu.insertBefore(tempNode.cloneNode(true), projectsMenu.firstChild);
      };
   };

}());

export {Sidebar};
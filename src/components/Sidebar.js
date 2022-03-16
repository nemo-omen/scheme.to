import {render} from '../util/render.js';

const Sidebar = (function () {
   return function (outlet, projectsArray) {
      const template = `
         <ol id="projects-menu" class="sidebar-menu">
            ${projectsArray.map(function (project) {
      return `<li class="menu-item">
                  <a class="menu-item-link" href="/${project.slug}" data-route>${project.title}</a>
                  <time>Due: ${project.dueDate}</time>
               </li>`;}).join(',').replaceAll(',', '')}
         </ol>`;
      
      render(outlet, template);

      const projectsMenu = document.querySelector('#project-menu');

      const insertProjectLink = function (project) {
         const template = `
            <li class="menu-item">
               <a class="menu-item-link" href="/${project.slug}" data-route>${project.title}</a>
               <time>Due: ${project.dueDate}</time>
            </li>
         `;

         projectsMenu.innerHTML += template;
      };

   };

}());

export {Sidebar};
import {render} from '../util/render.js';
import {dispatchLoaded} from '../util/dispatchLoaded.js';

const Day = (function () {
   return function (outlet) {
      
      const template = `
         <div class="page planner-page" id="planner">
            <div class="planner-header">
               <div class="planner-header-section planner-meta">
                  <fieldset>
                     <label for="project-name">Project:</label>
                     <input type="text" id="project-name"/>
                  </fieldset>
                  <fieldset>
                     <label for="project-start-date">Start Date:</label>
                     <input type="text" id="project-start-date"/>
                  </fieldset>
                  <fieldset>
                     <label for="project-name">Due Date:</label>
                     <input type="text" id="project-due-date"/>
                  </fieldset>
                  <fieldset>
                     <label for="project-name">Status:</label>
                     <select id="project-name">
                        <option value="">Set Status</option>
                        <option value="planning">Planning</option>
                        <option value="working">Working</option>
                        <option value="waiting">Waiting For</option>
                        <option value="completed">Completed</option>
                        <option value="abandoned">Abandoned</option>
                     </input>
                  </fieldset>
               </div>
               <div class="planer-header-section">
                  
               </div>
            </div>
      `;

      // mount the above template to the parent node
      render(outlet, template);

      // dispatch pageLoaded event
      dispatchLoaded('day');
   };

}());

export default Object.freeze(Day);
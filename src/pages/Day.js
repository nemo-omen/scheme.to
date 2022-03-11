import {render} from '../util/render.js';
import {dispatchLoaded} from '../util/dispatchLoaded.js';

const Day = (function () {
   return function (outlet) {
      
      const template = `
         <div class="page planner-page" id="planner">
            <div class="planner-header">

               <div class="planner-header-section planner-meta">
                  <fieldset>
                     <legend id="name-label">Project:</legend>
                     <input type="text" id="name-input" aria-labelledby="name-label"/>
                  </fieldset>
                  <fieldset>
                     <legend id="start-date-label">Start Date:</legend>
                     <input type="text" id="start-date-input" aria-labelledby="start-date-label"/>
                  </fieldset>
                  <fieldset>
                     <legend id="due-date-label">Due Date:</legend>
                     <input type="text" id="due-date-input" aria-labelledby="due-date-label"/>
                  </fieldset>
                  <fieldset>
                     <legend id="status-input-label">Status:</legend>
                     <select id="status-input" aria-labelledby="status-input-label">
                        <option value="">Set Status</option>
                        <option value="planning">Planning</option>
                        <option value="working">Working</option>
                        <option value="waiting">Waiting For</option>
                        <option value="completed">Completed</option>
                        <option value="abandoned">Abandoned</option>
                     </select>
                  </fieldset>
               </div>

               <div class="planner-header-section">
                  <fieldset>
                     <legend id="goals-label">Goals:</legend>
                     <input type="text" id="goal-1-input"/>
                     <button>+</button>
                  </fieldset>
               </div>

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
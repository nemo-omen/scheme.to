import {render} from '../util/render.js';
import {dispatchLoaded} from '../util/dispatchLoaded.js';
import {Tag} from '../components/Tag.js';

const Day = (function () {
   return function (outlet) {
      const tags = ['Tag', 'Something', 'Now', 'We', 'Add'];
      const template = `
         <div class="page planner-page" id="planner">
            <div class="planner-header">

               <div class="planner-column">
                  <details open="true">
                     <summary>
                        <h2>Project Info</h2>
                     </summary>
                     <fieldset>
                        <label class="order-2" for="name-input" id="name-label">Project:</label>
                        <input class="order-1" type="text" id="name-input" aria-labelledby="name-label"/>
                     </fieldset>
                     <fieldset>
                        <label class="order-2" for="start-date-input" id="start-date-label">Start Date:</label>
                        <input class="order-1" type="text" id="start-date-input" aria-labelledby="start-date-label"/>
                     </fieldset>
                     <fieldset>
                        <label class="order-2" for="due-date-input" id="due-date-label">Due Date:</label>
                        <input class="order-1" type="text" id="due-date-input" aria-labelledby="due-date-label"/>
                     </fieldset>
                     <fieldset>
                        <label class="order-2" id="status-input-label" for="status-input">Status:</label>
                        <select class="order-1" id="status-input" aria-labelledby="status-input-label">
                           <option value=""></option>
                           <option value="planning">Planning</option>
                           <option value="working">Working</option>
                           <option value="waiting">Waiting For</option>
                           <option value="completed">Completed</option>
                           <option value="abandoned">Abandoned</option>
                        </select>
                     </fieldset>
                  </details>
               </div>

               <div class="planner-column">
                  <details open="true">
                     <summary>
                        <h2>Project Goals</h2>
                     </summary>
                     <fieldset>
                        <label class="order-2" for="goal-1-input" id="goal-1-label">Goal 1</label>
                        <input class="order-1" type="text" id="goal-1-input"/>
                     </fieldset>
                     
                     <fieldset>
                        <label class="order-2" for="goal-2-input" id="goal-2-label">Goal 2</label>
                        <input class="order-1" type="text" id="goal-2-input"/>
                     </fieldset>
                     <fieldset>
                        <label class="order-2" for="goal-3-input" id="goal-3-label">Goal 3</label>
                        <input class="order-1" type="text" id="goal-3-input"/>
                     </fieldset>
                     <fieldset>
                        <div class="flex-row tags-group order-2">
                        <label class="order-1" for="tags-input" id="tags-label">Tags</label>
                           <div id="tags-output" class="order-2">
                              ${tags.map((tag) => Tag(tag)).join(',').replaceAll(',', '')}
                           </div>
                        </div>
                        <input type="text" id="tags-input" class="order-1" name="tags-input" />
                     </fieldset>
                  </details>
               </div>

            </div><!-- /planner-header -->

            <div class="planner-body">
               <div class="planner-column">
                  <details open="true">
                     <summary>
                        <h2>Notes</h2>
                     </summary>
                  </details>
               </div>
               <div class="planner-column">
                  <details open="true">
                     <summary>
                        <h2>Steps</h2>
                     </summary>
                  </details>
               </div>
            </div>
         </div>
      `;

      // mount the above template to the parent node
      render(outlet, template);

      // dispatch pageLoaded event
      dispatchLoaded('day');

      const tagNodes = Array.from(document.querySelectorAll('.tag-text'));
      const tagButtons = Array.from(document.querySelectorAll('.tag-button'));
      
      tagNodes.forEach(function (node) {
         node.addEventListener('click', function (event) {
            console.log(event);
         });
      });

      tagButtons.forEach(function (tagButton) {
         tagButton.addEventListener('click', function (event) {
            console.log(event);
         });
      });
   };

}());

export default Object.freeze(Day);
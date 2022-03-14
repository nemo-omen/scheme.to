import {render} from '../util/render.js';
import {Tag} from './Tag.js';

const Project = (function (){

   return function (outlet, project) {
      const template = `
      <div class="planner-header">
         <div class="planner-column">
            <details open="true">
               <summary>
                  <h2>Project Info</h2>
               </summary>
               <fieldset>
                  <label class="order-2" for="name-input" id="name-label">Project:</label>
                  <input class="order-1" type="text" id="name-input" value="${project.title}" />
               </fieldset>
               <fieldset>
                  <label class="order-2" for="start-date-input" id="start-date-label">Start Date:</label>
                  <input class="order-1" type="date" id="start-date-input" value="${new Date(project.startDate).toISOString().substring(0, 10)}" />
               </fieldset>
               <fieldset>
                  <label class="order-2" for="due-date-input" id="due-date-label">Due Date:</label>
                  <input class="order-1" type="date" id="due-date-input" value="${new Date(project.dueDate).toISOString().substring(0, 10)}" />
               </fieldset>
               <fieldset>
                  <label class="order-2" id="status-input-label" for="status-input">Status:</label>
                  <select class="order-1" id="status-input">
                     <option value=""></option>
                     <!-- unable to set the input's value within a template literal, so use ternaries to set selected option instead -->
                     <option value="planning" ${project.status === 'planning' ? 'selected' : ''}>Planning</option>
                     <option value="working" ${project.status === 'working' ? 'selected' : ''}>Working</option>
                     <option value="waiting" ${project.status === 'waiting' ? 'selected' : ''}>Waiting For</option>
                     <option value="completed" ${project.status === 'completed' ? 'selected' : ''}>Completed</option>
                     <option value="abandoned" ${project.status === 'abandoned' ? 'selected' : ''}>Abandoned</option>
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
                  <input class="order-1" type="text" data-goal-number="1" id="goal-1-input" value="${project.goals[1]}"/>
               </fieldset>

               <fieldset>
                  <label class="order-2" for="goal-2-input" id="goal-2-label">Goal 2</label>
                  <input class="order-1" type="text" data-goal-number="2" id="goal-2-input" value="${project.goals[2]}"/>
               </fieldset>
               <fieldset>
                  <label class="order-2" for="goal-3-input" id="goal-3-label">Goal 3</label>
                  <input class="order-1" type="text" data-goal-number="3" id="goal-3-input" value="${project.goals[3]}"/>
               </fieldset>
               <fieldset>
                  <div class="flex-row tags-group order-2">
                     <label class="order-1" for="tags-input" id="tags-label">Tags</label>
                     <div id="tags-output" class="order-2">
                        ${project.tags.map((tag) => Tag(tag).template).join(',', '').replaceAll(',', '')}
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
      `;

      render(outlet, template);
   };
}());

export {Project};
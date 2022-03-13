import {render} from '../util/render.js';
import {dispatchLoaded} from '../util/dispatchLoaded.js';
import {Tag} from '../components/Tag.js';

const Day = (function () {
   return function (outlet) {
      const project = {
         name: 'Untitled Project',
         startDate: '',
         dueDate: '',
         status: '',
         goals: {
            1: '',
            2: '',
            3: ''
         },
         tags: [],
         notes: {},
         steps: {}
      };

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
                        <input value="${project.name}" class="order-1" type="text" id="name-input"/>
                     </fieldset>
                     <fieldset>
                        <label class="order-2" for="start-date-input" id="start-date-label">Start Date:</label>
                        <input class="order-1" type="date" id="start-date-input"/>
                     </fieldset>
                     <fieldset>
                        <label class="order-2" for="due-date-input" id="due-date-label">Due Date:</label>
                        <input class="order-1" type="date" id="due-date-input"/>
                     </fieldset>
                     <fieldset>
                        <label class="order-2" id="status-input-label" for="status-input">Status:</label>
                        <select class="order-1" id="status-input">
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
                        <input class="order-1" type="text" data-goal-number="1" id="goal-1-input"/>
                     </fieldset>
                     
                     <fieldset>
                        <label class="order-2" for="goal-2-input" id="goal-2-label">Goal 2</label>
                        <input class="order-1" type="text" data-goal-number="2" id="goal-2-input"/>
                     </fieldset>
                     <fieldset>
                        <label class="order-2" for="goal-3-input" id="goal-3-label">Goal 3</label>
                        <input class="order-1" type="text" data-goal-number="3" id="goal-3-input"/>
                     </fieldset>
                     <fieldset>
                        <div class="flex-row tags-group order-2">
                        <label class="order-1" for="tags-input" id="tags-label">Tags</label>
                           <div id="tags-output" class="order-2">
                              ${project.tags.map((tag) => Tag(tag).template).join(',').replaceAll(',', '')}
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

      // Now that the above html is rendered to the DOM, we can select elements
      // within -- I may just use markup to build this and ditch this whole
      // "everything in JS" approach
      const nameInput = document.getElementById('name-input');
      const startDateInput = document.getElementById('start-date-input');
      const dueDateInput = document.getElementById('due-date-input');
      const statusInput = document.getElementById('status-input');
      const goalInputs = Array.from(document.querySelectorAll('[data-goal-number]'));
      const tagsInput = document.getElementById('tags-input');
      const tagsOutput = document.getElementById('tags-output');
      const tagNodes = Array.from(document.querySelectorAll('.tag-text'));
      const tagButtons = Array.from(document.querySelectorAll('.tag-button'));

      const setProjectName = function (name) {
         project.name = name;
         console.log(project);
      };

      const setProjectStartDate = function (dateString) {
         project.startDate = dateString;
         console.log(project);
      };

      const setProjectDueDate = function (dateString) {
         project.dueDate = dateString;
         console.log(project);
      };

      const setProjectStatus = function (status) {
         project.status = status;
         console.log(project);
      };

      const setProjectGoal = function (goalNumber, goalString) {
         project.goals[goalNumber] = goalString;
         console.log(project);
      };

      const addTag = function (text) {
         const tag = Tag(text);
         project.tags.push({id: tag.id, text: tag.text});
         tagsOutput.innerHTML += tag.template;
         tagsInput.value = '';
         console.log(project);
      };

      nameInput.addEventListener('change', function (event) {
         setProjectName(event.target.value);
      });

      startDateInput.addEventListener('change', function (event) {
         setProjectStartDate(event.target.value);
      });

      dueDateInput.addEventListener('change', function (event) {
         setProjectDueDate(event.target.value);
      });

      statusInput.addEventListener('change', function (event) {
         setProjectStatus(event.target.value);
      });

      goalInputs.forEach(function (input) {
         input.addEventListener('change', function (event) {
            setProjectGoal(event.target.dataset.goalNumber, event.target.value);
         });
      });

      tagsInput.addEventListener('keyup', function (event) {
         if (event.key !== 'Enter') {
            return;
         }
         addTag(event.target.value);
      });

      tagNodes.forEach(function (node) {
         node.addEventListener('click', function (event) {
            console.log(event.target.dataset.tagId);
         });
      });

      tagButtons.forEach(function (tagButton) {
         tagButton.addEventListener('click', function (event) {
            console.log(event.target.dataset.tagId);
         });
      });

   };

}());

export default Object.freeze(Day);
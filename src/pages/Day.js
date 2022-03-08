import render from '../util/render.js';
import {dispatchLoaded} from '../util/dispatchLoaded.js';

const Day = (function () {
   return function (outlet) {
      const template = `
         <h2>Day</h2>
         <div class="hero">
            <h3>Agenda</h3>
         </div>
      `;

      render(outlet, template);
      dispatchLoaded('day');
   };

}());

export default Object.freeze(Day);
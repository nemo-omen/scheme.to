import render from '../util/render.js';
import {dispatchLoaded} from '../util/dispatchLoaded.js';

const Week = (function () {
   return function (outlet) {
      const template = `
      <h2>Week</h2>
      <div class="hero">
         <h3>Upcoming</h3>
      </div>`;

      render(outlet, template);
      dispatchLoaded('week');
   };
}());

export default Object.freeze(Week);
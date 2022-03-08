import render from '../util/render.js';

const Year = (function () {
   return function (outlet) {
      const template = `
         <h2>Year</h2>
         <div class="hero">
            <h3>Calendar</h3>
         </div>
      `;

      render(outlet, template);
   }
}());

export default Object.freeze(Year);
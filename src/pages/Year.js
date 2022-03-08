import render from '../util/render.js';

const Year = (function () {
   const template = `<h2>Year</h2>
   <div class="hero">
      <h3>Calendar</h3>
   </div>`;

   const mount = function (outlet) {
      return render(outlet, template);
   };

   return {
      mount
   };
}());

export default Object.freeze(Year);
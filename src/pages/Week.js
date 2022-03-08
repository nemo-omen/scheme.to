import render from '../util/render.js';

const Week = (function () {
   const template = `<h2>Week</h2>
   <div class="hero">
      <h3>Upcoming</h3>
   </div>`;

   const mount = function (outlet) {
      return render(outlet, template);
   }

   return {
      mount
   };
}());

export default Object.freeze(Week);
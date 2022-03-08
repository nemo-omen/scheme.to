import render from '../util/render.js';

const Day = (function () {
   const template = `<h2>Day</h2>
   <div class="hero">
      <h3>Agenda</h3>
   </div>`;

   const mount = function (outlet) {
      return render(outlet, template);
   }

   return {
      mount
   };
}());

export default Object.freeze(Day);
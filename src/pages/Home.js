import render from '../util/render.js';

const Home = (function () {
   const template = `<h2>Overview</h2>
   <div class="hero">
      <div class="hero-card">
         <h3>Today</h3>
      </div>
      <div class="hero-card">
         <h3>Coming Up</h3>
      </div>
   </div>`;

   const mount = function (outlet) {
      return render(outlet, template);
   }

   return {
      template,
      mount
   };
}());

export default Object.freeze(Home);
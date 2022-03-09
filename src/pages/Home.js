import {render} from '../util/render.js';
import {dispatchLoaded} from '../util/dispatchLoaded.js';

const Home = (function () {
   return function (outlet) {
      
      const template = `
      <div class="page" id="home">
      <h2>Overview</h2>
         <div class="hero">
            <div class="hero-card">
               <div class="card-header">
                  <h3 class="text-large">Today</h3>
                  <time>${new Date().toLocaleString()}</time>
               </div>
               <div class="card-body">
                  <h4>Agenda View</h4>
               </div>
            </div>
         </div>
         <div class="hero">
         <div class="hero-card">
            <div class="card-header">
               <h3 class="text-medium-large">Coming Up</h3>
            </div>
         </div>
         </div>
      </div>`;

      // mount the above template to the parent node
      render(outlet, template);

      // dispatch pageLoaded event
      dispatchLoaded('home');
   };

}());

export default Object.freeze(Home);
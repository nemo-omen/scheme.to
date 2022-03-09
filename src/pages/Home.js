import {render} from '../util/render.js';
import {dispatchLoaded} from '../util/dispatchLoaded.js';

const Home = (function () {
   return function (outlet) {
      
      const template = `
      <div class="page" id="home">
      <h2>Overview</h2>
         <div class="hero">
            <div class="hero-card">
               <h3>Today</h3>
            </div>
            <div class="hero-card">
               <h3>Coming Up</h3>
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
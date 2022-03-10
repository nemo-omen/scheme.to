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
                  <time>${new Date().toLocaleString('en-US', {month: 'long', year: 'numeric', day: 'numeric', weekday: 'long'})}</time>
               </div>
               <div class="card-body">
               <!-- Make this a stack of half-hour increments that scrolls over a 24-hour period -->
               </div>
            </div>
         </div>
         <div class="hero">
         <div class="hero-card">
            <div class="card-header">
               <h3 class="text-medium-large">Coming Up</h3>
            </div>
            <div class="card-body grid grid-four-wide">
                  <div class="agenda-day agenda-cell">
                     <h4>Sunday</h4>
                  </div>
                  <div class="agenda-day agenda-cell">
                     <h4>Monday</h4>
                  </div>
                  <div class="agenda-day agenda-callout agenda-cell">
                     <h4>See the week in detail</h4>
                  </div>
                  <div class="agenda-day agenda-callout agenda-cell">
                     <h4>See the whole month</h4>
                  </div>
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
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
            
      render(outlet, template);
      dispatchLoaded('home');
   };

}());
// const Home = (function () {

//    const template = `
//    <div class="page" id="home">
//       <h2>Overview</h2>
//       <div class="hero">
//          <div class="hero-card">
//             <h3>Today</h3>
//          </div>
//          <div class="hero-card">
//             <h3>Coming Up</h3>
//          </div>
//       </div>
//    </div>`;

//    const mount = function (outlet) {
//       return render(outlet, template);
//    };

//    return {
//       template,
//       mount
//    };
// }());

export default Object.freeze(Home);
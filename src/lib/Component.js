// import { render } from '../util/render';

const Component = (function () {
   // simple constructor function allowing for
   // re-use of this function to create components
   return function (selector, options) {
      const elem = document.querySelector(selector);
      const data = options.data;
      const template = options.template;

      const render = function () {
         elem.innerHTML = template(data);
      }

      return {
         elem,
         data,
         template,
         render
      }
   };
}());

export default Component;
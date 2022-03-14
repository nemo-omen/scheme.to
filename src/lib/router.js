import {store} from './Store.js';
import {Project} from '../components/Project.js';

// Here's what needs to happen:
// instead of the router loading preexisting pages, we need to
// have it get the the last segment of the url's path
// and return the data with a property that matches that segment
// -  slugs sounds like the most friendly way to do that for now
//    plus, it ensures that we have unique titles for our projects
//    and helps us avoid the need to generate unique ids

// So, steps:
// 1. Get the last segment of the path
// 2. Find the data that matches that segment (this should probably be handled by a service!)
// 3. Return the data or an error object
// 4. The rest (updating UI etc) can be handled somewhere else 

// okay, let's use the 'revealing module pattern'
// with this little router.
// @see: https://coryrylan.com/blog/javascript-module-pattern-basics
const router = (function () {
   const outlet = document.getElementById('planner');
   /**
    * convert href string into a URL object and return URL.pathname
    * so we can avoid getting mired in regex (winning!)
    * @param {string} href href attribute of a link
    * @returns URL object
    * @see: https://developer.mozilla.org/en-US/docs/Web/API/URL
    */
   const getPath = function (href) {
      return new URL(href).pathname;
   };

   /**
    * Splits a given URL pathName property and returns the last element
    * @param {string} path  URL pathName property
    * @returns the last part of the path as a string
    */
   const getLastSegment = function (path) {
      return path.split('/').slice(1)[0];
   };

   // use the browser's history API to push the
   // address to the browser history and display
   // it in the address bar.
   // @see: https://gomakethings.com/how-to-update-a-url-without-reloading-the-page-using-vanilla-javascript/
   const setState = function (href) {
      const pathId = getLastSegment(getPath(href))[0];
      const title = pathId.charAt(0).toUpperCase() + pathId.slice(1);
      history.pushState({id: pathId}, `Scheme.to | ${title}`, href);
   };

   const getProjectData = function (pathSegment) {
      const projects = store.get('projects');
      // todo: if pathSegment === '', load lastProject

      if (projects.length > 0) {
         const project =  projects.find((proj) => proj.slug === pathSegment);
         return project;
      }
   };

   const loadPage = function (href) {
      const pathSegment = getLastSegment(getPath(href));
      const data = getProjectData(pathSegment);
      console.log(data);
      return Project(outlet, data);
   };

   return {
      setState,
      loadPage
   };
}());

// 
const routeListener = (function () {
   return {
      listen: function () {
         //  listen for all window click events
         window.addEventListener('click', function (event) {
            // if a link has a specific data-attribute, it
            // means we should modify their default behavior
            // and use our router to deliver dynamic content
            // rather than navigating to a new location and losing
            // our application state

            if (!event.target.matches('[data-route]')) {
               return;
            }

            // prevent links from navigating away from the page
            event.preventDefault();

            // send the target element's href to the router
            router.loadPage(event.target.href);

            // set the browser's address bar and history
            router.setState(event.target.href);

            // hide the navbar menu on mobile devices!
            hideMenu();
         });
      }
   };
}());


// toggle menu visibility
const hideMenu = function () {
   const menu = document.querySelector('nav');
   menu.classList.toggle('menu-open');
};

// popstate listener -- render a specified page template
// when the user presses the back button
window.addEventListener('popstate', function () {
   // detect whether history state is present
   if (history.state) {
      // loadPage for state id if so
      router.loadPage({id: history.state.id});
   } else {
      // load home template if not
      router.loadPage({id: ''});
   }
});

// listen for window load and mount the corresponding template
// we do this so someone can enter a URL directly rather than
// always loading the main html content without a template
window.addEventListener('DOMContentLoaded', function () {
   // The window.location object has several helpful properties
   // one of them being href, which we can use to route
   // to a given template
   router.loadPage(window.location.href);
});

export default Object.freeze(routeListener);

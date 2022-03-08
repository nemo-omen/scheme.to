import Day from '../pages/Day.js';
import Home from '../pages/Home.js';
import Month from '../pages/Month.js';
import Week from '../pages/Week.js';
import Year from '../pages/Year.js';

const routes = {
   home: {
      id: '',
      path: '/',
      mount: Home.mount
   },
   day: {
      id: 'day',
      path: '/day',
      mount: Day.mount
   },
   week: {
      id: 'week',
      path: '/week',
      mount: Week.mount
   },
   month: {
      id: 'month',
      path: '/month',
      mount: Month.mount
   },
   year: {
      id: 'year',
      path: '/year',
      mount: Year.mount
   }
};

// okay, let's try the 'revealing module pattern'
// with this little router.
// @see: https://coryrylan.com/blog/javascript-module-pattern-basics
const router = (function () {
   let outlet = document.querySelector('main');

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
   const segments = function (path) {
      return path.split('/').slice(1);
   };

   /**
    * Matches a route key to a given routeId
    * @param {string} routeId  the route id to load
    * @returns a route object with id, path, and template function
    * @see: https://www.willtaylor.blog/client-side-routing-in-vanilla-js/
    */
   const matchRoute = function (routeId) {
      return (
         /* eslint-disable indent */
         routeId === ''
         ? routes.home
         : routes[routeId]
      );
   };

   /**
    * dispatches a custom 'pageloaded' event
    * with a detail property of the given routeId
    * that we can use to detect when a given page
    * has been navigated/loaded
    * @param {string} routeId  id of the route being loaded
    * @see: https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events
    */
   const dispatchLoaded = function (routeId) {
      const pageloaded = new CustomEvent('pageloaded', {detail: routeId});
      window.dispatchEvent(pageloaded);
   };

   /**
    * Loads an app's page according to the given href property of an anchor tag
    * or the given id from a popstate event
    * @param {Object} options - Object containing either an href property or an id property
    */
   const loadPage = function (options) {
      let segment;

      if (options.href) {
         segment = segments(getPath(options.href))[0];
      } else {
         segment = options.id;
      }

      // find the route object and call its mount() method
      matchRoute(segment).mount(outlet);

      dispatchLoaded(segment);
   };

   // use the browser's history API to push the
   // address to the browser history and display
   // it in the address bar.
   // @see: https://gomakethings.com/how-to-update-a-url-without-reloading-the-page-using-vanilla-javascript/
   const setState = function (href) {
      const pathId = segments(getPath(href))[0];
      const title = pathId.charAt(0).toUpperCase() + pathId.slice(1);
      history.pushState({id: pathId}, `Scheme.to | ${title}`, href);
   };

   return {
      loadPage,
      setState
   };
}());

// toggle menu visibility
const hideMenu = function () {
   const menu = document.querySelector('nav');
   menu.classList.toggle('menu-open');
};

// route listener
//  I'm naming and exporting this as an IIFE so that:
// a) I can keep this logic in a separate file
// b) It executes, then attaches the listener as soon as the import loads
// Note: This isn't something I had to look up, it just seemed to make
// sense. Before learning more about IIFEs, I would have had to import
// this and call it explicitly. I feel like this will be useful in the future.

const routeListener = (function () {
   //  listen for all window click events
   window.addEventListener('click', function (event) {
      // if a link has a specific data-attribute, it
      // means we should modify their default behavior
      // and use our router to deliver dynamic content
      // rather than navigating to a new location and losing
      // our aplication state

      if (!event.target.matches('[data-route]')) {
         return;
      }

      // prevent links from navigating away from the page
      event.preventDefault();

      // send the target element's href to the router
      router.loadPage({href: event.target.href});

      // set the browser's address bar and history
      router.setState(event.target.href);

      // hide the navbar menu on mobile devices!
      hideMenu();
   });
}());

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
   router.loadPage({href: window.location.href});
});

export default Object.freeze(routeListener);

const routes = [
   {
      path: '/day',
     template: `<h2>Day</h2>`,
   },
   {
      path: '/week',
     template: `<h2>Week</h2>`,
   },
   {
      path: '/month',
     template: `<h2>Month</h2>`,
   },
   {
      path: '/year',
     template: `<h2>Year</h2>`,
   },
 ];
 
 // okay, let's try the 'revealing module pattern'
 // with this little router.
 // @see: https://coryrylan.com/blog/javascript-module-pattern-basics
 const router = (function () {
   let outlet = document.querySelector('main');
 
   // convert href string into a URL object and return URL.pathname
   // so we can avoid getting mired in regex (winning)
   const getPath = function (href) {
     return new URL(href).pathname;
   };

   // this function will split the given path into an array of path segments
   // we can use this to match our defined routes in order to provide
   // the page templates we want to the DOM
   const matchRoute = function (path) {
      console.log('matching: ', path);
      const segments = path.split('/').slice(1);
      console.log('segments: ', segments);
      // naive! -- make this match longer paths!
      // @see: https://www.willtaylor.blog/client-side-routing-in-vanilla-js/
      return routes.find((route) => route.path === path);
   };
 
   const loadPage = function (href) {

     outlet.innerHTML = matchRoute(getPath(href)).template;
     // console.log(resolve(href));
   };
 
   return {
     loadPage,
   };
 })();
 
// route listener
//  I'm naming and exporting this as an IIFE so that: 
// a) I can keep this logic in a separate file
// b) It executes, then attaches the listener as soon as the import loads
// Note: This isn't something I had to look up, it just seemed to make
// sense. Before learning more about IIFEs, I would have had to import
// this and call it explicitly. I feel like this will be useful in the future.

 export const routeListener = (function () {
   //  listen for all window click events
   window.addEventListener('click', (event) => {
      // if they have a specific data-attribute, it
      // means we should modify their default behavior
      // and use our router to deliver dynamic content
      // rather than navigating to a new location and losing
      // our aplication state

      if (!event.target.matches('[data-route]')) return;
      
      // prevent links from navigating away from the page
      event.preventDefault();
      
      // send the target element's href to the router   
      router.loadPage(event.target.href);
   });
 })();
 
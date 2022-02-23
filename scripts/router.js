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
 // with this little router
 // @see: https://coryrylan.com/blog/javascript-module-pattern-basics
 const router = (function () {
   let outlet = document.querySelector('main');
 
   // converts href string into a URL object
   // and returns URL.pathname
   const getPath = function (href) {
     return new URL(href).pathname;
   };

   const matchRoute = function (path) {
      console.log('matching!');
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
 export const routeListener = (function () {
   window.addEventListener('click', (event) => {
     if (!event.target.matches('[data-route]')) return;
     // prevent links from navigating away from the page
     event.preventDefault();
 
     router.loadPage(event.target.href);
   });
 })();
 
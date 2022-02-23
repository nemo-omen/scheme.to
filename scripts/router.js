const routes = {
   '/day': {
     template: `<h2>Day</h2>`,
   },
   '/week': {
     template: `<h2>Week</h2>`,
   },
   '/month': {
     template: `<h2>Month</h2>`,
   },
   '/year': {
     template: `<h2>Year</h2>`,
   },
 };
 
 // okay, let's try the 'revealing module pattern'
 // with this little router
 // @see: https://coryrylan.com/blog/javascript-module-pattern-basics
 const router = (function () {
   let outlet = document.querySelector('main');
 
   const resolve = function (href) {
     return new URL(href).pathname;
   };
 
   const loadPage = function (href) {
     outlet.innerHTML = routes[resolve(href)].template;
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
 
const routes = [
  {
    id: '',
    path: '/',
    template: `<h2>Overview</h2>`,
  },
  {
    id: 'day',
    path: '/day',
    template: `<h2>Day</h2>`,
  },
  {
    id: 'week',
    path: '/week',
    template: `<h2>Week</h2>`,
  },
  {
    id: 'month',
    path: '/month',
    template: `<h2>Month</h2>`,
  },
  {
    id: 'year',
    path: '/year',
    template: `<h2>Year</h2>`,
  },
];
 
 // okay, let's try the 'revealing module pattern'
 // with this little router.
 // @see: https://coryrylan.com/blog/javascript-module-pattern-basics
export const router = (function () {
  let outlet = document.querySelector('main');

  // convert href string into a URL object and return URL.pathname
  // so we can avoid getting mired in regex (winning)
  const getPath = function (href) {
    return new URL(href).pathname;
  };

  const segments = function (path) {
    return path.split('/').slice(1)
  }

  // this function will split the given path into an array of path segments
  // we can use this to match our defined routes in order to provide
  // the page templates we want to the DOM
  const matchRoute = function (routeId) {
    // console.log('matching: ', path);
    // naive! -- make this match longer paths!
    // @see: https://www.willtaylor.blog/client-side-routing-in-vanilla-js/
    return routes.find((route) => route.path === `/${routeId}`);
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
      segment = options.id
    }

    outlet.innerHTML = matchRoute(segment).template;
  };

  // use the browser's history API to push the
  // address to the browser history and display
  // it in the address bar.
  // @see: https://gomakethings.com/how-to-update-a-url-without-reloading-the-page-using-vanilla-javascript/
  const setState = function (href) {
    const pathId = segments(getPath(href))[0];
    const title = pathId.charAt(0).toUpperCase() + pathId.slice(1);
    history.pushState(
      {id: pathId},
      `Scheme.to | ${title}`,
      href
    );
  };

  return {
    loadPage,
    setState
  };
})();

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

export const routeListener = (function () {
  //  listen for all window click events
  window.addEventListener('click', (event) => {
    // if a link has a specific data-attribute, it
    // means we should modify their default behavior
    // and use our router to deliver dynamic content
    // rather than navigating to a new location and losing
    // our aplication state

    if (!event.target.matches('[data-route]')) return;
    
    // prevent links from navigating away from the page
    event.preventDefault();
    
    // send the target element's href to the router
    router.loadPage({href: event.target.href});

    // set the browser's address bar and history
    router.setState(event.target.href);

    // hide the navbar menu on mobile devices!
    hideMenu();
  });
})();
 

// popstate listener -- render a specified page template
// when the user presses the back button
window.addEventListener('popstate', function (event) {
  
  // detect whether history state is present
  if (history.state) {
    // loadPage for state id if so
    router.loadPage({id: history.state.id});
  } else {
    // load home template if not
    router.loadPage({id: ''});
  }
});
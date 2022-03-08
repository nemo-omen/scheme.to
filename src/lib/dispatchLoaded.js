/**
    * Dispatches a custom 'pageloaded' event
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

export {dispatchLoaded};
// ModuleState.js
// This is an alternate implementation of Store
// that relies on the properties of ES modules
// -  anything not exported is private by default
// -  no need to wrap the module's functionality
//    inside a function, we can instead export
//    an object of methods that operate on
//    the 'private' variables inside the module
// 
// ** This is essentially an exact copy of the Store function without the function **

// an object for storing app-wide values
const state = {};

// a list of functions to run when state properties change
const subscribers = {};

// we're making notify a private function by not including it in the exported object
// for now, we're returning both the old value and the new value
// this may change later, depending on whether oldState is useful
const notify = function (key, oldState, newState) {
   subscribers[key].forEach((callback) => callback(oldState, newState));
};

// default export allows us to name the imported
// object anything we want.
export default {
   // instead of subscribing to the entire app state object
   // we'll instead create keys that match the state property
   // we want to subscribe to
   subscribe: function (key, callback) {
      // if there's no subscription property, add it as an empty array
      if (!Object.prototype.hasOwnProperty.call(subscribers, key)) {
         subscribers[key]  = [];
      }
      // add the given callback to the subscribers array
      // by spreading the original into a new array and adding
      // the callback to the end
      subscribers[key] = [...subscribers[key], callback];
   },
   set: function (key, value) {
      // grab the value before change
      const oldState = state[key];
      // set the value
      state[key] = value;
      // notify subscribers with both values
      notify(key, oldState, state[key]);
   },
   get: function (key) {
      return state[key];
   },
   remove: function (key) {
      // don't attempt removal if prop dosen't exist
      if (!Object.prototype.hasOwnProperty.call(state, key)) {
         return;
      }
      // grab the value before deletion
      const oldState = state[key];
      // remove property
      delete state[key];
      // notify subscribers
      notify(key, oldState, state[key]);
   }
};
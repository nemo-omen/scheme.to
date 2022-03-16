const Store = function (initialState) {
   // initialize store members -- allow for an initial state
   // object to be passed in but set to empty object if arg is absent
   // --note:  I'm using nullish coalescing here. If initialState is undefined
   //          the value will be set to an empty object
   //          @see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
   const state = {...initialState} ?? {};

   // instead of a list of subscribers, we'll create separate lists
   // as properties with keys that match a state property's key
   // a subscriber should be a callback function that accepts oldState & newState
   // values
   const subscribers = {};

   // keep notify private!
   /**
    * Executes all callback functions for a given set of subscribers
    * @param {string} key the store value to send notifications for
    * @param {any} oldState  the stored value before change
    * @param {any} newState  the stored value after change
    */
   const notify = function (key, oldState, newState) {
      if (Object.prototype.hasOwnProperty.call(subscribers, key)) {
         subscribers[key].forEach((callback) => callback(oldState, newState));
      }
   };

   return {
      // instead of subscribing to the entire app state object
      // we'll instead create keys that match the state property
      // we want to subscribe to
      subscribe: function (key, callback) {
         // if there's no subscription property, add it as an empty array
         if (!Object.prototype.hasOwnProperty.call(subscribers, key)) {
            subscribers[key] = [];
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
};

// call the Store function so we have an instance to export
// this effectively gives us a global state management singleton
// that we can use no matter what page is loaded
const store = Store();
export {store};
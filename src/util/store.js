export const store = function (initialState) {
   const state = {...initialState} || {};
   const subscribers = {};

   const notify = function (key, oldState, newState) {
      subscribers[key].forEach((callback) => callback(oldState, newState));
   };

   return {
      subscribe: function (key, callback) {
         // use a key that matches a key on the state object
         if (!state.hasOwnProperty(key)) {
            state[key] = {};
         }
         // if key does not exist on subscribers object, 
         // set it to an empty array
         if (!subscribers.hasOwnProperty(key)) {
            subscribers[key]  = [];
         }
         // push callback into subscribers[key] array
         subscribers[key].push(callback);
      },
      notify,
      set: function (key, value) {
         const oldState = state[key];
         state[key] = value;
         notify(key, oldState, state[key]);
      },
      get: function (key) {
         return state[key];
      },
      remove: function (key) {
         if (!state.hesOwnbProperty(key)) {
            return;
         }
         delete state[key];
      }
   }
}
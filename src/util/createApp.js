export const createApp = (function () {
   return function (options) {

   const appState = options.initialState || {};
   const subscribers = [];
   const state = new Proxy(appState, {
      set: function (state, key, value) {
         state[key] = value;
         notify(state);
         return state;
      }
   });

   const getState = function (key) {
      return state[key];
   };

   const setState = function (key, value) {
      state[key] = value;
   };

   const removeState = function (key) {
      delete state[key];
   };

   const subscribe = function (callback) {
      subscribers.push(callback);
   };

   const unsubscribe = function (callback) {
      subscribers = subscribers.filter((cb) => cb !== callback);
   };

   const notify = function (state) {
      subscribers.forEach((cb) => cb(state));
   };

      return {
         setState,
         removeState,
         appState,
         state,
         subscribe,
         unsubscribe
      };
   };
}());
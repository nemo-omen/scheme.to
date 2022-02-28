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

export const createNonProxyApp = function (initialState) {
   const state = {...initialState} || {};
   const subscribers = {};

   const notify = function (key, oldValue, newValue) {
      subscribers[key].forEach((callback) => callback(oldValue, newValue));
   }

   return {
      set: function (key, value) {
         const oldState = {...state};
         state[key] = value;
         notify(key, oldState[key], state[key]);
      },
      get: function (key) {
         return state[key];
      },
      remove: function (key) {
         const oldState = {...state[key]};
         delete state[key];
         notify(key, oldState, state[key]);
      },
      subscribe: function (key, callback) {
         if (!subscribers.hasOwnProperty(key)) {
            subscribers[key] = [callback];
         } else {
            subscribers[key].push(callback);
         }
      }
   };
};
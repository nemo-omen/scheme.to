const LSStore = (function () {
   
   const store = window.localStorage;
   const subscribers = {};
   const notify = function (key, newState) {
      if (Object.prototype.hasOwnProperty.call(subscribers, key)) {
         subscribers[key].forEach((callback) => callback(newState));
      }
   };

   return function () {
      return {
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
            store.setItem(key, JSON.stringify(value));
            notify(key, JSON.parse(store.getItem(key)));
         },
         get: function (key) {
            return JSON.parse(store.getItem(key));
         },
         getOne: function (storeKey, searchValue) {
            const allValues = this.get(storeKey);
            return allValues.filter((project) => project.slug === searchValue)[0];
         },
         add: function (key, value) {
            const oldState = JSON.parse(store.getItem(key));

            if (oldState === null || oldState === 'undefined') {
               this.set(key, value);
            }


            if (typeof oldState === 'object') {
               if (Array.isArray(oldState)) {
                  this.set(key, [...oldState, value]);
               } else {
                  this.set(key, {...oldState, value});
               }
            }
            // no need for notify here since we're using
            // the set method
         },
         remove: function (key) {
            const oldState = JSON.parse(store.getItem(key));
            store.removeItem(key);
            notify(key, null);
         }
      };
   };
}());

const store = LSStore();

export {store};
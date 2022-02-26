export const Store = (function () {
   let store = {};

   const events = {};

   const Store = (initialStore = {}) {
      store = initialStore;
   };

   Store.prototype.on = function (eventName, callback, dep = []) {
      if (typeof callback !== 'function') {
         console.error('on() expects a function as the second argument');
         return false;
      }
      
      if (Object.prototype.toString.call(dep) !== '[object Array]') {
         console.error('on() expects an array as the third argument');
         return false;
      }

      if (!events.hasOwnProperty(eventName)) {
         events[eventName] = [];
      }

      events[eventName].push({dep, callback});
      return true;
   };
   Store.prototype.emit = function (eventName, payload);

   return Store;
}());
export const context = {
   state: {},
   subscribers: {},
   get: function (key) {
      return this.state[key];
   },
   set: function (key, value) {
      const oldValue = this.state[key];
      this.state[key] = value;
      this.notify(key, oldValue, this.state[key]);
   },
   remove: function (key) {
      oldValue = this.state[key];
      delete this.state[key];
      this.notify(key, oldValue, undefined);
   },
   subscribe: function (key, callback) {
      if (!this.state.hasOwnProperty(key)) {
         this.state[key] = undefined;
      }

      if (!this.subscribers.hasOwnProperty(key)) {
         this.subscribers[key] = [];
      }

      this.subscribers[key].push(callback);
   },
   notify: function (key, oldValue, newValue) {
      this.subscribers[key].forEach((callback) => callback(oldValue, newValue));
   }
}
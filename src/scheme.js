export const Scheme = (function () {
   return function (options) {
      const context = {
         // this is the HTML entrypoint
         selector: document.querySelector(options.selector),
         // template should be a function!
         // --should accept props and insert them
         // into an HTML string via template literals
         template: options.template,
         data: options.data || {},
         subscribers: []
      };

      // data = values we want to be able to
      // update for the whole app
      const self = {
         subscribe: function (callback) {
            if (context.subscribers.includes(callback)) {
               return;
            }
            
            context.subscribers.push(callback);
         },
         render: function () {
            context.selector.innerHTML = context.template(context.data);
         },
         addListener: function (options) {
            document.querySelector(options.node).addEventListener(options.event, options.handler);
         },
         set: function (key, value) {
            context.data[key] = value;
            this.render();
         },
         get: function (key) {
            console.log(`getting ${key}`);
            return context.data[key];
         },
         remove: function (key) {
            if (!context.data.hasOwnProperty(key)) {
               return;
            }
            delete context.data[key];
         }
      };

      return self;
   }
}());
const store = (function () {
   return function (initialState) {
      const data = new Proxy(initialState, {
         
      });

      const self = {
         set: function (key, val) {
            data[key] = value;
         },
      };

      return self;
   }
}());
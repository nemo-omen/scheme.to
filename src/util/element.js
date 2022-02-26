export const createElement = function (tagName) {
   return function (strings, ...args) {
      return {
         type: tagName,
         template: strings.reduce(
            function (acc, currentString, index) {
               return acc + currentString + (args[index] || "");
            },
            ""
         )
      }
   }
};

export const div = createElement('div');
export const p = createElement('p');

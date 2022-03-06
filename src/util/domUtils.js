const hasParent = function (node) {
   return (node.parentNode !== null && node.parentNode !== undefined);
}

export const select = (function () {
   return function (selector) {
      return document.querySelector(selector);
   }
}());

export const create = (function (){
   return function (tagName) {
      return document.createElement(tagName);
   }
}());

export const remove = (function () {
   return function(node) {
      if(hasParent(node)) {
         node.parentNode.removeChild(node);
      }
   };
}());

export const insert = (function () {
   return function (parent, child) {
      parent.appendChild(child);
   };
}());

export const replace = (function () {
   return function (replacement, target) {
      if(hasParent(target)) {
         target.parentNode.replaceChild(replacement, target);
      }
   }
}());
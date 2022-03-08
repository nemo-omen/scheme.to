const hasParent = function (node) {
   return (node.parentNode !== null && node.parentNode !== undefined);
};

const select = (function () {
   return function (selector) {
      return document.querySelector(selector);
   };
}());

const create = (function () {
   return function (tagName) {
      return document.createElement(tagName);
   };
}());

const remove = (function () {
   return function (node) {
      if (hasParent(node)) {
         node.parentNode.removeChild(node);
      }
   };
}());

const insert = (function () {
   return function (parent, child) {
      parent.appendChild(child);
   };
}());

const replace = (function () {
   return function (replacement, target) {
      if (hasParent(target)) {
         target.parentNode.replaceChild(replacement, target);
      }
   };
}());

export {select, create, remove, insert, replace};
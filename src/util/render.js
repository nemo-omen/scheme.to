export const render = function (parentSelector, markup) {
   const parent = document.querySelector(parentSelector);
   parent.innerHTML = markup;
};
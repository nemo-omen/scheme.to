const render = function (outlet, template) {
   const tpl = document.createElement('template');
   tpl.innerHTML = template;
   outlet.innerHTML = '';
   outlet.appendChild(tpl.content.cloneNode(true));
};

export {render};
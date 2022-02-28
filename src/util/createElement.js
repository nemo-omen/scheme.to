export const createElement = function (elementObject, parentTarget) {
   let el = document.createElement(elementObject.tagName);

   if (elementObject.textContent) {
      const text = document.createTextNode(elementObject.textContent);
      el.appendChild(text);
   }

   if (elementObject.attributes) {
      for (let entry of Object.entries(elementObject.attributes)) {
         el.setAttribute(entry[0], entry[1]);
      }
   }

   if (elementObject.events) {
      for (let event of elementObject.events) {
         el.addEventListener(event.type, event.callback);
      }
   }

   const node = parentTarget.appendChild(el);

   if (!elementObject.children) {
      return node;
   }

   return elementObject.children.forEach((child) => createElement(child, el));
};

export const createReactiveElement = function (elementObject, parentTarget, subscriptionTarget, subscriptionKey) {
   const element = createElement(elementObject, parentTarget);
   subscriptionTarget.subscribe((state) => element.innerText = state[subscriptionKey]);
}
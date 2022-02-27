import { routeListener } from './src/router.js';

const createElement = function (elementObject, parentTarget) {
   const el = document.createElement(elementObject.tagName);

   if (elementObject.textContent) {
      const text = document.createTextNode(elementObject.textContent);
      el.appendChild(text);
   }

   if (elementObject.attributes) {
      for (let entry of Object.entries(elementObject.attributes)) {
         el.setAttribute(entry[0], entry[1]);
      }
   }

   if(elementObject.classList) {
      for (let className of elementObject.classList) {
         el.classList.add(className);
      }
   }

   parentTarget.appendChild(el);

   if (!elementObject.children) {
      return;
   }

   elementObject.children.forEach((child) => createElement(child, el))
};

const tree = {
   root: {
      tagName: 'div',
      attributes: {
         id: 'test-div',
         class: 'something another-thing super-wide',
         role: 'section'
      },
      children: [
         {
            tagName: 'p',
            id: 'special-paragraph',
            textContent: 'This is some text',
            classList: ['test', 'whatever']
         },
         {
            tagName: 'hr'
         }
      ]
   }
};

createElement(tree.root, document.querySelector('#app'));

createElement({
   tagName: 'p',
   attributes: {
      class: 'this',
   },
   textContent: 'This is some more text',
}, document.querySelector('#test-div'));
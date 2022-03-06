const createElement = tagName => document.createElement(tagName);

const text = element => text => element.innerText = text;

const children = element => childElements => {
   childElements.forEach((child) => {
      element.appendChild(child);
   });
};

const child = element => child => {
   console.log({child});
   element.appendChild(child);
}

const app = document.getElementById('app');

const p = createElement('p');

text(p)('This is a paragraph!');

const div = createElement('div');


child(app)(div);

child(div)(p);

console.log(p);

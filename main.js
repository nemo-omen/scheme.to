const createElement = tagName => document.createElement(tagName);

const text = element => text => element.innerText = text;
const appendText = element => text => element.innerText += text;

const child = element => childElement => {
   element.appendChild(childElement);
};

const attributes = element => attributes =>  
   attributes.forEach(
      attribute => {
         element.setAttribute(Object.keys(attribute)[0], Object.values(attribute)[0]);
      });

const children = element => childElements => {
   childElements.forEach((childElement) => {
      if(Array.from(childElement.childNodes).length < 1) {
         child(element)(childElement);
      }
   });
};

const compose = (...fns) => x =>
   fns.reduceRight((acc, fn) => fn(acc), x);

const app = document.getElementById('app');

const div = createElement('div');

attributes(div)([{class: 'okay'}]);
const p = createElement('p');
const pText = text(p);
pText('I am a paragraph\n');
const pAppend = appendText(p);
pAppend(' This is more text');
pAppend('\nAnd even more');
// child(div)(p);
// child(app)(div);

const appChild = child(app);
const divChild = child(div);

appChild(div);
divChild(p);
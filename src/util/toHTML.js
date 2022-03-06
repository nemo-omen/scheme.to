export const toHTML = function (str) {
   const parser = new DOMParser();
   const doc = parser.parseFromString(str, 'text/html');
   return doc.body;
};
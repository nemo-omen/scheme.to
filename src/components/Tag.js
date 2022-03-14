import {shortId} from '../util/shortId.js';

const Tag = (function() {
   return function(text) {
      const tagId = shortId();

      console.log(text);

      const template = `
      <div class="tag" id="${tagId}">
         <span class="tag-text" data-tag-id="${tagId}">${text}</span>
         <button class="tag-button" data-tag-id="${tagId}">x</button>
      </div>
      `;

      return {
         template,
         id: tagId,
         text
      };
   };
}());

export {Tag};
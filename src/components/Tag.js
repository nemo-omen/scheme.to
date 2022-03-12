const Tag = (function() {

   // generate a "random" id
   const id =  function () {
      return Math.random().toString(36).substr(2, 6);
   };

   return function(text) {
      const template = `
      <div class="tag" id="tag-${id()}">
         <span class="tag-text">${text}</span>
         <button class="tag-button">x</button>
      </div>
      `;

      return template;
   };
}());

export {Tag};
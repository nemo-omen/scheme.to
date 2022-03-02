import { store } from './store.js';

export const createApp = function () {
   let appRoot = document.body;

   // should come with all methods of store
   const state = store();

   // keep track of current DOM tree
   const tree = {
      root: {
         node: appRoot
      }
   };

   // keep track of DOM as an object tree
   const vTree = {
      root: {
         tagName: 'body',
         children: []
      }
   }

   return {
      state,
      tree,
      vTree
   };
};
import { routeListener } from './src/router.js';
import { createElement, createReactiveElement } from './src/util/createElement.js';
import { createApp} from './src/util/createApp.js';
import { store } from './src/util/store.js';
import { context } from './src/util/context.js';
import { appSkeleton } from './src/components/AppSkeleton.js';

const app = createApp();

console.log(app);

context.subscribe('name', function (oldValue, newValue) {
   console.log(`context: old: ${oldValue}, new: ${newValue}`);
});

context.set('name', 'Jeff');
context.set('name', 'Mary');

// const incButton = createElement(
//    {
//       tagName: 'button',
//       attributes: {
//          id: 'my-button',
//       },
//       textContent: '++',
//       events: [
//          {
//             type: 'click',
//             callback: function () {
//                app.setState('count', app.state.count + 1);
//             }
//          }
//       ]
//    },
//    document.querySelector('#app')
// );

// const decButton = createElement({
//    tagName: 'button',
//    attributes: {
//       id: 'my-button',
//    },
//    textContent: '--',
//    events: [
//       {
//          type: 'click',
//          callback: function () {
//             app.setState('count', app.state.count - 1);
//          }
//       }
//    ]
// }, document.querySelector('#app'));

// const countTracker3 = createReactiveElement(
//    {
//       tagName: 'h2',
//       attributes: {
//          id: 'counter-tracking-heading',
//       },
//       textContent: app.state.count.toString(),
//    },
//    document.querySelector('main'),
//    app,
//    'count'
// );
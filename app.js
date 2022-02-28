import { routeListener } from './src/router.js';
import { createElement, createReactiveElement } from './src/util/createElement.js';
import { createApp } from './src/util/createApp.js';
import { appSkeleton } from './src/components/AppSkeleton.js';

createElement(appSkeleton, document.body);

let app = createApp({initialState: {count: 0}});

const incButton = createElement(
   {
      tagName: 'button',
      attributes: {
         id: 'my-button',
      },
      textContent: '++',
      events: [
         {
            type: 'click',
            callback: function () {
               app.setState('count', app.state.count + 1);
            }
         }
      ]
   },
   document.querySelector('#app')
);

const decButton = createElement({
   tagName: 'button',
   attributes: {
      id: 'my-button',
   },
   textContent: '--',
   events: [
      {
         type: 'click',
         callback: function () {
            app.setState('count', app.state.count - 1);
         }
      }
   ]
}, document.querySelector('#app'));

const countTracker2 = createReactiveElement(
   {
      tagName: 'p',
      attributes: {
         id: 'counter-tracker',
      },
      textContent: app.state.count.toString(),
   }, 
   document.querySelector('main'), 
   app,
   'count'
);
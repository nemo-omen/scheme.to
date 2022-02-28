import { routeListener } from './src/router.js';
import { createElement, createReactiveElement } from './src/util/createElement.js';
import { createApp, createNonProxyApp } from './src/util/createApp.js';
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

const countTracker3 = createReactiveElement(
   {
      tagName: 'h2',
      attributes: {
         id: 'counter-tracking-heading',
      },
      textContent: app.state.count.toString(),
   },
   document.querySelector('main'),
   app,
   'count'
);

// non proxy app test
const app2 = createNonProxyApp({count: 0});

// if we make 'subscribers' an object, we could instead add subscribers
// as a list of callbacks to a specific key, then when a state[key] is
// updated, it will only send out notifications to any subscribers
// of that key
const subscriber = app2.subscribe('count', function (oldValue, newValue) {
   console.log({newValue});
});


app2.set('count', 0);
app2.set('count', 1);
app2.set('count', 2);
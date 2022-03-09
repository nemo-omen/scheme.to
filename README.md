# Scheme.to

Scheme.to is a project for the Spring 2022 session of CS3312 — Web Programming — at Angelo State University.

Because the concentration for the class is the creation of front-end single-page applications, that's what this project will be.

Frameworks, however, will not be used.

## Project structure

### Entry Point
`index.html` is the entry point into this application. It is also the only `.html` file within the application. All other HTML aside from the bare page skeleton is loaded using JavaScript.

### Styles
All styles are located within the `/styles` directory located at the root of the project. `global.css` is the location for the primary styles for the project. Other `.css` files within the directory are used to keep important variables and font declarations outside of the main style document, helping to keep it clutter-free.

### JavaScript
All JavaScript is located in the `/src` directory at the root of the project. There are a number of modules in this directory, and their functionality will be covered later, but the primary file is `app.js`.

#### Router
The router consists of two functions thhat work together to render specific DOM content when the user navigates — `router` and `routeListener`.

`routeListener` simply attaches an `eventListener` to the `window` object. The handler then intercepts all `click` events on the `window` and filters out any not made on a link with the data attribute `data-route`. The event handler then prevents the default behavior of a link before calling the router's `loadPage` method and setting the `loadedPage` property to the `id` of the clicked link.

   > __NOTE:__ The logic for calling `router.setState()` and `hideMenu()` should be moved out of `routeListener` so we can ensure the new page is actually loaded. Currenty, these calls assume the page successfully loaded from within the scope of the `routeListener` handler. I feel like this listener is doing too much. _Maybe they need to be moved into the router or be set somewhere separate_.

#### Pages
Pages are individual JavaScript functions that mount HTML elements, along with relevant data, to the DOM. Each page handles its own DOM manipulation and will dispatch a custom `pageLoaded` event when it has finished mounting to the DOM. Pages are located in `/src/pages`.

#### Store
The store is a global state object used to synchronize data throughout the application. Pages and components can subscribe to specific keys within the store to recieve 'notifications' when the key changes.

Implementation code for `Store` can be found in `/src/lib/Store.js`.

#### Components
Some specific portions of the application will be handled using Web Components, a standard means of creating bundled functionality and custom DOM elements. Initially, I shied away from this method because I understand Dr. LeGrand dislikes JavaScript classes, but there isn't any other method for defining and registering custom web components.

Pages synchronize data with the rest of the application through a global state object called the 

## Notes

### ESLint
I decided to use ESLint to help catch errors and enforce formatting. Doing so at the development stage helps to catch things JSLint doesn't like without the need to copy/paste the code into the JSLint browser interface.

You can see the ESLint rules in the `.eslintrc.json` file at the root of the project's directory.
### Vite
Vite is a development and build tool that helps development with conveniences like hot module reload (auto reload on file save) and a development server. Vite has great build and bundling settings which won't be used in this project because this will be served from an http server similar to Apache or Nginx.


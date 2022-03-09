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
## Notes

### ESLint
I decided to use ESLint to help catch errors and enforce formatting. Doing so at the development stage helps to catch things JSLint doesn't like without the need to copy/paste the code into the JSLint browser interface.

You can see the ESLint rules in the `.eslintrc.json` file at the root of the project's directory.
### Vite
Vite is a development and build tool that helps development with conveniences like hot module reload (auto reload on file save) and a development server. Vite has great build and bundling settings which won't be used in this project because this will be served from an http server similar to Apache or Nginx.


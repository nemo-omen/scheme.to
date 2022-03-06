// Courtesy: Luis Atencio 
// https://gist.github.com/luijar/ce6b96f13e31cb153093#file-ch01-magic-run-js

const run = function (...functions) {
   functions.reverse().forEach((fn) => x => fn(x));
}


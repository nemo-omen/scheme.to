import { BaseComponent } from './BaseComponent.js';

export class SchemeApp extends BaseComponent {
   constructor() {
      super();
   }

   connectedCallback() {
      this.render(`<h2>${this.getAttribute('title')}</h2>`);
   }

   disconnectedCallback() {
      console.log('Disconnected');
   }

   attributeChangedCallback(name, oldValue, newValue) {
      console.log(`${name} changed from ${oldValue} to ${newValue}`);
   }
}

customElements.define(
   "scheme-app",
   SchemeApp,
   {extends: 'main'},
);
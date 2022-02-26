import { router } from '../scripts/router.js';

export class RouteLink extends HTMLAnchorElement {

   connectedCallback() {
      this.addEventListener('click', function (event) {
         event.preventDefault();
         router.loadPage(this.href);
      });
   }

   disconnectedCallback() {
      this.removeEventListener('click');
   }
}


customElements.define(
   "route-link",
   RouteLink,
   {extends: 'a'},
);
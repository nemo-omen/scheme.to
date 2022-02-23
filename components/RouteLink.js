import { router } from '../scripts/router.js';

export class RouteLink extends HTMLAnchorElement {

   connectedCallback() {
      this.addEventListener('click', function (event) {
         event.preventDefault();
         router.loadPage(this.href)
      });
   }
}

customElements.define(
   "route-link",
   RouteLink,
   {extends: 'a'},
)
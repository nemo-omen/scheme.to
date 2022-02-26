// const template = document.createElement(template);

export class BaseComponent extends HTMLElement {
   constructor() {
      super();
      this.attachShadow({mode: 'open'});
   }

   render(html) {
      const template = document.createElement('template');
      template.innerHTML = html;
      this.shadowRoot.appendChild(template.content.cloneNode(true));
   }
}
import { select, create, insert, replace, remove } from '../util/domUtils.js';
import Component from '../lib/Component.js';

const Header = (selector, options) => Component(selector, {
      data: options.data,
      template: function (props) {
         return `
            <header>
               <h1>
                  <a href="/">${props.title}</a>
               </h1>
            </header>`;
      }
   }).render();

export default Header;
import { select, create, insert, replace, remove } from '../util/domUtils.js';

const Header = function (props) {
   const {store} = props;
   console.log(store.get('name'));

   const render = function () {
      return `
      <header>
         <h1>
            <a href="/">${store.get('name')}</a>
         </h1>
      </header>
   `;
   };
   
   return render();
}

export default Header;
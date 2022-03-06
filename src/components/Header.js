const Header = function (props) {
   const {store, parentSelector} = props;

   let title = store.get('title');

   store.subscribe('title', function (oldState, newState) {
      title = newState;
      template(title);
   });

   const template = function (properties) {
      const {title} = properties;
      return `
      <header>
         <h1>${title}</h1>
         <nav>
            <ol>
               <li>
                  <a href="/">Home</a>
               </li>
            </ol>
         </nav>
      </header>
   `;
   };

   return template({title});
};

export default Header;
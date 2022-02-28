export const appSkeleton = {
   tagName: 'div',
   attributes: {
      id: 'app'
   },
   children: [
      {
         tagName: 'header',
         attributes: {
            role: 'banner',
         },
         children: [
            {
               tagName: 'div',
               attributes: {
                  class: 'header-inner',
               },
               children: [
                  {
                     tagName: 'h1',
                     attributes: {
                        class: 'header-main-link',
                     },
                     children: [
                        {
                           tagName: 'a',
                           attributes: {
                              href: '/'
                           },
                           textContent: 'Scheme.to'
                        }
                     ]
                  }
               ]
            }
         ]
      }, // </header>
      {
         tagName: 'main',
      }, // </main>
      {
         tagName: 'aside',
         attributes: {
            class: 'sidebar',
         }
      }, // </aside>
      {
         tagName: 'footer'
      } //</footer>
   ]
}
import { div } from '../util/element.js';

export const User = function ({firstName, lastName}) {
   return div`Hello ${firstName} ${lastName}!`;
}
import { routeListener } from './scripts/router.js';
import { init } from './src/util/init.js';
import { User } from './src/components/User.js';

const firstName = 'Jeff';
const lastName = 'Caldwell';

init('#app', User({firstName, lastName}));
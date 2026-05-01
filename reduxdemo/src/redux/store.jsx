import {createStore} from 'redux';

import { todoreducer} from './reducer';

export const store=createStore(todoreducer);

//import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit'

import { todoreducer} from './reducer';

//export const store=createStore(todoreducer);

export const store=configureStore(
    {
        reducer:
        {
            todo:todoreducer
        }
    }
)

import {createStore, combineReducers} from 'redux';
import { Donations } from './donations';
import { Leaders } from './leaders';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            donations: Donations,
            leaders:Leaders,
        })
    );

    return store;
} 
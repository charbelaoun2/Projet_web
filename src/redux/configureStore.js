import {createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Donations } from './donations';
import { Offres } from './offres';
import { Leaders } from './leaders';
import { Auth } from './auth';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            donations: Donations,
            offres: Offres,
            leaders: Leaders,
            auth: Auth,
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
} 
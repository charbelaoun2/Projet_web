import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Donations } from './donations';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            donations: Donations,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
} 
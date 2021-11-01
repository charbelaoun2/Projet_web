import * as ActionTypes from './ActionTypes';

export const Donations = (state = { isLoading: true,
    errMess: null,
    donations:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DONATIONS:
            return {...state, isLoading: false, errMess: null, donations: action.payload};

        case ActionTypes.DONATIONS_LOADING:
            return {...state, isLoading: true, errMess: null, donations: []}

        case ActionTypes.DONATIONS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};
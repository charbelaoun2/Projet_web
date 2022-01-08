import * as ActionTypes from './ActionTypes';

export const Offres = (state = {
        errMess: null,
        offres: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_OFFRES:
            return {...state, isLoading: false, errMess: null, offres: action.payload};

        case ActionTypes.OFFRES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, offres: []};

        case ActionTypes.ADD_OFFRE:
            var offre = action.payload;
            return {...state,offres: state.offres.concat(offre)};

        default:
            return state;
    }
}
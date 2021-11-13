import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl'

export const addComment = (donationId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        donationId: donationId,
        rating: rating,
        author: author,
        comment: comment
    }
}); 
export const fetchDonations = () => (dispatch) => {

    dispatch(donationsLoading(true));

    return fetch(baseUrl + 'donations')
    .then(response => response.json())
    .then(donations => dispatch(addDonations(donations)));
}

export const donationsLoading = () => ({
    type: ActionTypes.DONATIONS_LOADING
});

export const donationsFailed = (errmess) => ({
    type: ActionTypes.DONATIONS_FAILED,
    payload: errmess
});

export const addDonations = (donations) => ({
    type: ActionTypes.ADD_DONATIONS,
    payload: donations
}); 


export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});
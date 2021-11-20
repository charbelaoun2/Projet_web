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
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(donations => dispatch(addDonations(donations)))
    .catch(error => dispatch(donationsFailed(error.message)));
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
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});




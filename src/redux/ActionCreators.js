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

export const postFeedback = (feedback) => (dispatch) => {
    const newFeedback = Object.assign({ date: new Date().toISOString() }, feedback)
  
    return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then((response) => {
        if(response.ok) {
            return response;
        } else {
            var error = new Error('Error' + response.status + ': ' + response.statusText);
            error.response = response;
  
            throw error;
        }
    }, (error) => {
        var errorMessage = new Error(error.errorMessage);
        throw errorMessage;
    })
    .then((response) => response.json())
    .catch(error => {
        console.log('POST feedback' + error.message);
        alert('Feedback could not be posted:\n' + error.message);
    })
  }



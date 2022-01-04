import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

// export const postComment = (donationId, description, image,typedonation) => (dispatch) => {

//     const newComment = {
//         donation: donationId,
//         description: description,
//         image:image,
//         typedonation:typedonation,
        
        
//     }
//     console.log('Comment ', newComment);

//     const bearer = 'Bearer ' + localStorage.getItem('token');

//     return fetch(baseUrl + 'offres', {
//         method: 'POST',
//         body: JSON.stringify(newComment),
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': bearer
//         },
//         credentials: 'same-origin'
//     })
//     .then(response => {
//         if (response.ok) {
//             return response;
//         }
//         else {
//             var error = new Error('Error ' + response.status + ': ' + response.statusText);
//             error.response = response;
//             throw error;
//         }
//     },
//     error => {
//         var errmess = new Error(error.message);
//         throw errmess;
//     })
//     .then(response => response.json())
//     .then(response => dispatch(addComment(response)))
//     .catch(error => { console.log('Post comments ', error.message);
//         alert('Your comment could not be posted\nError: '+ error.message); })
// }

export const deleteComment=(donationId,rating,comment,file)=> (dispatch) => {

    const deleteComment = {
        donation: donationId,
        rating:rating,
        comment:comment,
        file:file,
    }
    console.log('Comment ', deleteComment);

    const bearer = 'Bearer ' + localStorage.getItem('token');
    // hayde eli ma 3am tozbat ----- seme3kon --ok
    return fetch(baseUrl + 'comments', {
        method: 'DELETE',
        body: JSON.stringify(deleteComment),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            return response;
            // ok hon badna nchil el item eli 3melnelo delete men el store
            //3emlin chi action ta nchil el item eli 3melnenlo delete men el store?
        }
        else {
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
    .then(response => dispatch(deleteComment(response)))
    .catch(error => { console.log('Post comments ', error.message);
        alert('Your comment could not be posted\nError: '+ error.message); })
}


export const postComment = (donationId,rating, comment,file) => (dispatch) => {

    const newComment = {
        donation: donationId,
        rating:rating,
        comment:comment,
        file:file,
    }
    console.log('Comment ', newComment);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
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
    .then(response => dispatch(deleteComment(response)))
    .catch(error => { console.log('Post comments ', error.message);
        alert('Your comment could not be posted\nError: '+ error.message); })
}
export const fetchDonations = () => (dispatch) => {
    dispatch(donationsLoading());

    return fetch(baseUrl + 'donations')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
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
            }
            else {
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
}

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const deleteComments = (comments) => ({
    type: ActionTypes.DELETE_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
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
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)));
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

export const fetchLeaders = () => (dispatch) => {
    
    dispatch(leadersLoading());

    return fetch(baseUrl + 'leaders')
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
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(error => dispatch(leadersFailed(error.message)));
}

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});



export const requestLogin = (creds) => {
    return {
        type: ActionTypes.LOGIN_REQUEST,
        creds
    }
}
  
export const receiveLogin = (response) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token: response.token
    }
}
  
export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}

export const loginUser = (creds) => (dispatch) => {
    
    dispatch(requestLogin(creds))

    return fetch(baseUrl + 'users/login', {
        method: 'POST',
        headers: { 
            'Content-Type':'application/json' 
        },
        body: JSON.stringify(creds)
    })
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
            throw error;
        })
    .then(response => response.json())
    .then(response => {
        if (response.success) {
           
            localStorage.setItem('token', response.token);
            localStorage.setItem('creds', JSON.stringify(creds));
           
           
            dispatch(receiveLogin(response));
        }
        else {
            var error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(loginError(error.message)))
};

export const requestLogout = () => {
    return {
      type: ActionTypes.LOGOUT_REQUEST
    }
}
  
export const receiveLogout = () => {
    return {
      type: ActionTypes.LOGOUT_SUCCESS
    }
}


export const logoutUser = () => (dispatch) => {
    dispatch(requestLogout())
    localStorage.removeItem('token');
    localStorage.removeItem('creds');
    dispatch(receiveLogout())
}


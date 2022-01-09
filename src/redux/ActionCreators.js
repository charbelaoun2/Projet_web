import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addOffre = (offre) => ({
    type: ActionTypes.ADD_OFFRE,
    payload: offre
});


export const postOffre = (donationId,rating, comment,file) => (dispatch) => {

    const newOffre = {
        donation: donationId,
        rating:rating,
        comment:comment,
        file:file,
    }
    console.log('offre ', newOffre);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'offres', {
        method: 'POST',
        body: JSON.stringify(newOffre),
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
    .then(response => dispatch(addOffre(response)))
    .catch(error => { console.log('Post offres ', error.message);
        alert('Your offre could not be posted\nError: '+ error.message); })
}

export const deleteOffre = (offreId) => (dispatch) => {

    const deleteOffre = {
       offre:offreId,
       
    }
    console.log('offre ', deleteOffre);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(`http://localhost:3000/offres/${offreId}`, {
        method: 'DELETE',
        body: JSON.stringify(deleteOffre),
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
    .then(response => dispatch(deleteOffre(response)))
    .catch(error => { console.log('Delete offres ', error.message);
    alert("Your offre has been deleted!");
         })
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

export const usersLoading = () => ({
    type: ActionTypes.USERS_LOADING
});

export const usersFailed = (errmess) => ({
    type: ActionTypes.USERS_FAILED,
    payload: errmess
});

export const addDonations = (donations) => ({
    type: ActionTypes.ADD_DONATIONS,
    payload: donations
});

export const fetchoffres = () => (dispatch) => {
    return fetch(baseUrl + 'offres')
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
        .then(offres => dispatch(addOffres(offres)))
        .catch(error => dispatch(offresFailed(error.message)));
}
export const fetchusers = () => (dispatch) => {

    dispatch(usersLoading());
    return fetch(baseUrl + 'users')
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
        .then(users => dispatch(addUsers(users)))
        .catch(error => dispatch(usersFailed(error.message)));
}

export const offresFailed = (errmess) => ({
    type: ActionTypes.OFFRES_FAILED,
    payload: errmess
});



export const addOffres = (offres) => ({
    type: ActionTypes.ADD_OFFRES,
    payload: offres
});

export const addUsers = (users) => ({
    type: ActionTypes.ADD_USERS,
    payload: users
});
export const deleteOffres = (offres) => ({
    type: ActionTypes.DELETE_OFFRES,
    payload: offres
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

export const requestsignup = (response) => {
    return {
        type: ActionTypes.SIGNUP_REQUEST,
        token: response.token
    }
}

export const receiveSignup = (response) => {
    return {
        type: ActionTypes.SIGNUP_SUCCESS,
        token: response.token
    }
}

export const SignupError = (message) => {
    return {
        type: ActionTypes.SIGNUP_FAILURE,
        message
    }
}

export const signupUser = (creds) => (dispatch) => {
    
    dispatch(requestsignup(creds))

    return fetch(baseUrl + 'users/signup', {
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
           
           
            dispatch(receiveSignup(response));
        }
        else {
            var error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(SignupError(error.message)))
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


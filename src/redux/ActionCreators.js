import * as ActionTypes from './ActionTypes';
import { DONATIONS } from '../shared/donations'

// export const addComment = (donationId, rating, author, comment) => ({
//     type: ActionTypes.ADD_COMMENT,
//     payload: {
//         donationId: donationId,
//         rating: rating,
//         author: author,
//         comment: comment
//     }
// }); 
export const fetchDonations = () => (dispatch) => {

    dispatch(donationsLoading(true));

    setTimeout(() => {
        dispatch(addDonations(DONATIONS));
    }, 2000);
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
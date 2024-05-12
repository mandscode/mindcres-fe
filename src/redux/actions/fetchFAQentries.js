import { FETCH_FAQ_ENTRIES_FAILURE, FETCH_FAQ_ENTRIES_REQUEST, FETCH_FAQ_ENTRIES_SUCCESS } from "./actionTypes";
import endPoints from "../../API/endPoints"
import baseAPI from "../../API/baseAPI";

export const fetchFAQentriesRequest = () => ({
    type: FETCH_FAQ_ENTRIES_REQUEST,
});
  
export const fetchFAQentriesSuccess = (data) => ({
    type: FETCH_FAQ_ENTRIES_SUCCESS,
    payload: data,
});
  
export const fetchFAQentriesFailure = (error) => ({
    type: FETCH_FAQ_ENTRIES_FAILURE,
    payload: error,
});

export const fetchFAQentries = () => {
    return async (dispatch) => {
        dispatch(fetchFAQentriesRequest());
        try {
            const response = await baseAPI.get(`/${endPoints.FAQ_ENTRIES.fetchFAQentries}`);
            dispatch(fetchFAQentriesSuccess(response.data));
        } catch (error) {
            dispatch(fetchFAQentriesFailure(error.message));
        }
    };
};


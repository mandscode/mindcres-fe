import { FETCH_TAB_DETAILS_FAILURE, FETCH_TAB_DETAILS_SUCCESS, FETCH_TAB_DETAILS_REQUEST } from "./actionTypes";
import endPoints from "../../API/endPoints"
import baseAPI from "../../API/baseAPI";

export const fetchTabDetailsRequest = () => ({
    type: FETCH_TAB_DETAILS_REQUEST,
});
  
export const fetchTabDetailsSuccess = (data) => ({
    type: FETCH_TAB_DETAILS_SUCCESS,
    payload: data,
});
  
export const fetchTabDetailsFailure = (error) => ({
    type: FETCH_TAB_DETAILS_FAILURE,
    payload: error,
});

export const fetchTabDetails = () => {
    return async (dispatch) => {
        dispatch(fetchTabDetailsRequest());
        try {
            const response = await baseAPI.get(`/${endPoints.TAB_BASIC_DETAILS.fetchTabDetails}`);
            
            dispatch(fetchTabDetailsSuccess(response.data));
        } catch (error) {
            dispatch(fetchTabDetailsFailure(error.message));
        }
    };
};


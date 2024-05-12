import { FETCH_PRODUCT_CONTENT_FAILURE, FETCH_PRODUCT_CONTENT_SUCCESS, FETCH_PRODUCT_CONTENT_REQUEST } from "./actionTypes";
import endPoints from "../../API/endPoints"
import baseAPI from "../../API/baseAPI";

export const fetchProductsContentRequest = () => ({
    type: FETCH_PRODUCT_CONTENT_REQUEST,
});
  
export const fetchProductsContentSuccess = (data) => ({
    type: FETCH_PRODUCT_CONTENT_SUCCESS,
    payload: data,
});
  
export const fetchProductsContentFailure = (error) => ({
    type: FETCH_PRODUCT_CONTENT_FAILURE,
    payload: error,
});

export const fetchProductContent = () => {
    return async (dispatch) => {
        dispatch(fetchProductsContentRequest());
        try {
            const response = await baseAPI.get(`/${endPoints.PRODUCT_BASIC_DETAILS.fetchProductContent}`);
            dispatch(fetchProductsContentSuccess(response.data));
        } catch (error) {
            dispatch(fetchProductsContentFailure(error.message));
        }
    };
};
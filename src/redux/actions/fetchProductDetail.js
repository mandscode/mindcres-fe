import { FETCH_PRODUCT_DETAILS_FAILURE, FETCH_PRODUCT_DETAILS_REQUEST, FETCH_PRODUCT_DETAILS_SUCCESS } from "./actionTypes";
import endPoints from "../../API/endPoints"
import baseAPI from "../../API/baseAPI";

export const fetchProductsDetailRequest = () => ({
    type: FETCH_PRODUCT_DETAILS_REQUEST,
});
  
export const fetchProductsDetailSuccess = (data) => ({
    type: FETCH_PRODUCT_DETAILS_SUCCESS,
    payload: data,
});
  
export const fetchProductsDetailFailure = (error) => ({
    type: FETCH_PRODUCT_DETAILS_FAILURE,
    payload: error,
});
  

export const fetchProductDetail = () => {
    return async (dispatch) => {
        dispatch(fetchProductsDetailRequest());
        try {
            const response = await baseAPI.get(`/${endPoints.PRODUCT_BASIC_DETAILS.fetchProductDetails}`);
            dispatch(fetchProductsDetailSuccess(response.data));
        } catch (error) {
            dispatch(fetchProductsDetailFailure(error.message));
        }
    };
};
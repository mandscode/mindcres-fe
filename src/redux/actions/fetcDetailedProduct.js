import { PRODUCT_FULL_DETAIL_FAILURE, PRODUCT_FULL_DETAIL_SUCCESS, PRODUCT_FULL_DETAIL_REQUEST } from "./actionTypes";

export const fetchDetailedProductRequest = () => ({
    type: PRODUCT_FULL_DETAIL_REQUEST,
});
  
export const fetchDetailedProductSuccess = (data) => ({
    type: PRODUCT_FULL_DETAIL_SUCCESS,
    payload: data,
});
  
export const fetchDetailedProductFailure = (error) => ({
    type: PRODUCT_FULL_DETAIL_FAILURE,
    payload: error,
});

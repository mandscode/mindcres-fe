import { FETCH_PRODUCT_DETAILS_FAILURE, FETCH_PRODUCT_DETAILS_REQUEST, FETCH_PRODUCT_DETAILS_SUCCESS } from "../actions/actionTypes";

const fetchProductDetailReducer = (state = { data: null, loading: false, error: null }, action) => {
    switch (action.type) {
      case FETCH_PRODUCT_DETAILS_REQUEST:
        return { ...state, loading: true };
      case FETCH_PRODUCT_DETAILS_SUCCESS:
        return { ...state, loading: false, data: action.payload, error: null };
      case FETCH_PRODUCT_DETAILS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
};

export default fetchProductDetailReducer;
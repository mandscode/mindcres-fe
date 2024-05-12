import { PRODUCT_FULL_DETAIL_FAILURE, PRODUCT_FULL_DETAIL_SUCCESS, PRODUCT_FULL_DETAIL_REQUEST } from "../actions/actionTypes";

const fetchDetailedProduct = (state = { data: null, loading: false, error: null }, action) => {
    switch (action.type) {
      case PRODUCT_FULL_DETAIL_REQUEST:
        return { ...state, loading: true };
      case PRODUCT_FULL_DETAIL_SUCCESS:
        return { ...state, loading: false, data: action.payload, error: null };
      case PRODUCT_FULL_DETAIL_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
};

export default fetchDetailedProduct;
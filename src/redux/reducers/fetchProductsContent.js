import { FETCH_PRODUCT_CONTENT_FAILURE, FETCH_PRODUCT_CONTENT_SUCCESS, FETCH_PRODUCT_CONTENT_REQUEST } from "../actions/actionTypes";

const fetchProductContent = (state = { data: null, loading: false, error: null }, action) => {
    switch (action.type) {
      case FETCH_PRODUCT_CONTENT_REQUEST:
        return { ...state, loading: true };
      case FETCH_PRODUCT_CONTENT_SUCCESS:
        return { ...state, loading: false, data: action.payload, error: null };
      case FETCH_PRODUCT_CONTENT_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
};

export default fetchProductContent;
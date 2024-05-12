import { FETCH_TAB_DETAILS_FAILURE, FETCH_TAB_DETAILS_SUCCESS, FETCH_TAB_DETAILS_REQUEST } from "../actions/actionTypes";

const fetchTabDetails = (state = { data: null, loading: false, error: null }, action) => {
    switch (action.type) {
      case FETCH_TAB_DETAILS_REQUEST:
        return { ...state, loading: true };
      case FETCH_TAB_DETAILS_SUCCESS:
        return { ...state, loading: false, data: action.payload, error: null };
      case FETCH_TAB_DETAILS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
};

export default fetchTabDetails;
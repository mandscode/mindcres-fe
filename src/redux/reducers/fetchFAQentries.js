import { FETCH_FAQ_ENTRIES_FAILURE, FETCH_FAQ_ENTRIES_REQUEST, FETCH_FAQ_ENTRIES_SUCCESS } from "../actions/actionTypes";

const fetchFAQentries = (state = { data: null, loading: false, error: null }, action) => {
    switch (action.type) {
      case FETCH_FAQ_ENTRIES_REQUEST:
        return { ...state, loading: true };
      case FETCH_FAQ_ENTRIES_SUCCESS:
        return { ...state, loading: false, data: action.payload, error: null };
      case FETCH_FAQ_ENTRIES_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
};

export default fetchFAQentries;
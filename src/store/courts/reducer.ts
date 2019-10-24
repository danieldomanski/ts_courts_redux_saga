import { Reducer } from "redux";
import { ICourtsState, CourtsActionTypes } from "./model";

const initialState: ICourtsState = {
  items: [],
  errors: undefined,
  loading: false
};

const reducer: Reducer<ICourtsState> = (state = initialState, action) => {
  switch (action.type) {
    case CourtsActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case CourtsActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, items: action.payload };
    }
    case CourtsActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as courtsReducer };

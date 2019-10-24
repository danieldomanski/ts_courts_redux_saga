import { Reducer } from "redux";
import { ISchoolsState, SchoolActionTypes } from "./model";

const initialState: ISchoolsState = {
  items: [],
  errors: undefined,
  loading: false
};

const reducer: Reducer<ISchoolsState> = (state = initialState, action) => {
  switch (action.type) {
    case SchoolActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case SchoolActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, items: action.payload };
    }
    case SchoolActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as schoolsReducer };

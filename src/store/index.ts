import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import { ISchoolsState } from "./schools/model";

import { schoolSaga } from "./schools/sagas";

export interface ApplicationState {
  schools: ISchoolsState;
}

export function* rootSaga() {
  yield all([fork(schoolSaga)]);
}

import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";

import { ISchoolsState } from "./schools/model";
import { schoolSaga } from "./schools/sagas";

import { ICourtsState } from "./courts/model";
import { courtsSaga } from "./courts/sagas";

export interface ApplicationState {
  schools: ISchoolsState;
  courts: ICourtsState;
}

export function* rootSaga() {
  yield all([fork(schoolSaga), fork(courtsSaga)]);
}

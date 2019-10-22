import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { SchoolActionTypes } from "./model";
import { fetchError, fetchSuccess } from "./actions";
import { callApi } from "../../utils/api";

const API_ENDPOINT =
  "https://www.courtlistener.com/api/rest/v3/schools/?format=json";

function* handleFetch() {
  try {
    // To call async functions, use redux-saga's `call()`.
    const res = yield call(callApi, "get", API_ENDPOINT, "/schools");
    console.log(res);
    if (res.error) {
      yield put(fetchError(res.error));
    } else if (res.detail) {
      yield put(fetchError(res.detail));
    } else {
      yield put(fetchSuccess(res.results));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchError(err.stack!));
    } else {
      yield put(fetchError("An unknown error occured."));
    }
  }
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchFetchRequest() {
  yield takeEvery(SchoolActionTypes.FETCH_REQUEST, handleFetch);
}

// Export our root saga.
// We can also use `fork()` here to split our saga into multiple watchers.
export function* schoolSaga() {
  yield all([fork(watchFetchRequest)]);
}

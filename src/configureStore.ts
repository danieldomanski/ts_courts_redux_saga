import { Store, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { schoolsReducer } from "./store/schools/reducer";
import { combineReducers } from "redux";

import { ApplicationState, rootSaga } from "./store";

export default function configureStore(initialState: {}): Store<
  ApplicationState
> {
  // create the redux-saga middleware
  const sagaMiddleware = createSagaMiddleware();

  // We'll create our store with the combined reducers/sagas, and the initial Redux state that
  // we'll be passing from our entry point.
  const store = createStore(
    combineReducers({
      schools: schoolsReducer
    }),
    initialState,
    applyMiddleware(sagaMiddleware)
  );

  // Don't forget to run the root saga, and return the store object.
  sagaMiddleware.run(rootSaga);
  return store;
}

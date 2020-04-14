import { takeLatest } from "redux-saga/effects";

import { workerUserConnect, workerUserCreate } from "./userRequest";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("CONNECT", workerUserConnect);
  yield takeLatest("CREATE", workerUserCreate);

}

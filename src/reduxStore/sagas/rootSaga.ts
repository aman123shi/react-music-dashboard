import { all } from "redux-saga/effects";
import { songSagas } from "./songSaga";
import { dashboardSagas } from "./dashboardSaga";

export default function* rootSaga() {
  yield all([...songSagas, ...dashboardSagas]);
}

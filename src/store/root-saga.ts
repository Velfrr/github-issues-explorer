import { all, fork } from 'redux-saga/effects';
import { issuesSaga } from '../modules/issues';

export function* rootSaga() {
  yield all([fork(issuesSaga)]);
}

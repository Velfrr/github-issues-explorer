import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getIssues, getIssuesCount } from '../api';
import { ActionWithCallbacks } from '../../../types/action-with-callbacks';
import {
  fetchIssueDetails,
  fetchIssueDetailsFailure,
  fetchIssueDetailsSuccess,
  fetchIssues,
  fetchIssuesFailure,
  fetchIssuesSuccess,
} from './issues.slice';
import { FetchIssueDetailsPayload, FetchIssuesPayload } from './issue.types';
import { getIssueDetails } from '../api/get-issue-details';
import { checkIsApiError, extractErrorMessage } from '../../../utils';

function* fetchIssuesSaga(
  action: ActionWithCallbacks<FetchIssuesPayload>,
): Generator {
  const { data, onFailure, onSuccess } = action.payload;

  try {
    const [issues, total] = yield all([
      call(getIssues, data),
      call(getIssuesCount, data),
    ]);

    yield put(fetchIssuesSuccess({ issues, total }));

    onSuccess?.();
  } catch (e) {
    if (checkIsApiError(e) && +e.status === 404) {
      yield put(fetchIssuesSuccess({ issues: [], total: 0 }));
      return;
    }

    yield put(fetchIssuesFailure());

    onFailure?.(extractErrorMessage(e));
  }
}

function* fetchIssueDetailsSaga(
  action: ActionWithCallbacks<FetchIssueDetailsPayload>,
): Generator {
  const { data, onFailure, onSuccess } = action.payload;

  try {
    const issues = yield call(getIssueDetails, data);

    yield put(fetchIssueDetailsSuccess(issues));

    onSuccess?.();
  } catch (e) {
    yield put(fetchIssueDetailsFailure());

    onFailure?.(extractErrorMessage(e));
  }
}

export function* issuesSaga() {
  yield takeLatest(fetchIssues.type, fetchIssuesSaga);
  yield takeLatest(fetchIssueDetails.type, fetchIssueDetailsSaga);
}

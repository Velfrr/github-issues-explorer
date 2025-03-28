import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Issue } from '../types';
import { ActionWithCallbacks } from '../../../types/action-with-callbacks';
import {
  FetchIssueDetailsPayload,
  FetchIssuesPayload,
  FetchIssuesSuccessPayload,
  IssuesState,
} from './issue.types';

const initialState: IssuesState = {
  isLoading: false,
  issues: [],
  totalIssues: 0,
  issue: null,
};

const issuesSlice = createSlice({
  name: 'issues',
  initialState: initialState,
  reducers: {
    fetchIssues(state, _action: ActionWithCallbacks<FetchIssuesPayload>) {
      state.isLoading = true;
    },
    fetchIssuesSuccess(
      state,
      action: PayloadAction<FetchIssuesSuccessPayload>,
    ) {
      state.issues = action.payload.issues;
      state.totalIssues = action.payload.total;
      state.isLoading = false;
    },
    fetchIssuesFailure(state) {
      state.isLoading = false;
    },
    fetchIssueDetails(
      state,
      _action: ActionWithCallbacks<FetchIssueDetailsPayload>,
    ) {
      state.isLoading = true;
    },
    fetchIssueDetailsSuccess(state, action: PayloadAction<Issue>) {
      state.issue = action.payload;
      state.isLoading = false;
    },
    fetchIssueDetailsFailure(state) {
      state.isLoading = false;
    },
  },
});

export const {
  fetchIssues,
  fetchIssuesFailure,
  fetchIssuesSuccess,
  fetchIssueDetails,
  fetchIssueDetailsFailure,
  fetchIssueDetailsSuccess,
} = issuesSlice.actions;

export const issuesReducer = issuesSlice.reducer;

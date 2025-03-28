import { SortDirection } from '../../../enums';
import { IssuesSortBy } from '../enums';
import { Issue } from '../types';

export type IssuesState = {
  isLoading: boolean;
  issues: Issue[];
  totalIssues: number;
  issue: Issue | null;
};

export type FetchIssuesPayload = {
  owner: string;
  repo: string;
  page?: number;
  perPage?: number;
  sort?: IssuesSortBy;
  direction?: SortDirection;
};

export type FetchIssueDetailsPayload = {
  owner: string;
  repo: string;
  number: number;
};

export type FetchIssuesSuccessPayload = {
  issues: Issue[];
  total: number;
};

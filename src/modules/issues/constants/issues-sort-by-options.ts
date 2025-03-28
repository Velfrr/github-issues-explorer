import { IssuesSortBy } from '../enums';

export const ISSUES_SORT_BY_OPTIONS = [
  { label: 'Creation date', value: IssuesSortBy.Created },
  { label: 'Update date', value: IssuesSortBy.Updated },
  { label: 'Comments count', value: IssuesSortBy.Comments },
];

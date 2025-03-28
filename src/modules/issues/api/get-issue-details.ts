import { api } from '../../../api';
import { FetchIssueDetailsPayload } from '../store';
import { Issue } from '../types';

export const getIssueDetails = async ({
  owner,
  repo,
  number,
}: FetchIssueDetailsPayload): Promise<Issue> => {
  const response = await api.get<Issue>(
    `repos/${owner}/${repo}/issues/${number}`,
  );

  return response.data;
};

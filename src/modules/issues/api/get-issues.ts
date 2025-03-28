import { api } from '../../../api';
import { FetchIssuesPayload } from '../store';
import { Issue } from '../types';

export const getIssues = async ({
  owner,
  repo,
  page,
  perPage,
  sort,
  direction,
}: FetchIssuesPayload): Promise<Issue[]> => {
  const response = await api.get<Issue[]>(`repos/${owner}/${repo}/issues`, {
    params: { page, per_page: perPage, sort, direction, state: 'all' },
  });

  return response.data;
};

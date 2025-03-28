import { api } from '../../../api';
import { FetchIssuesPayload } from '../store';
import { GetRepositoryResponse } from '../types/repository';

export const getIssuesCount = async ({
  owner,
  repo,
}: FetchIssuesPayload): Promise<number> => {
  const query = `
    query {
      repository(owner: "${owner}", name:"${repo}") {
        issues {
          totalCount
        }
      }
    }
  `;

  const response = await api.post<GetRepositoryResponse>('graphql', { query });

  return response.data.data?.repository?.issues?.totalCount;
};

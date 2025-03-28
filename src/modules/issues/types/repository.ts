export type GetRepositoryResponse = {
  data: {
    repository: {
      issues: {
        totalCount: number;
      };
    };
  };
};

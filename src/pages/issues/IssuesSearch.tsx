import { FC, ReactNode, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  fetchIssues,
  IssuesList,
  IssuesSortBy,
  IssuesSorter,
  SearchIssuesForm,
  SearchIssuesFormPayload,
} from '../../modules/issues';
import { usePagination } from '../../hooks/use-pagination';
import { toast } from 'react-toastify';
import {
  createEnumParam,
  StringParam,
  useQueryParam,
  withDefault,
} from 'use-query-params';
import { SortDirection } from '../../enums';

const PAGE_SIZE = 4;

const SortingDirectionParam = createEnumParam(Object.values(SortDirection));
const IssuesSortByParam = createEnumParam(Object.values(IssuesSortBy));

export const IssuesSearchPage: FC = (): ReactNode => {
  const dispatch = useAppDispatch();

  const { isLoading, issues, totalIssues } = useAppSelector(
    (state) => state.issues,
  );

  const { currentPage, handleChangePage } = usePagination();

  const [owner, setOwner] = useQueryParam('owner', StringParam);
  const [repo, setRepo] = useQueryParam('repo', StringParam);
  const [sortBy, setSortBy] = useQueryParam(
    'sortBy',
    withDefault(IssuesSortByParam, IssuesSortBy.Created),
  );
  const [sortDirection, setSortDirection] = useQueryParam(
    'sortDirection',
    withDefault(SortingDirectionParam, SortDirection.Descending),
  );

  const handleSearchIssuesFormSubmit = (values: SearchIssuesFormPayload) => {
    setOwner(values.owner);
    setRepo(values.repo);
    handleChangePage(1);
  };

  const handleSortByChange = (value: IssuesSortBy) => {
    setSortBy(value);
  };

  const handleSortDirectionChange = (value: SortDirection) => {
    setSortDirection(value);
  };

  useEffect(() => {
    if (!owner || !repo) return;

    dispatch(
      fetchIssues({
        data: {
          owner: owner,
          repo: repo,
          page: currentPage,
          perPage: PAGE_SIZE,
          sort: sortBy,
          direction: sortDirection,
        },
        onFailure: () => toast.error('Error occured while fetching issues'),
      }),
    );
  }, [currentPage, dispatch, owner, repo, sortBy, sortDirection]);

  return (
    <div className="mx-auto flex w-full max-w-[800px] flex-col items-center px-4 py-10">
      <SearchIssuesForm
        initialValues={{ owner, repo }}
        onSubmit={handleSearchIssuesFormSubmit}
      />

      <IssuesSorter
        sortBy={sortBy}
        handleSortByChange={handleSortByChange}
        sortDirection={sortDirection}
        handleSortDirectionChange={handleSortDirectionChange}
        className="mt-6 self-end"
      />

      <IssuesList
        issues={issues}
        isLoading={isLoading}
        repo={repo}
        owner={owner}
        pagination={{
          current: currentPage,
          onChange: handleChangePage,
          pageSize: PAGE_SIZE,
          total: totalIssues,
          showSizeChanger: false,
        }}
      />
    </div>
  );
};

import { Empty, List, ListProps } from 'antd';
import { FC, ReactNode } from 'react';
import { Issue } from '../types';
import { IssueItem } from './IssueItem';

type Props = {
  issues: Issue[];
  repo?: string | null;
  owner?: string | null;
  isLoading: boolean;
  pagination: ListProps<Issue>['pagination'];
};

export const IssuesList: FC<Props> = ({
  isLoading,
  issues,
  pagination,
  repo,
  owner,
}): ReactNode => {
  if (!isLoading && issues.length === 0) {
    return <Empty className="mt-8" description="No issues were found" />;
  }

  return (
    <List
      className="w-full"
      size="large"
      itemLayout="vertical"
      dataSource={issues}
      loading={isLoading}
      pagination={pagination}
      renderItem={(item) => (
        <List.Item className="!px-0">
          <IssueItem repo={repo} owner={owner} issue={item} />
        </List.Item>
      )}
    />
  );
};

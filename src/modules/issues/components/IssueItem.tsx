import { FC, ReactNode } from 'react';
import { Issue } from '../types';
import { Avatar, Card, Tag, Tooltip } from 'antd';
import dayjs from 'dayjs';
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { cn } from '../../../utils';
import { Link } from 'react-router';

type Props = {
  issue: Issue;
  repo?: string | null;
  owner?: string | null;
  className?: string;
};

export const IssueItem: FC<Props> = ({
  issue,
  repo,
  owner,
  className,
}): ReactNode => {
  return (
    <Card
      className={cn(
        'rounded-lg border border-gray-200 shadow-md transition hover:shadow-lg',
        className,
      )}
    >
      <div className="flex items-start gap-x-4">
        {issue.state === 'open' ? (
          <Tooltip title="Open">
            <ExclamationCircleOutlined className="mt-1 text-xl !text-red-500" />
          </Tooltip>
        ) : (
          <Tooltip title="Closed">
            <CheckCircleOutlined className="mt-1 text-xl !text-green-500" />
          </Tooltip>
        )}

        <div className="grow">
          <Link
            className="text-lg font-semibold"
            to={`/${owner}/${repo}/${issue.number}`}
          >
            {issue.title}
          </Link>

          <div className="mt-2 flex flex-wrap gap-2">
            {issue.labels.map((label) => (
              <Tag key={label.id} color={`#${label.color}`}>
                {label.name}
              </Tag>
            ))}
          </div>

          <div className="mt-3 flex items-center gap-x-2 text-sm text-gray-500">
            <Tooltip title={issue.user.login}>
              <Avatar size={30} src={issue.user.avatar_url} />
            </Tooltip>

            <p>#{issue.number}</p>

            <p className="ml-auto">
              Created at{' '}
              {dayjs(issue.created_at).format('HH:mm, MMMM DD, YYYY')}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

import { FC, ReactNode, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchIssueDetails } from '../../modules/issues';
import { Link, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { Card, Badge, Skeleton, Tag, Avatar, Tooltip } from 'antd';
import {
  LikeOutlined,
  DislikeOutlined,
  RocketOutlined,
  CommentOutlined,
} from '@ant-design/icons';
import dayjs from 'dayjs';

export const IssueDetailsPage: FC = (): ReactNode => {
  const dispatch = useAppDispatch();

  const { isLoading, issue } = useAppSelector((state) => state.issues);

  const { owner, repo, number } = useParams();

  useEffect(() => {
    if (!owner || !repo || !number) return;

    dispatch(
      fetchIssueDetails({
        data: { owner, repo, number: Number(number) },
        onFailure: () =>
          toast.error('Error occurred while fetching issue details'),
      }),
    );
  }, [dispatch, number, owner, repo]);

  if (isLoading) {
    return (
      <div className="mx-auto max-w-[780px] p-6">
        <Card
          title={<Skeleton className="py-4" active paragraph={{ rows: 1 }} />}
        >
          <Skeleton active paragraph={{ rows: 6 }} />
        </Card>
      </div>
    );
  }

  if (!issue) {
    return (
      <div className="text-center">
        <h2 className="mt-40 text-center text-2xl font-medium">
          Issue not found.
        </h2>
        <p className="text-lg text-gray-500">
          The issue you are looking for may be deleted
          <br />
          or the issue number is incorrect.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[780px] p-6">
      <Card
        title={
          <Link to={issue.html_url} target="_blank">
            #{issue.number} - {issue.title}
          </Link>
        }
      >
        <div className="flex items-center gap-3">
          <Avatar src={issue.user?.avatar_url} alt={issue.user?.login} />
          <div>
            <p className="font-semibold">{issue.user?.login}</p>
            <p className="text-sm text-gray-500">{issue.user?.html_url}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Badge
            className="rounded px-3 py-1 text-sm text-white"
            color={issue.state === 'open' ? 'green' : 'red'}
            text={issue.state.toUpperCase()}
          />
          {issue.labels?.map((label) => (
            <Tag key={label.id} color={`#${label.color}`}>
              {label.name}
            </Tag>
          ))}
        </div>

        <div className="mt-4 rounded-md border bg-gray-50 p-4 text-gray-800">
          <p className="whitespace-pre-wrap">
            {issue.body || 'No description provided.'}
          </p>
        </div>

        <div className="flex flex-wrap items-end justify-between">
          <div className="mt-4 flex gap-4 text-gray-600">
            <Tooltip title="Likes">
              <div className="flex items-center gap-1">
                <LikeOutlined /> {issue.reactions?.['+1'] || 0}
              </div>
            </Tooltip>
            <Tooltip title="Dislikes">
              <div className="flex items-center gap-1">
                <DislikeOutlined /> {issue.reactions?.['-1'] || 0}
              </div>
            </Tooltip>
            <Tooltip title="Rocket">
              <div className="flex items-center gap-1">
                <RocketOutlined /> {issue.reactions?.rocket || 0}
              </div>
            </Tooltip>
            <Tooltip title="Comments">
              <div className="flex items-center gap-1">
                <CommentOutlined /> {issue.comments}
              </div>
            </Tooltip>
          </div>

          <div className="mt-4 flex flex-col items-end gap-1 text-sm text-gray-500">
            <p>
              <span className="font-semibold">Created at:</span>{' '}
              {dayjs(issue.created_at).format('DD/MM/YYYY, HH:mm:ss')}
            </p>
            <p>
              <span className="font-semibold">Updated at:</span>{' '}
              {dayjs(issue.updated_at).format('DD/MM/YYYY, HH:mm:ss')}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

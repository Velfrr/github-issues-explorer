import { FC, ReactNode } from 'react';
import { cn } from '../../../utils';
import { Button, Select, Space, Tooltip } from 'antd';
import { SortDirection } from '../../../enums';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { ISSUES_SORT_BY_OPTIONS } from '../constants';
import { IssuesSortBy } from '../enums';

type Props = {
  sortBy: IssuesSortBy;
  handleSortByChange: (sortBy: IssuesSortBy) => void;
  sortDirection: SortDirection;
  handleSortDirectionChange: (sortDirection: SortDirection) => void;
  className?: string;
};

export const IssuesSorter: FC<Props> = ({
  sortBy,
  handleSortByChange,
  sortDirection,
  handleSortDirectionChange,
  className,
}): ReactNode => {
  const handleToggleSortDirection = () => {
    handleSortDirectionChange(
      sortDirection === SortDirection.Ascending
        ? SortDirection.Descending
        : SortDirection.Ascending,
    );
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <h2>Sort by:</h2>

      <Space.Compact>
        <Select
          value={sortBy}
          onChange={handleSortByChange}
          className="w-[170px]"
          size="large"
          placeholder="Sort by"
          options={ISSUES_SORT_BY_OPTIONS}
        />
        <Tooltip title="Sort direction">
          <Button
            onClick={handleToggleSortDirection}
            size="large"
            icon={
              sortDirection === SortDirection.Descending ? (
                <ArrowDownOutlined />
              ) : (
                <ArrowUpOutlined />
              )
            }
          />
        </Tooltip>
      </Space.Compact>
    </div>
  );
};

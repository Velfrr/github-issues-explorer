import { useState } from 'react';
import { NumberParam, useQueryParam, withDefault } from 'use-query-params';

export const usePagination = (mode: 'state' | 'query' = 'query') => {
  const [statePage, setStatePage] = useState(1);
  const [queryPage, setQueryPage] = useQueryParam(
    'page',
    withDefault(NumberParam, 1),
  );

  const currentPage = mode === 'state' ? statePage : queryPage;

  const handleChangePage = (page: number): void => {
    if (mode === 'state') {
      setStatePage(page);
    } else {
      setQueryPage(page);
    }
  };

  return {
    handleChangePage,
    currentPage,
  };
};

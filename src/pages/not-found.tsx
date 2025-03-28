import { Button, Result } from 'antd';
import { FC, ReactNode } from 'react';
import { Link } from 'react-router';

export const NotFoundPage: FC = (): ReactNode => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Result
        status="404"
        title="Page not found"
        subTitle="The page you was looking for could not be found. Please try later or navigate to home page"
        extra={
          <Link to="/">
            <Button type="primary">Navigate to home page</Button>
          </Link>
        }
      />
    </div>
  );
};

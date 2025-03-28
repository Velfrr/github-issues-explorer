import { FC, ReactNode } from 'react';
import { Result, Button } from 'antd';

export const ErrorFallback: FC = (): ReactNode => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <Result
        status="error"
        title="Something went wrong"
        subTitle="An unexpected error occurred. Please try refreshing the page."
        extra={
          <Button type="primary" onClick={handleReload}>
            Reload Page
          </Button>
        }
      />
    </div>
  );
};

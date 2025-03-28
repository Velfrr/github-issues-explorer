import { Button, Form, Input } from 'antd';
import { FC, ReactNode } from 'react';
import { SearchIssuesFormPayload } from '../types';
import { PartialNullable } from '../../../types';

type Props = {
  initialValues: PartialNullable<SearchIssuesFormPayload>;
  onSubmit: (payload: SearchIssuesFormPayload) => void;
};

export const SearchIssuesForm: FC<Props> = ({
  initialValues,
  onSubmit,
}): ReactNode => {
  const [form] = Form.useForm();

  return (
    <Form
      initialValues={initialValues}
      form={form}
      onFinish={onSubmit}
      layout="vertical"
      className="flex gap-2"
    >
      <Form.Item
        name="owner"
        label="Organization"
        rules={[{ required: true, message: 'Organization is required' }]}
      >
        <Input size="large" placeholder="Enter organization" />
      </Form.Item>
      <Form.Item
        name="repo"
        label="Repository"
        rules={[{ required: true, message: 'Repository is required' }]}
      >
        <Input size="large" placeholder="Enter repository name" />
      </Form.Item>
      <Form.Item label=" ">
        <Button
          className="w-[110px]"
          size="large"
          type="primary"
          htmlType="submit"
        >
          Search
        </Button>
      </Form.Item>
    </Form>
  );
};

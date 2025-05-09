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
      className="flex justify-center gap-2 rounded-lg border border-slate-300 !px-10 !pt-6 !pb-2 shadow-lg"
    >
      <Form.Item
        name="owner"
        label="Organization (e.g. facebook)"
        rules={[{ required: true, message: 'Organization is required' }]}
      >
        <Input size="large" placeholder="Enter organization" />
      </Form.Item>
      <Form.Item
        name="repo"
        label="Repository (e.g. react)"
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

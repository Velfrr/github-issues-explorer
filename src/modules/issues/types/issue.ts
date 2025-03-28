type Label = {
  id: number;
  name: string;
  color: string;
};

type User = {
  login: string;
  avatar_url: string;
  html_url: string;
};

type Reactions = {
  '+1': number;
  '-1': number;
  rocket: number;
};

export type Issue = {
  id: number;
  number: number;
  title: string;
  body: string | null;
  state: 'open' | 'closed';
  user: User;
  labels: Label[];
  reactions: Reactions;
  html_url: string;
  comments: number;
  created_at: string;
  updated_at: string;
};

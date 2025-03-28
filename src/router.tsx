import { createBrowserRouter } from 'react-router';
import { IssuesSearchPage, IssueDetailsPage, NotFoundPage } from './pages';
import { DefaultLayout } from './layouts';

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <IssuesSearchPage /> },
      {
        path: '/:owner/:repo/:number',
        element: <IssueDetailsPage />,
      },
      { path: '/*', element: <NotFoundPage /> },
    ],
  },
]);

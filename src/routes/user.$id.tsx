import { createFileRoute } from '@tanstack/react-router';
import { UserPage } from '@pages/UserPage/UserPage';
import { authRedirect } from '@helpers/index';

export const Route = createFileRoute('/user/$id')({
  component: UserPage,
  beforeLoad: () => {
    authRedirect();
  },
});

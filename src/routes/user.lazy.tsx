import { UserPage } from '@pages/UserPage/UserPage';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/user')({
  component: UserPage,
});

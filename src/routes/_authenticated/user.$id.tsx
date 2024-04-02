import { createFileRoute } from '@tanstack/react-router';
import { UserPage } from '@pages/UserPage/UserPage';

export const Route = createFileRoute('/_authenticated/user/$id')({
  component: UserPage,
});

import { createFileRoute } from '@tanstack/react-router';
import { UserPage } from '@pages/UserPage/UserPage';
import { redirectTo } from '@helpers/index';
import { useAuthCheck } from '@/hooks';

export const Route = createFileRoute('/_authenticated/user/$id')({
  component: UserPage,
});

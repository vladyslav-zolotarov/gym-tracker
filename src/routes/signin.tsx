import { createFileRoute } from '@tanstack/react-router';
import { SignInPage } from '@pages/SignInPage/SignInPage';
import { redirectTo } from '@helpers/index';
import { useAuthCheck } from '@/hooks';

export const Route = createFileRoute('/signin')({
  component: SignInPage,
  beforeLoad: () => {
    const { isAuthenticated } = useAuthCheck();
    redirectTo({ isAuthenticated, route: '/home' });
  },
});

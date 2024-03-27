import { createFileRoute } from '@tanstack/react-router';
import { SignUpPage } from '@pages/SignUpPage/SignUpPage';
import { redirectTo } from '@helpers/index';
import { useAuthCheck } from '@/hooks';

export const Route = createFileRoute('/signup')({
  component: SignUpPage,
  beforeLoad: () => {
    const { isAuthenticated } = useAuthCheck();
    redirectTo({ isAuthenticated, route: '/home' });
  },
});

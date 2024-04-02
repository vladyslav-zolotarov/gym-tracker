import { createFileRoute } from '@tanstack/react-router';
import { SignUpPage } from '@pages/SignUpPage/SignUpPage';
import { redirectTo } from '@helpers/index';

export const Route = createFileRoute('/signup')({
  component: SignUpPage,
  beforeLoad: ({ context }) => {
    redirectTo({
      isAuthenticated: context.auth.isAuthenticated,
      route: '/home',
    });
  },
});
